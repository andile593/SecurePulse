const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createClient(data) {
  return prisma.client.create({ data });
}

async function getAllClients() {
  return prisma.client.findMany({ include: { sites: true } });
}

async function getClientById(id) {
  return prisma.client.findUnique({
    where: { id },
    include: { sites: true }
  });
}

async function updateClient(id, data) {
  try {
    return await prisma.client.update({
      where: { id },
      data
    });
  } catch {
    return null;
  }
}

async function deleteClient(id) {
  try {
    await prisma.client.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}

module.exports = {
  createClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClient
};
