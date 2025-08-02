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
    return await prisma.aiCall.update({ where: { id }, data });
  } catch {
    return null;
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
