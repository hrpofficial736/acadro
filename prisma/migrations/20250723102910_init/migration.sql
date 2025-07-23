/*
  Warnings:

  - Added the required column `tutorId` to the `Classroom` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Classroom" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "tutorId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "assignmentsGiven" SET DEFAULT 0,
ALTER COLUMN "avgMarks" SET DEFAULT 0,
ALTER COLUMN "noOfStudents" SET DEFAULT 0,
ALTER COLUMN "notesUploaded" SET DEFAULT 0,
ALTER COLUMN "sessionsTaken" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Tutor" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "_ClassroomToStudent" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ClassroomToStudent_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ClassroomToStudent_B_index" ON "_ClassroomToStudent"("B");

-- AddForeignKey
ALTER TABLE "Classroom" ADD CONSTRAINT "Classroom_tutorId_fkey" FOREIGN KEY ("tutorId") REFERENCES "Tutor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassroomToStudent" ADD CONSTRAINT "_ClassroomToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "Classroom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassroomToStudent" ADD CONSTRAINT "_ClassroomToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
