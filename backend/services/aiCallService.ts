import { PrismaClient, AiCall } from '@prisma/client';

const prisma = new PrismaClient();

export async function createAiCall(data: Omit<AiCall, 'id'>): Promise<AiCall> {
  return prisma.aiCall.create({ data });
}

export async function getAllAiCalls(): Promise<AiCall[]> {
  return prisma.aiCall.findMany({ include: { alarm: true } });
}

export async function getAiCallById(id: number): Promise<AiCall | null> {
  return prisma.aiCall.findUnique({
    where: { id },
    include: { alarm: true },
  });
}

export async function updateAiCall(id: number, data: Partial<AiCall>): Promise<AiCall | null> {
  try {
    return await prisma.aiCall.update({
      where: { id },
      data,
    });
  } catch {
    return null;
  }
}

export async function deleteAiCall(id: number): Promise<boolean> {
  try {
    await prisma.aiCall.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}
