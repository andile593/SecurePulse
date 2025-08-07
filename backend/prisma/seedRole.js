// prisma/seed.js (or .ts)
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const roles = [
    { id: 'admin', name: 'Admin' },
    { id: 'user', name: 'User' },
    { id: 'manager', name: 'Manager' },
  ];

  for (const role of roles) {
    await prisma.userRole.upsert({
      where: { id: role.id },
      update: {},
      create: role,
    });
  }

  console.log('Seeded roles ✅');
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
