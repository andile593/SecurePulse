const alarmService = require("../services/alarmService");

async function createAlarm(req, res, next) {
  try {
    const { triggeredAt, eventType, priority, status, siteId, clientId } =
      req.body;
    if (
      !triggeredAt ||
      !eventType ||
      priority === undefined ||
      !status ||
      !siteId ||
      !clientId
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const alarm = await alarmService.createAlarm(req.body);
    res.status(201).json(alarm);
  } catch (error) {
    next(error);
  }
}

async function getAlarms(req, res, next) {
  try {
    const alarms = await alarmService.getAllAlarms();
    res.json(alarms);
  } catch (error) {
    next(error);
  }
}

async function getAlarmById(req, res, next) {
  try {
    const alarm = await alarmService.getAlarmById(req.params.id);
    if (!alarm) return res.status(404).json({ error: "Alarm not found" });
    res.json(alarm);
  } catch (error) {
    next(error);
  }
}

async function updateAlarm(req, res, next) {
  try {
    const updated = await alarmService.updateAlarm(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: "Alarm not found" });
    res.json(updated);
  } catch (error) {
    next(error);
  }
}

async function deleteAlarm(req, res, next) {
  try {
    const deleted = await alarmService.deleteAlarm(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Alarm not found" });
    res.json({ message: "Alarm deleted successfully" });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createAlarm,
  getAlarms,
  getAlarmById,
  updateAlarm,
  deleteAlarm,
};
