import { prisma } from "@/lib/prismaClient";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers";

import bcrypt from "bcrypt";


export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
        role: {},
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        if (credentials.role === "tutor") {
          const userExists = await prisma.tutor.findUnique({
            where: { email: credentials.email },
          });
          if (!userExists) throw new Error("User not found!");
          const isCorrectPassword = await bcrypt.compare(
            credentials.password,
            userExists.password!
          );
          if (!isCorrectPassword) throw new Error("Incorrect password!");
          return {
            id: userExists.id,
            name: userExists.name,
            email: userExists.email,
            username: userExists.username,
            role: "tutor",
            image: userExists.image,
          };
        }
        const userExists = await prisma.student.findUnique({
          where: { email: credentials.email },
        });
        if (!userExists || !userExists.password)
          throw new Error("User not found!");
        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          userExists.password
        );
        if (!isCorrectPassword) throw new Error("Incorrect password!");
        return {
          id: userExists.id,
          name: userExists.name,
          email: userExists.email,
          username: userExists.username,
          role: "student",
          image: userExists.image,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  pages: {
    signIn: "/sign-in",
  },

  callbacks: {
    async signIn({ user }) {
      const role = (await cookies()).get("role")?.value;
      console.log(role);
      user.role = role as "student" | "tutor";

      const tutor = await prisma.tutor.findUnique({
        where: { email: user.email! },
      });
      const student = await prisma.student.findUnique({
        where: { email: user.email! },
      });

      if (role === "student" && tutor) {
        throw new Error(
          "Email already exists as a Tutor. Please sign in with another account."
        );
      }
      if (role === "tutor" && student) {
        throw new Error(
          "Email already exists as a Student. Please sign in with another account."
        );
      }
      if (!tutor && !student) {
        if (role === "student") {
          const username = user.email?.split("@")[0];
          user.username = username!;
          await prisma.student.create({
            data: {
              name: user.name || "",
              email: user.email!,
              image: user.image,
              username: username!,
              social: "GOOGLE",
            },
          });
          return true;
        } else if (role === "tutor") {
          const username = user.email?.split("@")[0];
          user.username = username!;
          await prisma.tutor.create({
            data: {
              name: user.name || "",
              email: user.email!,
              image: user.image,
              username: username!,
              social: "GOOGLE",
            },
          });
          return true;
        }
      }
      if (tutor) {
        user.role = "tutor";
        user.username = tutor.username;
        return true;
      }
      user.role = "student";
      user.username = student!.username!;
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.username = token.username;
      }
      console.log(session);

      return session;
    },
  },
};