const prisma = require('../utils/prisma');

async function createSite(data) {
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
}

async function getAllSites() {
  return await prisma.site.findMany({
    include: { client: true, transmitters: true },
  });
}

async function getSiteById(id) {
  return await prisma.site.findUnique({
    where: { id },
    include: { client: true, transmitters: true },
  });
}

async function updateSite(id, data) {
  const { name, address, clientId, transmitters } = data;

  const updatePayload = { name, address };

  if (clientId) {
    updatePayload.client = { connect: { id: clientId } };
  }

  if (transmitters) {
    updatePayload.transmitters = {
      deleteMany: {},
      create: transmitters.map(t => ({ referenceCode: t.referenceCode })),
    };
  }

  return await prisma.site.update({
    where: { id },
    data: updatePayload,
    include: { client: true, transmitters: true },
  });
}

async function deleteSite(id) {
  return await prisma.site.delete({ where: { id } });
}

module.exports = {
  createSite,
  getAllSites,
  getSiteById,
  updateSite,
  deleteSite,
};