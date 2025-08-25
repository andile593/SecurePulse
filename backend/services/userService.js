const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const { sendCredentialsEmail } = require('../utils/mailer');

const prisma = new PrismaClient();

async function createUser(data) {
  const { password, email, name, roleId } = data;

  if (!password || !email || !name || !roleId) {
    throw new Error("Missing required fields");
  }

  try {
    // Check for existing user with the same email
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

    // Send credentials via email (optional)
    await sendCredentialsEmail(email, name, password);

    return user;
  } catch (error) {
    console.error("Failed to create user:", error.message);
    return null;
  }
}

async function getAllUsers() {
  try {
    return await prisma.user.findMany({ include: { role: true } });
  } catch (error) {
    console.error("Failed to fetch users:", error.message);
    return [];
  }
}

async function getUserById(id) {
  try {
    return await prisma.user.findUnique({ 
      where: { id }, 
      include: { role: true } 
    });
  } catch (error) {
    console.error(`Failed to fetch user ${id}:`, error.message);
    return null;
  }
}

async function updateUser(id, data) {
  try {
    const { name, email, roleId } = data;
    return await prisma.user.update({
      where: { id },
      data: { name, email, roleId }
    });
  } catch (error) {
    console.error(`Failed to update user ${id}:`, error.message);
    return null;
  }
}

async function deleteUser(id) {
  try {
    await prisma.user.delete({ where: { id } });
    return true;
  } catch (error) {
    console.error(`Failed to delete user ${id}:`, error.message);
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
