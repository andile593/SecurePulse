const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../utils/prisma');

function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      roleId: user.roleId,
    },
    process.env.JWT_SECRET,
    { expiresIn: '8h' }
  );
}

async function register({ name, email, password, roleId }) {
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    const error = new Error('Email already in use');
    error.statusCode = 409;
    throw error;
  }

  const role = await prisma.role.findUnique({ where: { id: roleId } });
  if (!role) {
    const error = new Error('Invalid role');
    error.statusCode = 400;
    throw error;
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: { name, email, password: passwordHash, roleId },
    include: { role: true },
  });

  const token = generateToken(user);

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role.name,
    },
  };
}

async function getAdmins() {
  return await prisma.user.findMany({ include: { role: true } });
}


async function getAdminById(id) {
  return await prisma.user.findUnique({
    where: { id },
    include: { role: true },
  });
}

async function login({ email, password }) {
  const user = await prisma.user.findUnique({
    where: { email },
    include: { role: true },
  });

  if (!user) {
    const error = new Error('Invalid email or password');
    error.statusCode = 401;
    throw error;
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    const error = new Error('Invalid email or password');
    error.statusCode = 401;
    throw error;
  }

  // Update last login timestamp.
  await prisma.user.update({
    where: { id: user.id },
    data: { lastLogin: new Date() },
  });

  const token = generateToken(user);

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role.name,
    },
  };
}


async function updateMe(userId, { name, email, password }) {
  const data = {};

  if (name) data.name = name;

  if (email) {
    // Check email not already taken by another user
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing && existing.id !== userId) {
      const error = new Error('Email already in use');
      error.statusCode = 409;
      throw error;
    }
    data.email = email;
  }

  if (password) {
    if (password.length < 6) {
      const error = new Error('Password must be at least 6 characters');
      error.statusCode = 400;
      throw error;
    }
    data.password = await bcrypt.hash(password, 10);
  }

  if (Object.keys(data).length === 0) {
    const error = new Error('No fields provided to update');
    error.statusCode = 400;
    throw error;
  }

  const updated = await prisma.user.update({
    where: { id: userId },
    data,
    include: { role: true },
  });

  return {
    id: updated.id,
    name: updated.name,
    email: updated.email,
    role: updated.role.name,
  };
}

module.exports = { register, login, updateMe };