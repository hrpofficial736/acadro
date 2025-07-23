import { prisma } from "@/lib/prismaClient";
import ClassroomComponent from "./components/ClassroomComponent";

export default async function ClassroomsPage() {
  const classrooms = await prisma.classroom.findMany();
  return <ClassroomComponent classrooms={classrooms} />;
}
