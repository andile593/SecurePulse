require('dotenv').config();
const { PrismaPg } = require('@prisma/adapter-pg');
const { PrismaClient } = require('../generated/prisma');

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
  log: process.env.NODE_ENV === 'production'
    ? ['warn', 'error']
    : ['warn', 'error'],
});

module.exports = prisma;