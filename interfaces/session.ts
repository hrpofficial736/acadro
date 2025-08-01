import { CreateSessionFormProps } from "@/app/tutor/[username]/classrooms/[classroomId]/components/window/SessionWindow";

export interface SessionInterface extends CreateSessionFormProps {
    id?: string;
    classroomId: string
}