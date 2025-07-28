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
    return await prisma.dispatch.update({ where: { id }, data });
  } catch {
    return null;
  }
}

async function deleteDispatch(id) {
  try {
    await prisma.dispatch.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}

module.exports = {
  createDispatch,
  getAllDispatches,
  getDispatchById,
  updateDispatch,
  deleteDispatch,
};
