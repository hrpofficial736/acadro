import { prisma } from "@/lib/prismaClient";
import IndividualClassroomComponent from "./components/IndividualClassroomComponent";


type PageProps = {
    params: {
        username: string;
        classroomId: string;
    }
}

export default async function IndividualClassroomPage ({ params }: PageProps) {
    const classroomId = (await params).classroomId
    const sessions = await prisma.session.findMany({
        where: {
            classroomId
        }
    });
    return <IndividualClassroomComponent sessions={sessions} />
}

