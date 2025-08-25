const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createClient(data) {
  try {
    const sitesData = (data.sites || []).map((site) => ({
      name: site.name,
      address: site.address,
      latitude: site.latitude ?? 0,
      longitude: site.longitude ?? 0,
    }));

    return await prisma.client.create({
      data: {
        name: data.name,
        surname: data.surname,
        email: data.email,
        phone: data.phone,
        sites: {
          create: sitesData,
        },
      },
      include: { sites: true },
    });
  } catch (error) {
    console.error("Failed to create client:", error.message);
    return null;
  }
}

async function getAllClients() {
  try {
    return await prisma.client.findMany({ include: { sites: true } });
  } catch (error) {
    console.error("Failed to fetch clients:", error.message);
    return [];
  }
}

async function getClientById(id) {
  try {
    return await prisma.client.findUnique({
      where: { id },
      include: { sites: true },
    });
  } catch (error) {
    console.error(`Failed to fetch client ${id}:`, error.message);
    return null;
  }
}

async function updateClient(id, data) {
  try {
    const { sites, deletedSiteIds = [], ...clientFields } = data;

    let sitesUpdateOps = {};

    if (sites) {
      const sitesToCreate = sites.filter(site => !site.id);
      const sitesToUpdate = sites.filter(site => site.id);

      sitesUpdateOps = {
        create: sitesToCreate.map(site => ({
          name: site.name,
          address: site.address,
          latitude: site.latitude ?? 0,
          longitude: site.longitude ?? 0,
        })),
        update: sitesToUpdate.map(site => ({
          where: { id: site.id },
          data: {
            name: site.name,
            address: site.address,
            latitude: site.latitude ?? 0,
            longitude: site.longitude ?? 0,
          },
        })),
        deleteMany: deletedSiteIds.length > 0 ? { id: { in: deletedSiteIds } } : undefined,
      };
    }

    return await prisma.client.update({
      where: { id },
      data: {
        ...clientFields,
        sites: sites ? sitesUpdateOps : undefined,
      },
      include: { sites: true },
    });
  } catch (error) {
    console.error(`Failed to update client ${id}:`, error.message);
    return null;
  }
}

async function deleteClient(id) {
  try {
    await prisma.site.deleteMany({ where: { clientId: id } });
    await prisma.client.delete({ where: { id } });
    return { message: "Client and related sites deleted successfully" };
  } catch (error) {
    if (error.code === 'P2025') {
      console.warn(`Client ${id} not found`);
      return null;
    }
    console.error(`Failed to delete client ${id}:`, error.message);
    return null;
  }
}

module.exports = {
  createClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClient,
};
