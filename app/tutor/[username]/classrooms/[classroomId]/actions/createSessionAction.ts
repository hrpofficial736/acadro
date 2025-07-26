"use server"

import { prisma } from "@/lib/prismaClient";
import { CreateSessionFormProps } from "../components/window/SessionWindow";
import { serverResponse } from "@/lib/serverResponse";
import { revalidatePath } from "next/cache";

interface CreateSessionActionProps extends CreateSessionFormProps {
    classroomId: string
}

export default async function createSessionAction (formData: CreateSessionActionProps) {
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
    
        
    
        const newSession = await prisma.session.create({
          data: formData,
        });
    
        checkIfClassroomExists.sessions.push(newSession);
        revalidatePath("/");
        return serverResponse({
          status: 200,
          success: true,
          message: "Session created successfully!",
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