const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createSite(data) {
  try {
    const { name, address, clientId, transmitters } = data;

    return await prisma.site.create({
      data: {
        name,
        address,
        clientId,
        transmitters: {
          create: transmitters?.map(t => ({
            referenceCode: t.referenceCode,
          })),
        },
      },
      include: {
        client: true,
        transmitters: true, 
      },
    });
  } catch (error) {
    console.error("Failed to create site:", error.message);
    return null;
  }
}

async function getAllSites() {
  try {
    return await prisma.site.findMany({
      include: { client: true, transmitters: true },
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
      include: { client: true, transmitters: true },
    });
  } catch (error) {
    console.error(`Failed to fetch site ${id}:`, error.message);
    return null;
  }
}



async function updateSite(id, data) {
  try {
    const { name, address, clientId, transmitters } = data;

    const updatePayload = {
      name,
      address,
    };

    if (clientId) {
      updatePayload.client = { connect: { id: clientId } };
    }

    // Handle transmitters update
    if (transmitters) {
      updatePayload.transmitters = {
        deleteMany: {}, // remove existing transmitters
        create: transmitters.map(t => ({ referenceCode: t.referenceCode })),
      };
    }

    return prisma.site.update({
      where: { id },
      data: updatePayload,
      include: {
        client: true,
        transmitters: true, // include updated transmitters
      },
    });
  } catch (error) {
    console.error(`Failed to update site ${id}:`, error.message);
    return null;
  }
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
