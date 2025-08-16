/*
  Warnings:

  - A unique constraint covering the columns `[shortId]` on the table `AiCall` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[shortId]` on the table `Alarm` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[shortId]` on the table `Client` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[shortId]` on the table `Dispatch` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[shortId]` on the table `Guard` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[shortId]` on the table `ObLog` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[shortId]` on the table `Site` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[shortId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[shortId]` on the table `Vehicle` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."AiCall" ADD COLUMN     "shortId" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "public"."Alarm" ADD COLUMN     "shortId" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "public"."Client" ADD COLUMN     "shortId" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "public"."Dispatch" ADD COLUMN     "shortId" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "public"."Guard" ADD COLUMN     "shortId" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "public"."ObLog" ADD COLUMN     "shortId" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "public"."Site" ADD COLUMN     "shortId" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "shortId" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "public"."Vehicle" ADD COLUMN     "shortId" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "AiCall_shortId_key" ON "public"."AiCall"("shortId");

-- CreateIndex
CREATE UNIQUE INDEX "Alarm_shortId_key" ON "public"."Alarm"("shortId");

-- CreateIndex
CREATE UNIQUE INDEX "Client_shortId_key" ON "public"."Client"("shortId");

-- CreateIndex
CREATE UNIQUE INDEX "Dispatch_shortId_key" ON "public"."Dispatch"("shortId");

-- CreateIndex
CREATE UNIQUE INDEX "Guard_shortId_key" ON "public"."Guard"("shortId");

-- CreateIndex
CREATE UNIQUE INDEX "ObLog_shortId_key" ON "public"."ObLog"("shortId");

-- CreateIndex
CREATE UNIQUE INDEX "Site_shortId_key" ON "public"."Site"("shortId");

-- CreateIndex
CREATE UNIQUE INDEX "User_shortId_key" ON "public"."User"("shortId");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_shortId_key" ON "public"."Vehicle"("shortId");
