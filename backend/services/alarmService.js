const prisma = require('../utils/prisma');


async function createAlarm(data) {
  return await prisma.alarm.create({
    data,
    include: {
      transmitter: {
        include: {
          site: {
            include: {
              client: true,
            },
          },
        },
      },
    },
  });
}

async function getAllAlarms() {
  return await prisma.alarm.findMany({
    orderBy: { triggeredAt: 'desc' },
    include: {
      transmitter: {
        include: {
          site: {
            include: {
              client: true,
            },
          },
        },
      },
    },
  });
}

async function getAlarmById(id) {
  return await prisma.alarm.findUnique({
    where: { id },
    include: {
      transmitter: {
        include: {
          site: {
            include: {
              client: true,
            },
          },
        },
      },
      aiCalls: true,
      dispatch: true,
    },
  });
}

async function updateAlarm(id, data) {
  return await prisma.alarm.update({
    where: { id },
    data,
    include: {
      transmitter: {
        include: {
          site: {
            include: {
              client: true,
            },
          },
        },
      },
    },
  });
}

async function updateAlarmStatus(id, status) {
  return await prisma.alarm.update({
    where: { id },
    data: { status },
  });
}

async function deleteAlarm(id) {
  return await prisma.$transaction(async (tx) => {
    await tx.dispatch.deleteMany({ where: { alarmId: id } });
    await tx.aiCall.deleteMany({ where: { alarmId: id } });
    return tx.alarm.delete({ where: { id } });
  });
}

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

async function simulateAlarm() {
  
  const transmitters = await prisma.transmitter.findMany({
    include: {
      site: {
        include: { client: true },
      },
    },
  });

  if (transmitters.length === 0) {
    throw new Error('No transmitters found. Add a client, site and transmitter first.');
  }

  const transmitter = randomItem(transmitters);

  const EVENT_TYPES = [
    'Burglary Alarm',
    'Intrusion Alarm',
    'Panic Alarm',
    'Fire Alarm',
    'Perimeter Breach',
  ];

  const data = {
    triggeredAt: new Date().toISOString(),
    eventType: randomItem(EVENT_TYPES),
    source: transmitter.referenceCode,
    transmitterId: transmitter.id,
  };

  return await prisma.alarm.create({
    data,
    include: {
      transmitter: {
        include: {
          site: {
            include: { client: true },
          },
        },
      },
    },
  });
}

module.exports = {
  createAlarm,
  getAllAlarms,
  getAlarmById,
  updateAlarm,
  updateAlarmStatus,
  deleteAlarm,
  simulateAlarm
};
