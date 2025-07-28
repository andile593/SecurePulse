const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Roles
  const adminRole = await prisma.userRole.create({ data: { name: 'Admin' } });
  const guardRole = await prisma.userRole.create({ data: { name: 'Guard' } });

  // Users
  await prisma.user.createMany({
    data: [
      {
        email: 'admin@example.com',
        passwordHash: 'hashed-password-1',
        name: 'Admin User',
        roleId: adminRole.id,
      },
      {
        email: 'guard@example.com',
        passwordHash: 'hashed-password-2',
        name: 'Guard User',
        roleId: guardRole.id,
      }
    ]
  });

  // Clients
  const client1 = await prisma.client.create({
    data: {
      name: 'SecureCorp',
      contactEmail: 'contact@securecorp.com',
      phone: '1234567890'
    }
  });

  const client2 = await prisma.client.create({
    data: {
      name: 'SafeZone Ltd',
      contactEmail: 'info@safezone.com',
      phone: '0987654321'
    }
  });

  // Sites
  const site1 = await prisma.site.create({
    data: {
      name: 'Downtown HQ',
      address: '123 City Center',
      latitude: 40.7128,
      longitude: -74.0060,
      clientId: client1.id
    }
  });

  const site2 = await prisma.site.create({
    data: {
      name: 'Uptown Facility',
      address: '789 Uptown Blvd',
      latitude: 34.0522,
      longitude: -118.2437,
      clientId: client2.id
    }
  });

  // Vehicles
  const vehicle1 = await prisma.vehicle.create({
    data: {
      plateNumber: 'ABC-1234',
      model: 'Ford Ranger',
      status: 'active'
    }
  });

  const vehicle2 = await prisma.vehicle.create({
    data: {
      plateNumber: 'XYZ-5678',
      model: 'Toyota Hilux',
      status: 'maintenance'
    }
  });

  // Guards
  const guard1 = await prisma.guard.create({
    data: {
      name: 'John Doe',
      phone: '555-1234',
      status: 'on-duty',
      assignedVehicleId: vehicle1.id
    }
  });

  const guard2 = await prisma.guard.create({
    data: {
      name: 'Jane Smith',
      phone: '555-5678',
      status: 'off-duty',
      assignedVehicleId: vehicle2.id
    }
  });

  // Alarms
  const alarm1 = await prisma.alarm.create({
    data: {
      triggeredAt: new Date(),
      alarmType: 'Intrusion',
      priority: 1,
      status: 'pending',
      siteId: site1.id
    }
  });

  const alarm2 = await prisma.alarm.create({
    data: {
      triggeredAt: new Date(),
      alarmType: 'Fire',
      priority: 2,
      status: 'resolved',
      siteId: site2.id
    }
  });

  // OB Logs
  await prisma.obLog.createMany({
    data: [
      {
        logTime: new Date(),
        message: 'Routine perimeter check.',
        source: 'guard',
        guardId: guard1.id,
        alarmId: alarm1.id
      },
      {
        logTime: new Date(),
        message: 'Fire alarm test log.',
        source: 'system',
        guardId: guard2.id,
        alarmId: alarm2.id
      }
    ]
  });

  // AI Calls
  await prisma.aiCall.createMany({
    data: [
      {
        aiDecision: 'False Alarm',
        confidenceScore: 0.92,
        evaluatedAt: new Date(),
        alarmId: alarm1.id
      },
      {
        aiDecision: 'Real Threat',
        confidenceScore: 0.85,
        evaluatedAt: new Date(),
        alarmId: alarm2.id
      }
    ]
  });

  // Dispatches
  await prisma.dispatch.createMany({
    data: [
      {
        dispatchedAt: new Date(),
        arrivalTime: new Date(),
        resolvedAt: new Date(),
        responseNotes: 'No threat found.',
        alarmId: alarm1.id,
        guardId: guard1.id,
        vehicleId: vehicle1.id
      },
      {
        dispatchedAt: new Date(),
        arrivalTime: new Date(),
        resolvedAt: new Date(),
        responseNotes: 'Fire controlled quickly.',
        alarmId: alarm2.id,
        guardId: guard2.id,
        vehicleId: vehicle2.id
      }
    ]
  });

  console.log('✅ Seed completed');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
