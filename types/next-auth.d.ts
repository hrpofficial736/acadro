import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      username: string;
      role: "student" | "tutor";
      image?: string | null;
    };
  }
  interface User {
    id: string;
    role: "tutor" | "student";
    username: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: "student" | "tutor";
    username: string;
  }
}
