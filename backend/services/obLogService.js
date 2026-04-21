const prisma = require('../utils/prisma');

async function getAllObLogs() {
  return await prisma.oBLog.findMany({
    include: { guard: true, site: true },
  });
}

async function getObLogById(id) {
  return await prisma.oBLog.findUnique({
    where: { id },
    include: { site: true, guard: true },
  });
}

async function createObLog(data) {
  const payload = {
    logTime: new Date(data.logTime),
    actionLog: data.actionLog,
    notes: data.notes || "",
  };

  // Validate guardId exists before assigning
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

  if (data.siteId) {
    payload.siteId = data.siteId;
  }

  return await prisma.oBLog.create({ data: payload });
}

async function updateObLog(id, data) {
  return await prisma.oBLog.update({
    where: { id },
    data: {
      logTime: new Date(data.logTime),
      actionLog: data.actionLog,
      notes: data.notes,
      guardId: data.guardId,
      siteId: data.siteId,
    },
  });
}

async function deleteObLog(id) {
  return await prisma.oBLog.delete({ where: { id } });
}

module.exports = {
  getAllObLogs,
  getObLogById,
  createObLog,
  updateObLog,
  deleteObLog,
};