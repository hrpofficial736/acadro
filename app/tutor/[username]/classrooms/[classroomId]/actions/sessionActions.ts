"use server";

import { prisma } from "@/lib/prismaClient";
import { serverResponse } from "@/lib/serverResponse";
import { revalidatePath } from "next/cache";
import { SessionInterface } from "@/interfaces/session";





export async function createSessionAction (formData: SessionInterface) {
  try {
    const checkIfClassroomExists = await prisma.classroom.findUnique({
      where: {
        id: formData.classroomId,
      },
      include: {
        sessions: true,
      },
    });

    if (!checkIfClassroomExists)
      return serverResponse({
        status: 404,
        success: false,
        message: "Classroom not found",
      });

    await prisma.session.create({
      data: formData,
    });

    revalidatePath("/");
    return serverResponse({
      status: 200,
      success: true,
      message: "Session created successfully!",
    });
  } catch (error) {
    return serverResponse({
      status: 500,
      success: false,
      message: "Internal Server Error!",
    });
  }
}


export async function updateSessionAction (formData: SessionInterface, sessionId: string) {
  try {
    const checkIfClassroomExists = await prisma.classroom.findUnique({
      where: {
        id: formData.classroomId,
      },
      include: {
        sessions: true,
      },
    });

    if (!checkIfClassroomExists)
      return serverResponse({
        status: 404,
        success: false,
        message: "Classroom not found",
      });
      
      const session = await prisma.session.findUnique({
        where: {
          classroomId: formData.classroomId,
          id: sessionId,
        }
      })

      if (!session) return serverResponse({
        status: 404,
        success: false,
        message: "Session not found",
      });

    await prisma.session.update({
      where: {
        id: sessionId
      },
      data: formData,
    });

    revalidatePath("/");
    return serverResponse({
      status: 200,
      success: true,
      message: "Session updated successfully!",
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

export async function deleteSessionAction (classroomId: string, id: string) {
  try {
    const checkIfClassroomExists = await prisma.classroom.findUnique({
      where: { id: classroomId },
      include: {
        sessions: true
      }
    });

    if (!checkIfClassroomExists)
      return serverResponse({
        status: 404,
        success: false,
        message: "Classroom not found",
      });

      const session = await prisma.session.delete({
        where: {
          classroomId: classroomId,
          id: id
        }
      })

      if (!session) return serverResponse({
        status: 404,
        success: false,
        message: "Session not found",
      });
      revalidatePath("/")
      return serverResponse({
        status: 200,
        success: true,
        message: "Session deleted successfully!",
      });
  } catch (error) {
    return serverResponse({
      status: 500,
      success: false,
      message: "Internal Server Error!",
    });
  }
}
