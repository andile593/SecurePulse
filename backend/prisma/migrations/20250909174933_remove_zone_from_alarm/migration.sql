/*
  Warnings:

  - You are about to drop the column `aiDecision` on the `Alarm` table. All the data in the column will be lost.
  - You are about to drop the column `clientId` on the `Alarm` table. All the data in the column will be lost.
  - You are about to drop the column `lastAICheckAt` on the `Alarm` table. All the data in the column will be lost.
  - You are about to drop the column `priority` on the `Alarm` table. All the data in the column will be lost.
  - You are about to drop the column `resolutionNotes` on the `Alarm` table. All the data in the column will be lost.
  - You are about to drop the column `resolvedAt` on the `Alarm` table. All the data in the column will be lost.
  - You are about to drop the column `resolvedBy` on the `Alarm` table. All the data in the column will be lost.
  - You are about to drop the column `siteId` on the `Alarm` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Alarm` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Vehicle` table. All the data in the column will be lost.
  - You are about to drop the `ObLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserRole` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `transmitterId` to the `Alarm` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Alarm" DROP CONSTRAINT "Alarm_clientId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Alarm" DROP CONSTRAINT "Alarm_siteId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ObLog" DROP CONSTRAINT "ObLog_guardId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ObLog" DROP CONSTRAINT "ObLog_siteId_fkey";

-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_roleId_fkey";

-- AlterTable
ALTER TABLE "public"."AiCall" ADD COLUMN     "phone" TEXT;

-- AlterTable
ALTER TABLE "public"."Alarm" DROP COLUMN "aiDecision",
DROP COLUMN "clientId",
DROP COLUMN "lastAICheckAt",
DROP COLUMN "priority",
DROP COLUMN "resolutionNotes",
DROP COLUMN "resolvedAt",
DROP COLUMN "resolvedBy",
DROP COLUMN "siteId",
DROP COLUMN "status",
ADD COLUMN     "transmitterId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Vehicle" DROP COLUMN "description";

-- DropTable
DROP TABLE "public"."ObLog";

-- DropTable
DROP TABLE "public"."UserRole";

-- CreateTable
CREATE TABLE "public"."Transmitter" (
    "id" TEXT NOT NULL,
    "referenceCode" TEXT NOT NULL,
    "siteId" TEXT NOT NULL,

    CONSTRAINT "Transmitter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."OBLog" (
    "id" TEXT NOT NULL,
    "shortId" SERIAL NOT NULL,
    "logTime" TIMESTAMP(3) NOT NULL,
    "guardId" TEXT,
    "siteId" TEXT,
    "actionLog" TEXT NOT NULL,
    "notes" TEXT NOT NULL,

    CONSTRAINT "OBLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Role" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Transmitter_referenceCode_key" ON "public"."Transmitter"("referenceCode");

-- CreateIndex
CREATE UNIQUE INDEX "OBLog_shortId_key" ON "public"."OBLog"("shortId");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "public"."Role"("name");

-- AddForeignKey
ALTER TABLE "public"."Transmitter" ADD CONSTRAINT "Transmitter_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "public"."Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Alarm" ADD CONSTRAINT "Alarm_transmitterId_fkey" FOREIGN KEY ("transmitterId") REFERENCES "public"."Transmitter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OBLog" ADD CONSTRAINT "OBLog_guardId_fkey" FOREIGN KEY ("guardId") REFERENCES "public"."Guard"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OBLog" ADD CONSTRAINT "OBLog_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "public"."Site"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "public"."Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
