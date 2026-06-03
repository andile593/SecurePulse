const prisma = require('../utils/prisma');
const bcrypt = require('bcryptjs');
const { sendCredentialsEmail } = require('../utils/mailer');

async function createUser(data) {
  const { password, email, name, roleId } = data;

  if (!password || !email || !name || !roleId) {
    throw new Error("Missing required fields");
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new Error("Email already in use");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: passwordHash,
      roleId,
    },
  });

  await sendCredentialsEmail(email, name, password);

  return user;
}

async function getAllUsers() {
  return await prisma.user.findMany({ include: { role: true } });
}

async function getUserById(id) {
  return await prisma.user.findUnique({
    where: { id },
    include: { role: true },
  });
}

async function updateUser(id, data) {
  const { name, email, roleId } = data;
  return await prisma.user.update({
    where: { id },
    data: { name, email, roleId },
  });
}

async function deleteUser(id) {
  return await prisma.user.delete({ where: { id } });
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};