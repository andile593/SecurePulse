/*
  Warnings:

  - A unique constraint covering the columns `[shortId]` on the table `AiCall` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."AiCall" ADD COLUMN     "shortId" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "AiCall_shortId_key" ON "public"."AiCall"("shortId");
