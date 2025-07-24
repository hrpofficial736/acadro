"use server";

import { prisma } from "@/lib/prismaClient";
import { serverResponse } from "@/lib/serverResponse";
import { Classroom } from "@/interfaces/classroom";
import { revalidatePath } from "next/cache";

export default async function createClassroomAction(
  formData: Classroom,
  tutorUsername: string
) {
  try {
    const checkIfUserExists = await prisma.tutor.findUnique({
      where: {
        username: tutorUsername,
      },
      include: {
        classrooms: true,
      },
    });

    if (!checkIfUserExists)
      return serverResponse({
        status: 404,
        success: false,
        message: "Tutor not found",
      });

    const checkForExistingClassroom = await prisma.classroom.findFirst({
      where: {
        tutorId: checkIfUserExists.id,
        name: formData.name,
      },
    });

    if (checkForExistingClassroom)
      return serverResponse({
        status: 302,
        success: false,
        message: "Classroom already exists!",
      });

    const newClassroom = await prisma.classroom.create({
      data: { ...formData, tutorId: checkIfUserExists.id },
    });

    checkIfUserExists.classrooms.push(newClassroom);
    revalidatePath("/");
    return serverResponse({
      status: 200,
      success: true,
      message: "Classroom created successfully!",
    });
  } catch (error) {
    console.log(error);

    return serverResponse({
      status: 500,
      success: false,
      message: "Internal Server Error!",
    });
  }
}
