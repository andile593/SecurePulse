import { PrismaClient, Guard } from '@prisma/client';

const prisma = new PrismaClient();

export async function createGuard(data: Prisma.GuardCreateInput): Promise<Guard> {
  return prisma.guard.create({ data });
}

export async function getAllGuards(): Promise<Guard[]> {
  return prisma.guard.findMany({
    include: { assignedVehicle: true, obLogs: true, dispatches: true },
  });
}

export async function getGuardById(id: number): Promise<Guard | null> {
  return prisma.guard.findUnique({
    where: { id },
    include: { assignedVehicle: true, obLogs: true, dispatches: true },
  });
}

export async function updateGuard(id: number, data: Prisma.GuardUpdateInput): Promise<Guard | null> {
  try {
    return await prisma.guard.update({ where: { id }, data });
  } catch {
    return null;
  }
}

export async function deleteGuard(id: number): Promise<boolean> {
  try {
    await prisma.guard.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}
