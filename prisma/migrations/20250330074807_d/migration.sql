-- AlterTable
ALTER TABLE "Center" ALTER COLUMN "centerRole" SET DEFAULT 'CENTER';

-- AlterTable
ALTER TABLE "Teachers" ADD COLUMN     "centerRole" TEXT NOT NULL DEFAULT 'TEACHER';
