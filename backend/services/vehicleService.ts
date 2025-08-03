import { PrismaClient, Vehicle, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export async function createVehicle(data: Prisma.VehicleCreateInput): Promise<Vehicle> {
  return prisma.vehicle.create({ data });
}

export async function getAllVehicles(): Promise<Vehicle[]> {
  return prisma.vehicle.findMany({
    include: { guards: true },  // assuming plural is correct in your schema
  });
}

export async function getVehicleById(id: number): Promise<Vehicle | null> {
  return prisma.vehicle.findUnique({
    where: { id },
    include: { guards: true },  // fixed to plural to match the above
  });
}

export async function updateVehicle(id: number, data: Prisma.VehicleUpdateInput): Promise<Vehicle | null> {
  try {
    return await prisma.vehicle.update({ where: { id }, data });
  } catch {
    return null;
  }
}

export async function deleteVehicle(id: number): Promise<boolean> {
  try {
    await prisma.vehicle.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}
