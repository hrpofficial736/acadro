"use server";

import { prisma } from "@/lib/prismaClient";
import bcrypt from "bcrypt";

// Register Server Action

type RegisterData = {
  name: string;
  email: string;
  password: string;
  role: "student" | "tutor";
};

export async function registerAction(
  data: RegisterData
): Promise<boolean | string> {

    const { name, email, password, role } = data;
    const model = role === "tutor" ? prisma.tutor : prisma.student;
    let userExists;

    if (role === "tutor") {
      userExists = await prisma.tutor.findUnique({
        where: { email },
      });
      if (userExists) return "Email already exists for a Tutor!";
    } else {
      userExists = await prisma.student.findUnique({
        where: { email },
      });
      if (userExists) return "Email already exists for a Student!";
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const username = email.split("@")[0];
    const newUser = await model.create({
      data: {
        name,
        email,
        username,
        password: hashedPassword,
      },
    });
    if (newUser) {return true;}
    return false;
}
