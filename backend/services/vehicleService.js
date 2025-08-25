const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createVehicle(data) {
  try {
    return await prisma.vehicle.create({ data });
  } catch (error) {
    console.error("Failed to create vehicle:", error.message);
    return null;
  }
}

async function getAllVehicles() {
  try {
    return await prisma.vehicle.findMany({
      include: { guards: true },
    });
  } catch (error) {
    console.error("Failed to fetch vehicles:", error.message);
    return [];
  }
}

async function getVehicleById(id) {
  try {
    return await prisma.vehicle.findUnique({
      where: { id },
      include: { guards: true },
    });
  } catch (error) {
    console.error(`Failed to fetch vehicle ${id}:`, error.message);
    return null;
  }
}

async function updateVehicle(id, data) {
  try {
    const { guards, ...safeData } = data; // ignore nested guards updates here
    return await prisma.vehicle.update({
      where: { id },
      data: safeData,
    });
  } catch (error) {
    console.error(`Failed to update vehicle ${id}:`, error.message);
    return null;
  }
}

async function deleteVehicle(id) {
  try {
    await prisma.vehicle.delete({ where: { id } });
    return true;
  } catch (error) {
    console.error(`Failed to delete vehicle ${id}:`, error.message);
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
