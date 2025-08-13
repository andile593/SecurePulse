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
    await prisma.alarm.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}

module.exports = {
  createAlarm,
  getAllAlarms,
  getAlarmById,
  updateAlarm,
  deleteAlarm
};
