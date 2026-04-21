const alarmService = require("../services/alarmService");
const orchestrator = require("../services/alarmOrchestrator");
const { emitAlarmEvent } = require("../services/socketService");

async function createAlarm(req, res, next) {
  try {
    const { triggeredAt, eventType, source, transmitterId } = req.body;

    console.log("BODY:", req.body);
    console.log("FIELDS:", { triggeredAt, eventType, source, transmitterId });

    if (!triggeredAt || !eventType || !source || !transmitterId) {
      console.log("FAILED VALIDATION");
      return res.status(400).json({ error: "Missing required fields" });
    }

    console.log("PASSED VALIDATION");  

    const alarm = await alarmService.createAlarm(req.body);
    emitAlarmEvent(alarm);

    orchestrator.handleNewAlarm(alarm).catch((err) => {
      console.error("Orchestrator failed:", err);
    });

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

async function simulateAlarm(req, res, next) {
  try {
    const alarm = await alarmService.simulateAlarm()
    
    emitAlarmEvent(alarm);
    
    orchestrator.handleNewAlarm(alarm).catch((err) => {
      console.error('Orchestrator failed on simulated alarm:', err);
    });

    res.status(201).json(alarm);
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
  simulateAlarm
};
