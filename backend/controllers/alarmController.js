const alarmService = require('../services/alarmService');

async function createAlarm(req, res) {
  try {
    const alarm = await alarmService.createAlarm(req.body);
    res.status(201).json(alarm);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getAlarms(req, res) {
  try {
    const alarms = await alarmService.getAllAlarms();
    res.json(alarms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getAlarmById(req, res) {
  try {
    const alarm = await alarmService.getAlarmById(req.params.id);
    if (!alarm) return res.status(404).json({ error: 'Alarm not found' });
    res.json(alarm);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateAlarm(req, res) {
  try {
    const updated = await alarmService.updateAlarm(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Alarm not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteAlarm(req, res) {
  try {
    const deleted = await alarmService.deleteAlarm(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Alarm not found' });
    res.json({ message: 'Alarm deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createAlarm,
  getAlarms,
  getAlarmById,
  updateAlarm,
  deleteAlarm
};
