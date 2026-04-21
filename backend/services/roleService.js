const prisma = require('../utils/prisma');

// FIXED: was prisma.userRole — schema model is 'Role'
async function getAllRoles() {
  return await prisma.role.findMany();
}

module.exports = {
  getAllRoles,
};