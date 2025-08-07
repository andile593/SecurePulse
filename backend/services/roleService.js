const { PrismaClient  } = require('@prisma/client');

const prisma = new PrismaClient();

async function getAllRoles() {
  return prisma.userRole.findMany();
}

module.exports = {
  getAllRoles,
};
