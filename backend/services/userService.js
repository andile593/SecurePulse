const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createUser(data) {
  return prisma.user.create({ data });
}

async function getAllUsers() {
  return prisma.user.findMany();
}

async function getUserById(id) {
  return prisma.user.findUnique({ where: { id } });
}

async function updateUser(id, data) {
  try {
    return await prisma.user.update({ where: { id }, data });
  } catch {
    return null;
  }
}

async function deleteUser(id) {
  try {
    await prisma.user.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
