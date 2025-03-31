/*
  Warnings:

  - You are about to drop the column `centerRole` on the `Center` table. All the data in the column will be lost.
  - You are about to drop the column `studentRole` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `teacherRole` on the `Teachers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Center" DROP COLUMN "centerRole",
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'CENTER';

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "studentRole",
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'STUDENT';

-- AlterTable
ALTER TABLE "Teachers" DROP COLUMN "teacherRole",
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'TEACHER';
