const { PrismaClient } = require("@prisma/client");
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
  try {
    return await prisma.vehicle.findUnique({
      where: { id },
      include: { guards: true },
    });
  } catch (error) {
    console.error("Error in getVehicleById:", error);
    throw error;
  }
}

async function updateVehicle(id, data) {
  
  const { guards, ...safeData } = data;

  try {
    return await prisma.vehicle.update({
      where: { id },
      data: safeData, 
    });
  } catch (error) {
    console.error("Prisma updateVehicle error:", error);
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
