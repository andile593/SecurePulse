import { PrismaClient, User, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export async function createUser(data: Prisma.UserCreateInput): Promise<User> {
  return prisma.user.create({ data });
}

export async function getAllUsers(): Promise<User[]> {
  return prisma.user.findMany();
}

export async function getUserById(id: number): Promise<User | null> {
  return prisma.user.findUnique({ where: { id } });
}

export async function updateUser(id: number, data: Prisma.UserUpdateInput): Promise<User | null> {
  try {
    return await prisma.user.update({ where: { id }, data });
  } catch {
    return null;
  }
}

export async function deleteUser(id: number): Promise<boolean> {
  try {
    await prisma.user.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}
