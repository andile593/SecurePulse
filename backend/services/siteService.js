const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createSite(data) {
  try {
    return await prisma.site.create({ data });
  } catch (error) {
    console.error("Failed to create site:", error.message);
    return null;
  }
}

async function getAllSites() {
  try {
    return await prisma.site.findMany({
      include: { client: true, alarms: true },
    });
  } catch (error) {
    console.error("Failed to fetch sites:", error.message);
    return [];
  }
}

async function getSiteById(id) {
  try {
    return await prisma.site.findUnique({
      where: { id },
      include: { client: true, alarms: true },
    });
  } catch (error) {
    console.error(`Failed to fetch site ${id}:`, error.message);
    return null;
  }
}


async function updateSite(id, data) {
  
  const { name, address, latitude, longitude, clientId } = data;

  const updatePayload = {
    name,
    address,
    latitude,
    longitude,
  };

  
  if (clientId) {
    updatePayload.client = { connect: { id: clientId } };
  }

  return prisma.site.update({
    where: { id },
    data: updatePayload,
    include: {
      client: true,
      alarms: true,
    },
  });
}

async function deleteSite(id) {
  try {
    await prisma.site.delete({ where: { id } });
    return true;
  } catch (error) {
    console.error(`Failed to delete site ${id}:`, error.message);
    return false;
  }
}

module.exports = {
  createSite,
  getAllSites,
  getSiteById,
  updateSite,
  deleteSite,
};
