const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createAlarm(data) {
  try {
    return await prisma.alarm.create({ data });
  } catch (error) {
    console.error("Failed to create alarm:", error.message);
    return null; // fallback
  }
}

async function getAllAlarms() {
  try {
    return await prisma.alarm.findMany();
  } catch (error) {
    console.error("Failed to fetch alarms:", error.message);
    return []; // fallback
  }
}

async function getAlarmById(id) {
  try {
    return await prisma.alarm.findUnique({
      where: { id }
    });
  } catch (error) {
    console.error(`Failed to fetch alarm ${id}:`, error.message);
    return null; // fallback
  }
}

async function updateAlarm(id, data) {
  try {
    return await prisma.alarm.update({
      where: { id },
      data
    });
  } catch (error) {
    console.error(`Failed to update alarm ${id}:`, error.message);
    return null; // fallback
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
      console.warn(`Alarm ${id} not found`);
      return null; // fallback for non-existing alarm
    }
    console.error(`Failed to delete alarm ${id}:`, err.message);
    return null; // fallback for other errors
  }
}

module.exports = {
  createAlarm,
  getAllAlarms,
  getAlarmById,
  updateAlarm,
  deleteAlarm
};
