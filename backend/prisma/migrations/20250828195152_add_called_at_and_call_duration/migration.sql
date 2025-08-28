-- CreateTable
CREATE TABLE "public"."Client" (
    "id" TEXT NOT NULL,
    "shortId" SERIAL NOT NULL,
    "surname" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Site" (
    "id" TEXT NOT NULL,
    "shortId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "clientId" TEXT NOT NULL,

    CONSTRAINT "Site_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Alarm" (
    "id" TEXT NOT NULL,
    "shortId" SERIAL NOT NULL,
    "triggeredAt" TIMESTAMP(3) NOT NULL,
    "eventType" TEXT NOT NULL,
    "priority" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "siteId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "resolutionNotes" TEXT,
    "resolvedBy" TEXT,
    "resolvedAt" TIMESTAMP(3),
    "lastAICheckAt" TIMESTAMP(3),
    "aiDecision" TEXT,

    CONSTRAINT "Alarm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ObLog" (
    "id" TEXT NOT NULL,
    "shortId" SERIAL NOT NULL,
    "logTime" TIMESTAMP(3) NOT NULL,
    "message" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "guardId" TEXT,

    CONSTRAINT "ObLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AiCall" (
    "id" TEXT NOT NULL,
    "alarmId" TEXT NOT NULL,
    "calledAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "callDuration" TEXT,
    "notes" TEXT,
    "aiDecision" TEXT,
    "confidenceScore" DOUBLE PRECISION,
    "evaluatedAt" TIMESTAMP(3),

    CONSTRAINT "AiCall_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Dispatch" (
    "id" TEXT NOT NULL,
    "shortId" SERIAL NOT NULL,
    "dispatchedAt" TIMESTAMP(3) NOT NULL,
    "arrivalTime" TIMESTAMP(3),
    "resolvedAt" TIMESTAMP(3),
    "responseNotes" TEXT,
    "alarmId" TEXT NOT NULL,
    "guardId" TEXT,
    "vehicleId" TEXT,

    CONSTRAINT "Dispatch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "shortId" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastLogin" TIMESTAMP(3),
    "roleId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserRole" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "UserRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Vehicle" (
    "id" TEXT NOT NULL,
    "shortId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "plate" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Guard" (
    "id" TEXT NOT NULL,
    "shortId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "assignedVehicleId" TEXT,

    CONSTRAINT "Guard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_shortId_key" ON "public"."Client"("shortId");

-- CreateIndex
CREATE UNIQUE INDEX "Site_shortId_key" ON "public"."Site"("shortId");

-- CreateIndex
CREATE UNIQUE INDEX "Alarm_shortId_key" ON "public"."Alarm"("shortId");

-- CreateIndex
CREATE UNIQUE INDEX "ObLog_shortId_key" ON "public"."ObLog"("shortId");

-- CreateIndex
CREATE UNIQUE INDEX "Dispatch_shortId_key" ON "public"."Dispatch"("shortId");

-- CreateIndex
CREATE UNIQUE INDEX "Dispatch_alarmId_key" ON "public"."Dispatch"("alarmId");

-- CreateIndex
CREATE UNIQUE INDEX "User_shortId_key" ON "public"."User"("shortId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserRole_name_key" ON "public"."UserRole"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_shortId_key" ON "public"."Vehicle"("shortId");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_plate_key" ON "public"."Vehicle"("plate");

-- CreateIndex
CREATE UNIQUE INDEX "Guard_shortId_key" ON "public"."Guard"("shortId");

-- AddForeignKey
ALTER TABLE "public"."Site" ADD CONSTRAINT "Site_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "public"."Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Alarm" ADD CONSTRAINT "Alarm_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "public"."Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Alarm" ADD CONSTRAINT "Alarm_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "public"."Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ObLog" ADD CONSTRAINT "ObLog_guardId_fkey" FOREIGN KEY ("guardId") REFERENCES "public"."Guard"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AiCall" ADD CONSTRAINT "AiCall_alarmId_fkey" FOREIGN KEY ("alarmId") REFERENCES "public"."Alarm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Dispatch" ADD CONSTRAINT "Dispatch_alarmId_fkey" FOREIGN KEY ("alarmId") REFERENCES "public"."Alarm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Dispatch" ADD CONSTRAINT "Dispatch_guardId_fkey" FOREIGN KEY ("guardId") REFERENCES "public"."Guard"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Dispatch" ADD CONSTRAINT "Dispatch_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "public"."Vehicle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "public"."UserRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Guard" ADD CONSTRAINT "Guard_assignedVehicleId_fkey" FOREIGN KEY ("assignedVehicleId") REFERENCES "public"."Vehicle"("id") ON DELETE SET NULL ON UPDATE CASCADE;
