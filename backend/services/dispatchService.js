const prisma = require('../utils/prisma');

async function createDispatch(data) {
  return await prisma.dispatch.create({ data });
}

async function getAllDispatches() {
  return await prisma.dispatch.findMany({ include: { alarm: true } });
}

async function getDispatchById(id) {
  return await prisma.dispatch.findUnique({
    where: { id },
    include: { alarm: true },
  });
}

async function updateDispatch(id, data) {
  return await prisma.dispatch.update({
    where: { id },
    data: {
      dispatchedAt: data.dispatchedAt ? new Date(data.dispatchedAt) : undefined,
      arrivalTime: data.arrivalTime ? new Date(data.arrivalTime) : null,
      resolvedAt: data.resolvedAt ? new Date(data.resolvedAt) : null,
      responseNotes: data.responseNotes,
      guardId: data.guardId,
      vehicleId: data.vehicleId,
      alarmId: data.alarmId,
    },
  });
}

async function deleteDispatch(id) {
  return await prisma.dispatch.delete({ where: { id } });
}

module.exports = {
  createDispatch,
  getAllDispatches,
  getDispatchById,
  updateDispatch,
  deleteDispatch,
};