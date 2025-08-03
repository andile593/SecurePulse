import { PrismaClient, Alarm } from '@prisma/client';

const prisma = new PrismaClient();

export async function createAlarm(data: Omit<Alarm, 'id'>): Promise<Alarm> {
  return prisma.alarm.create({ data });
}

export async function getAllAlarms(): Promise<Alarm[]> {
  return prisma.alarm.findMany({
    include: {
      site: true,
      obLogs: true,
      aiCall: true,
      dispatch: true,
    },
  });
}

export async function getAlarmById(id: number): Promise<Alarm | null> {
  return prisma.alarm.findUnique({
    where: { id },
    include: {
      site: true,
      obLogs: true,
      aiCall: true,
      dispatch: true,
    },
  });
}

export async function updateAlarm(id: number, data: Partial<Alarm>): Promise<Alarm | null> {
  try {
    return await prisma.alarm.update({
      where: { id },
      data,
    });
  } catch {
    return null;
  }
}

export async function deleteAlarm(id: number): Promise<boolean> {
  try {
    await prisma.alarm.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}
