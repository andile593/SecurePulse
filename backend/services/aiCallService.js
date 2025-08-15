const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createAiCall(data) {
  return prisma.aiCall.create({ data });
}

async function getAllAiCalls() {
  return prisma.aiCall.findMany({ include: { alarm: true } });
}

async function getAiCallById(id) {
  return prisma.aiCall.findUnique({
    where: { id },
    include: { alarm: true },
  });
}

async function updateAiCall(id, data) {
  try {
    const updatedAiCall = await prisma.aiCall.update({
      where: { id }, // the AiCall ID to update
      data: {
        aiDecision: data.aiDecision,
        confidenceScore: data.confidenceScore,
        evaluatedAt: new Date(data.evaluatedAt),
        notes: data.notes,
        // Link the existing Alarm by its ID
        alarm: {
          connect: { id: data.alarmId },
        },
      },
    });

    return updatedAiCall;
  } catch (error) {
    console.error("Error updating AiCall:", error);
    throw error;
  }
}

async function deleteAiCall(id) {
  try {
    await prisma.aiCall.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}

module.exports = {
  createAiCall,
  getAllAiCalls,
  getAiCallById,
  updateAiCall,
  deleteAiCall,
};
