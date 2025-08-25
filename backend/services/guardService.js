const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createGuard(data) {
  try {
    const assignedVehicleId =
      data.assignedVehicleId && data.assignedVehicleId.trim() !== ""
        ? data.assignedVehicleId
        : null;

    return await prisma.guard.create({
      data: {
        name: data.name,
        phone: data.phone,
        status: data.status,
        assignedVehicleId,
      },
    });
  } catch (error) {
    console.error("Failed to create guard:", error.message);
    return null;
  }
}

async function getAllGuards() {
  try {
    return await prisma.guard.findMany({
      include: { assignedVehicle: true, obLogs: true, dispatches: true },
    });
  } catch (error) {
    console.error("Failed to fetch guards:", error.message);
    return [];
  }
}

async function getGuardById(id) {
  try {
    return await prisma.guard.findUnique({
      where: { id },
      include: { assignedVehicle: true, obLogs: true, dispatches: true },
    });
  } catch (error) {
    console.error(`Failed to fetch guard ${id}:`, error.message);
    return null;
  }
}

async function updateGuard(id, data) {
  try {
    const assignedVehicleId =
      data.assignedVehicleId && data.assignedVehicleId.trim() !== ""
        ? data.assignedVehicleId
        : null;

    return await prisma.guard.update({
      where: { id },
      data: {
        name: data.name ?? undefined,
        phone: data.phone ?? undefined,
        status: data.status ?? undefined,
        assignedVehicleId,
      },
    });
  } catch (error) {
    console.error(`Failed to update guard ${id}:`, error.message);
    return null;
  }
}

async function deleteGuard(id) {
  try {
    await prisma.guard.delete({ where: { id } });
    return true;
  } catch (error) {
    console.error(`Failed to delete guard ${id}:`, error.message);
    return false;
  }
}

module.exports = {
  createGuard,
  getAllGuards,
  getGuardById,
  updateGuard,
  deleteGuard,
};
