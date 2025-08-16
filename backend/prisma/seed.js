const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

function randomPhone() {
  return `555-${Math.floor(1000 + Math.random() * 9000)}`;
}

function randomStatus() {
  const statuses = ["active", "inactive", "maintenance"];
  return statuses[Math.floor(Math.random() * statuses.length)];
}

function randomPriority() {
  return Math.floor(1 + Math.random() * 5);
}

function randomEventType() {
  const events = ["Intrusion Alarm", "Fire Alarm", "Open Alarm",  "Panic Alarm"];
  return events[Math.floor(Math.random() * events.length)];
}

function randomAiDecision() {
  const decisions = ["Safe", "False Alarm", "Requires Response"];
  return decisions[Math.floor(Math.random() * decisions.length)];
}

async function main() {
  console.log("🌱 Starting seed...");

  // 1. Seed Clients
  const clientNames = [
    { name: "Acme", surname: "Security Corp" },
    { name: "Global", surname: "Protect Ltd" },
    { name: "Prime", surname: "Safe Inc" },
    { name: "Secure", surname: "Solutions" }
  ];

  const clients = [];
  for (const c of clientNames) {
    const emailBase = `${c.name.toLowerCase()}${c.surname.toLowerCase().replace(/\s+/g, '')}`;
    const client = await prisma.client.create({
      data: {
        name: c.name,
        surname: c.surname,
        email: `${emailBase}@example.com`,
        phone: randomPhone()
      }
    });
    clients.push(client);
  }

  // 2. Seed Sites
  const sites = [];
  for (const client of clients) {
    for (let i = 1; i <= 2; i++) { // 2 sites per client
      const site = await prisma.site.create({
        data: {
          name: `${client.name} Site ${i}`,
          address: `123${i} Main St, City ${i}`,
          latitude: 40 + Math.random(),
          longitude: -74 + Math.random(),
          clientId: client.id
        }
      });
      sites.push(site);
    }
  }

  // 3. Seed Vehicles
  const vehicleModels = ["Ford Transit", "Toyota Hilux", "Chevrolet Silverado"];
  const vehicles = [];
  for (let i = 1; i <= 5; i++) {
    const vehicle = await prisma.vehicle.create({
      data: {
        name: `Vehicle ${i}`,
        plate: `ABC-${100 + i}`,
        model: vehicleModels[Math.floor(Math.random() * vehicleModels.length)],
        status: randomStatus(),
        description: `Vehicle ${i} for patrol`
      }
    });
    vehicles.push(vehicle);
  }

  // 4. Seed Guards
  const guards = [];
  for (let i = 1; i <= 5; i++) {
    const guard = await prisma.guard.create({
      data: {
        name: `Guard ${i}`,
        phone: randomPhone(),
        status: randomStatus(),
        assignedVehicleId: vehicles[Math.floor(Math.random() * vehicles.length)].id
      }
    });
    guards.push(guard);
  }

  // 5. Seed Alarms
  const alarms = [];
  for (const site of sites) {
    for (let i = 1; i <= 3; i++) { // 3 alarms per site
      const client = clients.find(c => c.id === site.clientId);
      const alarm = await prisma.alarm.create({
        data: {
          triggeredAt: new Date(),
          eventType: randomEventType(),
          priority: randomPriority(),
          status: "triggered",
          source: "Sensor",
          siteId: site.id,
          clientId: client.id
        }
      });
      alarms.push(alarm);
    }
  }

  // 6. Seed Dispatches
  const dispatches = [];
  for (const alarm of alarms) {
    const dispatch = await prisma.dispatch.create({
      data: {
        dispatchedAt: new Date(),
        alarmId: alarm.id,
        guardId: guards[Math.floor(Math.random() * guards.length)].id,
        vehicleId: vehicles[Math.floor(Math.random() * vehicles.length)].id,
        responseNotes: "Responded quickly."
      }
    });
    dispatches.push(dispatch);
  }

  // 7. Seed ObLogs
  for (const guard of guards) {
    for (let i = 0; i < 2; i++) {
      await prisma.obLog.create({
        data: {
          logTime: new Date(),
          message: `Patrol log entry ${i + 1}`,
          source: "Mobile App",
          guardId: guard.id
        }
      });
    }
  }

  // 8. Seed AiCalls
  for (const alarm of alarms) {
    await prisma.aiCall.create({
      data: {
        aiDecision: randomAiDecision(),
        confidenceScore: parseFloat((Math.random() * 100).toFixed(2)),
        evaluatedAt: new Date(),
        alarmId: alarm.id,
        notes: "AI analysis completed."
      }
    });
  }

  console.log("✅ Seed finished!");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
