const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getAllObLogs() {
  try {
    return await prisma.obLog.findMany({
      include: { guard: true,  site: true, },
    });
  } catch (error) {
    console.error("Failed to fetch OB logs:", error.message);
    return [];
  }
}

async function getObLogById(id) {
  try {
    return await prisma.obLog.findUnique({
      where: { id },
      include: { site: true, guard: true },
    });
  } catch (error) {
    console.error(`Failed to fetch OB log ${id}:`, error.message);
    return null;
  }
}

async function createObLog(data) {
  try {
    const payload = {
      logTime: new Date(data.logTime),
      actionLog: data.actionLog, // required
      notes: data.notes || "",    // required, default to empty string if not provided
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

    if (data.siteId) {
      payload.siteId = data.siteId;
    }

    return await prisma.obLog.create({ data: payload });
  } catch (error) {
    console.error("Failed to create OB log:", error.message);
    return null;
  }
}


async function updateObLog(id, data) {
  try {
    return await prisma.obLog.update({
      where: { id },
      data: {
        logTime: new Date(data.logTime),
        actionLog: data.actionLog,
        notes: data.notes,
        guardId: data.guardId,
        siteId: data.siteId,
      },
    });
  } catch (error) {
    console.error(`Failed to update OB log ${id}:`, error.message);
    return null;
  }
}

async function deleteObLog(id) {
  try {
    await prisma.obLog.delete({ where: { id } });
    return true;
  } catch (error) {
    console.error(`Failed to delete OB log ${id}:`, error.message);
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
