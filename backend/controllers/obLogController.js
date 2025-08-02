const obLogService = require('../services/obLogService');

async function getAllObLogs(req, res) {
  try {
    const logs = await obLogService.getAllObLogs();
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getObLogById(req, res) {
  try {
    const log = await obLogService.getObLogById(req.params.id);
    if (!log) return res.status(404).json({ error: 'OB Log not found' });
    res.json(log);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createObLog(req, res) {
  try {
    const log = await obLogService.createObLog(req.body);
    res.status(201).json(log);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function updateObLog(req, res) {
  try {
    const updated = await obLogService.updateObLog(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'OB Log not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteObLog(req, res) {
  try {
    const deleted = await obLogService.deleteObLog(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'OB Log not found' });
    res.json({ message: 'OB Log deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllObLogs,
  getObLogById,
  createObLog,
  updateObLog,
  deleteObLog
};
