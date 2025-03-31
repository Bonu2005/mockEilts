/*
  Warnings:

  - You are about to drop the column `centerRole` on the `Teachers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Teachers" DROP COLUMN "centerRole",
ADD COLUMN     "teacherRole" TEXT NOT NULL DEFAULT 'TEACHER';
