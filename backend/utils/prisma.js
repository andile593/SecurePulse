const { PrismaClient } = require('@prisma/client');

// Single shared Prisma instance for the entire application.
// Import this wherever you need database access instead of
// creating a new PrismaClient() each time.
const prisma = new PrismaClient();

module.exports = prisma;
