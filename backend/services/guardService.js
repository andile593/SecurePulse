const prisma = require('../utils/prisma');

async function createGuard(data) {
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
}

async function getAllGuards() {
  return await prisma.guard.findMany({
    // FIXED: was 'obLogs' — schema relation name is 'OBLogs'
    include: { assignedVehicle: true, OBLogs: true, dispatches: true },
  });
}

async function getGuardById(id) {
  return await prisma.guard.findUnique({
    where: { id },
    // FIXED: was 'obLogs' — schema relation name is 'OBLogs'
    include: { assignedVehicle: true, OBLogs: true, dispatches: true },
  });
}

async function updateGuard(id, data) {
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
}

async function deleteGuard(id) {
  return await prisma.guard.delete({ where: { id } });
}

module.exports = {
  createGuard,
  getAllGuards,
  getGuardById,
  updateGuard,
  deleteGuard,
};