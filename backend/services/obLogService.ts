import { PrismaClient, ObLog, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllObLogs(): Promise<ObLog[]> {
  return prisma.obLog.findMany({ include: { alarm: true, guard: true } });
}

export async function getObLogById(id: number): Promise<ObLog | null> {
  return prisma.obLog.findUnique({
    where: { id },
    include: { alarm: true, guard: true },
  });
}

interface CreateObLogData {
  logTime: string | Date;
  message: string;
  source: string;
  guardId?: number;
  alarmId?: number;
}

export async function createObLog(data: CreateObLogData): Promise<ObLog> {
  const payload: Prisma.ObLogCreateInput = {
    logTime: new Date(data.logTime),
    message: data.message,
    source: data.source,
  };

  if (data.guardId) {
    const guardExists = await prisma.guard.findUnique({
      where: { id: data.guardId },
    });
    if (guardExists) {
      payload.guard = { connect: { id: data.guardId } };
    } else {
      console.warn('Invalid guardId provided. Skipping assignment.');
    }
  }

  if (data.alarmId) {
    payload.alarm = { connect: { id: data.alarmId } };
  }

  return prisma.obLog.create({
    data: payload,
  });
}

export async function updateObLog(id: number, data: Prisma.ObLogUpdateInput): Promise<ObLog | null> {
  try {
    return await prisma.obLog.update({ where: { id }, data });
  } catch {
    return null;
  }
}

export async function deleteObLog(id: number): Promise<boolean> {
  try {
    await prisma.obLog.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}
