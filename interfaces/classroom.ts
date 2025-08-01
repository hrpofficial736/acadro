import { CreateClassroomFormProps } from "@/app/tutor/[username]/classrooms/components/CreateClassroomForm";


export interface Classroom extends CreateClassroomFormProps {
    id?: string;
    noOfStudents?: number | null;
    sessionsTaken?: number | null;
    notesUploaded?: number | null;
    assignmentsGiven?: number | null;
    avgMarks?: number | null;
}