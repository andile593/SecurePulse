const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createAlarm(data) {
  return prisma.alarm.create({ data });
}

async function getAllAlarms() {
  return prisma.alarm.findMany();
}


async function getAlarmById(id) {
  return prisma.alarm.findUnique({
    where: { id }
  });
}

async function updateAlarm(id, data) {
  try {
    return await prisma.alarm.update({
      where: { id },
      data
    });
  } catch {
    return null;
  }
}

async function deleteAlarm(id) {
  try {
    // Delete related dispatches
    await prisma.dispatch.deleteMany({
      where: { alarmId: id },
    });

    // Delete related AI calls
    await prisma.aiCall.deleteMany({
      where: { alarmId: id },
    });

    // Now delete the alarm
    return await prisma.alarm.delete({
      where: { id },
    });
  } catch (err) {
    if (err.code === 'P2025') {
      throw new Error('Alarm not found');
    }
    throw err;
  }
}



module.exports = {
  createAlarm,
  getAllAlarms,
  getAlarmById,
  updateAlarm,
  deleteAlarm
};
