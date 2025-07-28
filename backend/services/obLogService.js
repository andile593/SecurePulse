const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getAllObLogs() {
  return prisma.obLog.findMany({ include: { alarm: true, guard: true } });
}

async function getObLogById(id) {
  return prisma.obLog.findUnique({
    where: { id },
    include: { alarm: true, guard: true },
  });
}

async function createObLog(data) {
  const payload = {
    logTime: new Date(data.logTime),
    message: data.message,
    source: data.source,
  };

  if (data.guardId) {
    const guardExists = await prisma.guard.findUnique({
      where: { id: data.guardId },
    });
    if (guardExists) {
      payload.guardId = data.guardId;
    } else {
      console.warn("Invalid guardId provided. Skipping assignment.");
    }
  }

  if (data.alarmId) {
    payload.alarmId = data.alarmId;
  }


  return prisma.obLog.create({
    data: payload,
  });
}

async function updateObLog(id, data) {
  try {
    return await prisma.obLog.update({ where: { id }, data });
  } catch {
    return null;
  }
}

async function deleteObLog(id) {
  try {
    await prisma.obLog.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}

module.exports = {
  getAllObLogs,
  getObLogById,
  createObLog,
  updateObLog,
  deleteObLog,
};
