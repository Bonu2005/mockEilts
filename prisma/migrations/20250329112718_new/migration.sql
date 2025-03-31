-- CreateEnum
CREATE TYPE "centerStatus" AS ENUM ('ACTIVE', 'PENDING', 'DECLARED');

-- CreateEnum
CREATE TYPE "teacherStatus" AS ENUM ('ACTIVE', 'PENDING', 'DECLARED');

-- CreateEnum
CREATE TYPE "reading_bloc_name" AS ENUM ('PART1', 'PART2', 'PART3');

-- CreateEnum
CREATE TYPE "writing_bloc_name" AS ENUM ('TASK1', 'TASK2');

-- CreateEnum
CREATE TYPE "speaking_bloc_name" AS ENUM ('TASK1', 'TASK2');

-- CreateEnum
CREATE TYPE "reading_bloc_type" AS ENUM ('MULTIPLE_CHOICE', 'TRUE_FALSE_NOT_GIVEN', 'YES_NO_NOT_GIVEN', 'MATCHING_HEADINGS', 'MATCHING_INFORMATION', 'MATCHING_FEATURES', 'MATCHING_SENTENCE_ENDINGS', 'SENTENCE_COMPLETION', 'SUMMARY_COMPLETION', 'NOTE_COMPLETION', 'DIAGRAM_LABEL_COMPLETION', 'SHORT_ANSWER', 'LIST_SELECTION', 'GLOBAL_MULTIPLE_CHOICE');

-- CreateTable
CREATE TABLE "Region" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Center" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "regionId" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "status" "centerStatus" NOT NULL DEFAULT 'PENDING',
    "centerRole" TEXT NOT NULL DEFAULT 'Center',

    CONSTRAINT "Center_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teachers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "sertificate" TEXT NOT NULL,
    "status" "teacherStatus" NOT NULL,
    "image" TEXT NOT NULL,
    "centerId" TEXT NOT NULL,

    CONSTRAINT "Teachers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Group" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "cheekerTeacherId" TEXT NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reading_Variant" (
    "id" TEXT NOT NULL,
    "isReady" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Reading_Variant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reading_Bloc" (
    "id" TEXT NOT NULL,
    "blocName" "reading_bloc_name" NOT NULL,
    "text" TEXT NOT NULL,
    "reading_variantId" TEXT NOT NULL,

    CONSTRAINT "Reading_Bloc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reading_Bloc_Qeus" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" "reading_bloc_type" NOT NULL,
    "reading_blocId" TEXT NOT NULL,

    CONSTRAINT "Reading_Bloc_Qeus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reading_Quest" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "options" TEXT[],
    "correct" TEXT NOT NULL,
    "questionNumber" INTEGER NOT NULL,
    "reading_bloc_quesId" TEXT NOT NULL,

    CONSTRAINT "Reading_Quest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exam" (
    "id" TEXT NOT NULL,
    "reading_variantId" TEXT NOT NULL,
    "writing_variantId" TEXT NOT NULL,
    "speaking_variantId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,

    CONSTRAINT "Exam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Result" (
    "id" TEXT NOT NULL,
    "examId" TEXT NOT NULL,
    "readingScore" INTEGER NOT NULL,
    "listeningScore" INTEGER NOT NULL,
    "speakingScore" INTEGER NOT NULL,
    "writingScore" INTEGER NOT NULL,
    "cheakerTeacherId" TEXT NOT NULL,
    "speakingComment" TEXT NOT NULL,
    "writingComment" TEXT NOT NULL,
    "overall" INTEGER NOT NULL,

    CONSTRAINT "Result_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Writing_Var" (
    "id" TEXT NOT NULL,
    "writingName" TEXT NOT NULL,
    "isReady" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Writing_Var_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Writing_Bloc" (
    "id" TEXT NOT NULL,
    "writingVarId" TEXT NOT NULL,
    "taskName" "writing_bloc_name" NOT NULL,

    CONSTRAINT "Writing_Bloc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Writing_Task" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "task" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "writing_blocId" TEXT NOT NULL,

    CONSTRAINT "Writing_Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Speaking_Variant" (
    "id" TEXT NOT NULL,
    "speakingName" TEXT NOT NULL,
    "isReady" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Speaking_Variant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Speaking_Bloc" (
    "id" TEXT NOT NULL,
    "taskName" "speaking_bloc_name" NOT NULL,
    "speaking_variantId" TEXT NOT NULL,

    CONSTRAINT "Speaking_Bloc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Speaking_Task" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "task" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "speaking_blocId" TEXT NOT NULL,

    CONSTRAINT "Speaking_Task_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Result_id_key" ON "Result"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Result_examId_key" ON "Result"("examId");

-- AddForeignKey
ALTER TABLE "Center" ADD CONSTRAINT "Center_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teachers" ADD CONSTRAINT "Teachers_centerId_fkey" FOREIGN KEY ("centerId") REFERENCES "Center"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_cheekerTeacherId_fkey" FOREIGN KEY ("cheekerTeacherId") REFERENCES "Teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reading_Bloc" ADD CONSTRAINT "Reading_Bloc_reading_variantId_fkey" FOREIGN KEY ("reading_variantId") REFERENCES "Reading_Variant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reading_Bloc_Qeus" ADD CONSTRAINT "Reading_Bloc_Qeus_reading_blocId_fkey" FOREIGN KEY ("reading_blocId") REFERENCES "Reading_Bloc"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reading_Quest" ADD CONSTRAINT "Reading_Quest_reading_bloc_quesId_fkey" FOREIGN KEY ("reading_bloc_quesId") REFERENCES "Reading_Bloc_Qeus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exam" ADD CONSTRAINT "Exam_reading_variantId_fkey" FOREIGN KEY ("reading_variantId") REFERENCES "Reading_Variant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exam" ADD CONSTRAINT "Exam_writing_variantId_fkey" FOREIGN KEY ("writing_variantId") REFERENCES "Writing_Var"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exam" ADD CONSTRAINT "Exam_speaking_variantId_fkey" FOREIGN KEY ("speaking_variantId") REFERENCES "Speaking_Variant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exam" ADD CONSTRAINT "Exam_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Result" ADD CONSTRAINT "Result_examId_fkey" FOREIGN KEY ("examId") REFERENCES "Exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Result" ADD CONSTRAINT "Result_cheakerTeacherId_fkey" FOREIGN KEY ("cheakerTeacherId") REFERENCES "Teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Writing_Bloc" ADD CONSTRAINT "Writing_Bloc_writingVarId_fkey" FOREIGN KEY ("writingVarId") REFERENCES "Writing_Var"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Writing_Task" ADD CONSTRAINT "Writing_Task_writing_blocId_fkey" FOREIGN KEY ("writing_blocId") REFERENCES "Writing_Bloc"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Speaking_Bloc" ADD CONSTRAINT "Speaking_Bloc_speaking_variantId_fkey" FOREIGN KEY ("speaking_variantId") REFERENCES "Speaking_Variant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Speaking_Task" ADD CONSTRAINT "Speaking_Task_speaking_blocId_fkey" FOREIGN KEY ("speaking_blocId") REFERENCES "Speaking_Bloc"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
