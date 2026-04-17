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

module.exports = {
  createAlarm,
  getAllAlarms,
  getAlarmById,
  updateAlarm,
  updateAlarmStatus,
  deleteAlarm,
};
