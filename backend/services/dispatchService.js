const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createDispatch(data) {
  return prisma.dispatch.create({ data });
}

async function getAllDispatches() {
  return prisma.dispatch.findMany({ include: { alarm: true } });
}

async function getDispatchById(id) {
  return prisma.dispatch.findUnique({
    where: { id },
    include: { alarm: true },
  });
}

async function updateDispatch(id, data) {
  try {
    // Only allow direct fields or nested relation updates
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
    console.error("Failed to update dispatch:", error);
    return null;
  }
}


async function deleteDispatch(id) {
  try {

    const dispatch = await prisma.dispatch.findUnique({
      where: { id },
      include: {
        alarm: true,  
      },
    });

    if (!dispatch) {
      console.error(`Dispatch with ID ${id} not found.`);
      return null; // Nothing to delete
    }

    const deleted = await prisma.dispatch.delete({
      where: { id },
    });

    console.log(`Dispatch with ID ${id} deleted successfully.`);
    return deleted;

  } catch (error) {
    console.error("Failed to delete dispatch:", error);
    return null; // Indicates failure
  }
}

module.exports = {
  createDispatch,
  getAllDispatches,
  getDispatchById,
  updateDispatch,
  deleteDispatch,
};
