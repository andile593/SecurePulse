/*
  Warnings:

  - Made the column `alarmId` on table `AiCall` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."AiCall" DROP CONSTRAINT "AiCall_alarmId_fkey";

-- DropIndex
DROP INDEX "public"."AiCall_alarmId_key";

-- AlterTable
ALTER TABLE "public"."AiCall" ALTER COLUMN "alarmId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."AiCall" ADD CONSTRAINT "AiCall_alarmId_fkey" FOREIGN KEY ("alarmId") REFERENCES "public"."Alarm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
