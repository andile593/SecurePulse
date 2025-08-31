const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const guards = [
    { name: 'John Doe', phone: '555-1234', status: 'active' },
    { name: 'Jane Smith', phone: '555-5678', status: 'inactive' },
    { name: 'Mike Johnson', phone: '555-9012', status: 'active' },
  ];

  await prisma.guard.createMany({
    data: guards,
    skipDuplicates: true, // avoids inserting duplicates
  });

  console.log('Guards seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
