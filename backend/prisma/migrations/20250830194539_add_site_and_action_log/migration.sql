/*
  Warnings:

  - You are about to drop the column `message` on the `ObLog` table. All the data in the column will be lost.
  - You are about to drop the column `source` on the `ObLog` table. All the data in the column will be lost.
  - Added the required column `actionLog` to the `ObLog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notes` to the `ObLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."ObLog" DROP COLUMN "message",
DROP COLUMN "source",
ADD COLUMN     "actionLog" TEXT NOT NULL,
ADD COLUMN     "notes" TEXT NOT NULL,
ADD COLUMN     "siteId" TEXT;

-- AddForeignKey
ALTER TABLE "public"."ObLog" ADD CONSTRAINT "ObLog_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "public"."Site"("id") ON DELETE SET NULL ON UPDATE CASCADE;
