const prisma = require('../utils/prisma');

async function createRole(data) {
  return await prisma.role.create({
    data: {
      id: data.id,
      name: data.name,
    },
  });
}

async function getAllRoles() {
  return await prisma.role.findMany();
}

module.exports = {
  createRole,
  getAllRoles,
};