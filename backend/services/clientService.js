const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createClient(data) {
  // Validate latitude and longitude or set defaults (e.g., 0) to avoid Prisma errors
  const sitesData = (data.sites || []).map((site) => ({
    name: site.name,
    address: site.address,
    latitude: site.latitude ?? 0,  // provide default if missing
    longitude: site.longitude ?? 0, // provide default if missing
  }));

  return prisma.client.create({
    data: {
      name: data.name,
      surname: data.surname,
      email: data.email,
      phone: data.phone,
      sites: {
        create: sitesData,
      },
    },
  });
}

async function getAllClients() {
  return prisma.client.findMany({
    include: { sites: true },
  });
}

async function getClientById(id) {
  return prisma.client.findUnique({
    where: { id },
    include: { sites: true },
  });
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
    console.error("Update Client error:", error);
    return null;
  }
}



async function deleteClient(id) {
  try {
    // Delete all sites related to the client
    await prisma.site.deleteMany({
      where: { clientId: id },
    });

    // Now delete the client
    await prisma.client.delete({
      where: { id },
    });

    return { message: "Client and related sites deleted successfully" };
  } catch (error) {
    throw error;
  }
}


module.exports = {
  createClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClient,
};
