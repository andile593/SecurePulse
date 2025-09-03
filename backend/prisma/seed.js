const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const dummyAlarms = require("./dummyAlarms");

async function main() {
  console.log("🌱 Seeding database...");
  for (const alarm of dummyAlarms) {
    await prisma.alarm.create({ data: alarm });
  }
  console.log("✅ Done seeding!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
