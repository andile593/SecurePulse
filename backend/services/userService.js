const { PrismaClient  } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const { sendCredentialsEmail } = require('../utils/mailer');

const prisma = new PrismaClient();

async function createUser(data) {
  const { password, email, name, roleId } = data;

  if (!password || !email || !name || !roleId) {
    throw new Error("Missing required fields");
  }

  // Check for existing user with the same email
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("Email already in use");
  }

  try {
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
  } catch (error) {
    if (error.code) {
      console.error("Prisma error code:", error.code);
      console.error("Prisma meta:", error.meta);
      console.error("Prisma error message:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }

    throw new Error("Failed to create user");
  }
}



async function getAllUsers() {
  return prisma.user.findMany({
    include: { role: true }, 
  });
}

async function getUserById(id) {
  return prisma.user.findUnique({
    where: { id },
    include: { role: true }, 
  });
}


async function updateUser(id, data) {
  const { name, email, roleId } = data;

  return prisma.user.update({
    where: { id },
    data: { name, email, roleId }
  });
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
