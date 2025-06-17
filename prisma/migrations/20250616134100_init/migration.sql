/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `Tutor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Tutor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "username" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tutor" ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Student_username_key" ON "Student"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Tutor_username_key" ON "Tutor"("username");
