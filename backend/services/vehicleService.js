const prisma = require('../utils/prisma');

async function createVehicle(data) {
  return await prisma.vehicle.create({ data });
}

async function getAllVehicles() {
  return await prisma.vehicle.findMany({
    include: { guards: true },
  });
}

async function getVehicleById(id) {
  return await prisma.vehicle.findUnique({
    where: { id },
    include: { guards: true },
  });
}

async function updateVehicle(id, data) {
  // Strip nested guards — cannot update relations this way
  const { guards, ...safeData } = data;
  return await prisma.vehicle.update({
    where: { id },
    data: safeData,
  });
}

async function deleteVehicle(id) {
  return await prisma.vehicle.delete({ where: { id } });
}

module.exports = {
  createVehicle,
  getAllVehicles,
  getVehicleById,
  updateVehicle,
  deleteVehicle,
};