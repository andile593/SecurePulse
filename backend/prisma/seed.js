// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const client = await prisma.client.create({
    data: {
      name: 'SecureShield Ltd',
      contactEmail: 'contact@secureshield.com',
      phone: '+1122334455',
      sites: {
        create: {
          name: 'Warehouse A',
          address: '123 Secure Lane',
          latitude: 40.7128,
          longitude: -74.0060
        }
      }
    },
    include: {
    sites: true, 
  }
  });

  const site = client.sites[0];

  const alarm = await prisma.alarm.create({
    data: {
      triggeredAt: new Date(),
      alarmType: 'intrusion',
      priority: 1,
      status: 'pending',
      siteId: site.id
    }
  });

 const logs = await Promise.all([
  prisma.obLog.create({
    data: {
      logTime: new Date(),
      message: 'Alarm triggered at main door.',
      source: 'system',
      alarmId: alarm.id,
    }
  }),
  prisma.obLog.create({
    data: {
      logTime: new Date(),
      message: 'AI detected human presence.',
      source: 'ai',
      alarmId: alarm.id,
    }
  })
]);

  console.log('Created alarm:', alarm);
console.log('Created obLogs:', logs);
  console.log('✅ Seed data inserted');
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
