const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createGuard(data) {
  return prisma.guard.create({ data });
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
    return await prisma.guard.update({ where: { id }, data });
  } catch {
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
