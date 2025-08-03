import { PrismaClient, Dispatch } from '@prisma/client';

const prisma = new PrismaClient();

export async function createDispatch(data: Omit<Dispatch, 'id'>): Promise<Dispatch> {
  return prisma.dispatch.create({ data });
}

export async function getAllDispatches(): Promise<Dispatch[]> {
  return prisma.dispatch.findMany({ include: { alarm: true } });
}

export async function getDispatchById(id: number): Promise<Dispatch | null> {
  return prisma.dispatch.findUnique({
    where: { id },
    include: { alarm: true },
  });
}

export async function updateDispatch(id: number, data: Partial<Dispatch>): Promise<Dispatch | null> {
  try {
    return await prisma.dispatch.update({
      where: { id },
      data,
    });
  } catch {
    return null;
  }
}

export async function deleteDispatch(id: number): Promise<boolean> {
  try {
    await prisma.dispatch.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}
