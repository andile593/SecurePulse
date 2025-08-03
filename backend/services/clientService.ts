import { PrismaClient, Client } from '@prisma/client';

const prisma = new PrismaClient();

export async function createClient(data: Omit<Client, 'id'>): Promise<Client> {
  return prisma.client.create({ data });
}

export async function getAllClients(): Promise<Client[]> {
  return prisma.client.findMany({ include: { sites: true } });
}

export async function getClientById(id: number): Promise<Client | null> {
  return prisma.client.findUnique({
    where: { id },
    include: { sites: true },
  });
}

export async function updateClient(id: number, data: Partial<Client>): Promise<Client | null> {
  try {
    return await prisma.client.update({
      where: { id },
      data,
    });
  } catch {
    return null;
  }
}

export async function deleteClient(id: number): Promise<boolean> {
  try {
    await prisma.client.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}
