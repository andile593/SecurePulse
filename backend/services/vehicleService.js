const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createVehicle(data) {
  return prisma.vehicle.create({ data });
}

async function getAllVehicles() {
  return prisma.vehicle.findMany({
    include: { guards: true },
  });
}

async function getVehicleById(id) {
  return prisma.vehicle.findUnique({
    where: { id },
    include: { guard: true },
  });
}

async function updateVehicle(id, data) {
  try {
    return await prisma.vehicle.update({ where: { id }, data });
  } catch {
    return null;
  }
}

async function deleteVehicle(id) {
  try {
    await prisma.vehicle.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}

module.exports = {
  createVehicle,
  getAllVehicles,
  getVehicleById,
  updateVehicle,
  deleteVehicle,
};
