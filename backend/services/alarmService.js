const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createAlarm(data) {
  try {
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
  } catch (error) {
    console.error("Failed to create alarm:", error.message);
    return null;
  }
}

async function getAllAlarms() {
  try {
    return await prisma.alarm.findMany({
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
  } catch (error) {
    console.error("Failed to fetch alarms:", error.message);
    return [];
  }
}

async function getAlarmById(id) {
  try {
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
  } catch (error) {
    console.error(`Failed to fetch alarm ${id}:`, error.message);
    return null;
  }
}


async function updateAlarm(id, data) {
  try {
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
  } catch (error) {
    console.error(`Failed to update alarm ${id}:`, error.message);
    return null;
  }
}
async function updateAlarmStatus(id, status) {
  try {
    return await prisma.alarm.update({
      where: { id },
      data: { status },
    });
  } catch (error) {
    console.error(`Failed to update alarm status ${id}:`, error.message);
    return null;
  }
}

async function deleteAlarm(id) {
  try {
    return await prisma.$transaction(async (tx) => {
      await tx.dispatch.deleteMany({ where: { alarmId: id } });
      await tx.aiCall.deleteMany({ where: { alarmId: id } });
      return tx.alarm.delete({ where: { id } });
    });
  } catch (err) {
    if (err.code === 'P2025') {
      console.warn(`Alarm ${id} not found`);
      return null;
    }
    console.error(`Failed to delete alarm ${id}:`, err.message);
    return null;
  }
}


module.exports = {
  createAlarm,
  getAllAlarms,
  getAlarmById,
  updateAlarm,
  updateAlarmStatus,
  deleteAlarm,
};
