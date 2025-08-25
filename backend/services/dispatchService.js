const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createDispatch(data) {
  try {
    return await prisma.dispatch.create({ data });
  } catch (error) {
    console.error("Failed to create dispatch:", error.message);
    return null;
  }
}

async function getAllDispatches() {
  try {
    return await prisma.dispatch.findMany({ include: { alarm: true } });
  } catch (error) {
    console.error("Failed to fetch dispatches:", error.message);
    return [];
  }
}

async function getDispatchById(id) {
  try {
    return await prisma.dispatch.findUnique({
      where: { id },
      include: { alarm: true },
    });
  } catch (error) {
    console.error(`Failed to fetch dispatch ${id}:`, error.message);
    return null;
  }
}

async function updateDispatch(id, data) {
  try {
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
  } catch (error) {
    console.error(`Failed to update dispatch ${id}:`, error.message);
    return null;
  }
}

async function deleteDispatch(id) {
  try {
    const dispatch = await prisma.dispatch.findUnique({
      where: { id },
      include: { alarm: true },
    });

    if (!dispatch) {
      console.warn(`Dispatch with ID ${id} not found.`);
      return null;
    }

    const deleted = await prisma.dispatch.delete({ where: { id } });
    console.log(`Dispatch with ID ${id} deleted successfully.`);
    return deleted;

  } catch (error) {
    console.error(`Failed to delete dispatch ${id}:`, error.message);
    return null;
  }
}

module.exports = {
  createDispatch,
  getAllDispatches,
  getDispatchById,
  updateDispatch,
  deleteDispatch,
};
