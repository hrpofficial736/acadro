import { prisma } from "@/lib/prismaClient";
import ClassroomComponent from "./components/ClassroomComponent";


type PageProps = {
  params: {
    tutorId: string
  }
}

export default async function ClassroomsPage({ params }: PageProps) {
  const classrooms = await prisma.classroom.findMany({
    where: {
      tutorId: params.tutorId
    }
  });
  
  return <ClassroomComponent classrooms={classrooms} />;
}
