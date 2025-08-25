const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createAiCall(data) {
  try {
    return await prisma.aiCall.create({ data });
  } catch (error) {
    console.error("Failed to create AI call:", error.message);
    return null; // fallback
  }
}

async function getAllAiCalls() {
  try {
    return await prisma.aiCall.findMany({ include: { alarm: true } });
  } catch (error) {
    console.error("Failed to fetch AI calls:", error.message);
    return []; // fallback
  }
}

async function getAiCallById(id) {
  try {
    return await prisma.aiCall.findUnique({
      where: { id },
      include: { alarm: true },
    });
  } catch (error) {
    console.error(`Failed to fetch AI call ${id}:`, error.message);
    return null; // fallback
  }
}

async function updateAiCall(id, data) {
  try {
    return await prisma.aiCall.update({
      where: { id },
      data: {
        aiDecision: data.aiDecision,
        confidenceScore: data.confidenceScore,
        evaluatedAt: data.evaluatedAt ? new Date(data.evaluatedAt) : undefined,
        notes: data.notes,
        alarm: data.alarmId ? { connect: { id: data.alarmId } } : undefined,
      },
    });
  } catch (error) {
    console.error(`Error updating AI call ${id}:`, error.message);
    return null; // fallback
  }
}

async function deleteAiCall(id) {
  try {
    await prisma.aiCall.delete({ where: { id } });
    return true;
  } catch (error) {
    console.error(`Failed to delete AI call ${id}:`, error.message);
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
