-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "classroomId" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "attendance" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Session_id_key" ON "Session"("id");

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
