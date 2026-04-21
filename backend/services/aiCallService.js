const prisma = require('../utils/prisma');

async function createAiCall(data) {
  return await prisma.aiCall.create({ data });
}

async function getAllAiCalls() {
  return await prisma.aiCall.findMany({ include: { alarm: true } });
}

async function getAiCallById(id) {
  return await prisma.aiCall.findUnique({
    where: { id },
    include: { alarm: true },
  });
}

async function updateAiCall(id, data) {
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
}

async function deleteAiCall(id) {
  return await prisma.aiCall.delete({ where: { id } });
}

module.exports = {
  createAiCall,
  getAllAiCalls,
  getAiCallById,
  updateAiCall,
  deleteAiCall,
};