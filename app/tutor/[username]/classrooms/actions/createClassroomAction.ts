"use server";

import { prisma } from "@/lib/prismaClient";
import { CreateClassroomFormProps } from "../components/CreateClassroomForm";
import { serverResponse } from "@/lib/serverResponse";

export default async function createClassroomAction(
  formData: CreateClassroomFormProps
) {
  try {
    const checkForExistingClassroom = await prisma.classroom.findFirst({
      where: {
        name: formData.name,
      },
    });


    if (checkForExistingClassroom)
      return serverResponse({
        status: 302,
        success: false,
        message: "Classroom already exists!",
      });

    await prisma.classroom.create({
      data: formData,
    });

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
