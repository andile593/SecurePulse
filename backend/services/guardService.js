const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createGuard(data) {
  // Normalize assignedVehicleId: convert empty string to null
  const assignedVehicleId =
    data.assignedVehicleId && data.assignedVehicleId.trim() !== ""
      ? data.assignedVehicleId
      : null;

  return prisma.guard.create({
    data: {
      name: data.name,
      phone: data.phone,
      status: data.status,
      assignedVehicleId,
    },
  });
}

async function getAllGuards() {
  return prisma.guard.findMany({
    include: { assignedVehicle: true, obLogs: true, dispatches: true },
  });
}

async function getGuardById(id) {
  return prisma.guard.findUnique({
    where: { id },
    include: { assignedVehicle: true, obLogs: true, dispatches: true },
  });
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
        assignedVehicleId: data.assignedVehicleId || null,
      },
    });
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function deleteGuard(id) {
  try {
    await prisma.guard.delete({ where: { id } });
    return true;
  } catch {
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
