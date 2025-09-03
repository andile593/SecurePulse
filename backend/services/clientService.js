const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createClient(data) {
  try {
    const sitesData = (data.sites || []).map(site => ({
      name: site.name,
      address: site.address,
      transmitters: {
        create: (site.transmitters || []).map(t => ({
          referenceCode: t.referenceCode,
        })),
      },
    }));

    const client = await prisma.client.create({
      data: {
        name: data.name,
        surname: data.surname,
        email: data.email,
        phone: data.phone,
        sites: {
          create: sitesData,
        },
      },
      include: {
        sites: {
          include: { transmitters: true },
        },
      },
    });

    return client;
  } catch (error) {
    console.error("Failed to create client:", error.message);
    return null;
  }
}

async function getAllClients() {
  try {
    return await prisma.client.findMany({ include: { sites: { include: { transmitters: true } } }, });
  } catch (error) {
    console.error("Failed to fetch clients:", error.message);
    return [];
  }
}

async function getClientById(id) {
  try {
    return await prisma.client.findUnique({
      where: { id },
      include: { sites: { include: { transmitters: true } } },
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
          transmitters: {
            create: (site.transmitters || []).map(t => ({
              referenceCode: t.referenceCode,
            })),
          },
        })),
        update: sitesToUpdate.map(site => ({
          where: { id: site.id },
          data: {
            name: site.name,
            address: site.address,
            transmitters: {
              upsert: (site.transmitters || []).map(t => ({
                where: t.id ? { id: t.id } : { referenceCode: t.referenceCode },
                create: { referenceCode: t.referenceCode },
                update: { referenceCode: t.referenceCode },
              })),
            },
          },
        })),
        deleteMany: deletedSiteIds.length > 0 ? { id: { in: deletedSiteIds } } : undefined,
      };
    }

    const updatedClient = await prisma.client.update({
      where: { id },
      data: {
        ...clientFields,
        sites: sites ? sitesUpdateOps : undefined,
      },
      include: { sites: { include: { transmitters: true } } },
    });

    return updatedClient;
  } catch (error) {
    console.error(`Failed to update client ${id}:`, error.message);
    return null;
  }
}

async function deleteClient(id) {
  try {
    // Delete all transmitters for sites of this client
    await prisma.transmitter.deleteMany({
      where: { site: { clientId: id } },
    });

    // Delete sites
    await prisma.site.deleteMany({ where: { clientId: id } });

    // Delete client
    await prisma.client.delete({ where: { id } });

    return { message: "Client and related sites/transmitters deleted successfully" };
  } catch (error) {
    if (error.code === "P2025") {
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