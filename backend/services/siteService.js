const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createSite(data) {
  return prisma.site.create({ data });
}

async function getAllSites() {
  return prisma.site.findMany({
    include: { client: true, alarms: true }
  });
}

async function getSiteById(id) {
  return prisma.site.findUnique({
    where: { id },
    include: { client: true, alarms: true }
  });
}

async function updateSite(id, data) {
  try {
    return await prisma.site.update({ where: { id }, data });
  } catch {
    return null;
  }
}

async function deleteSite(id) {
  try {
    await prisma.site.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}

module.exports = {
  createSite,
  getAllSites,
  getSiteById,
  updateSite,
  deleteSite
};
