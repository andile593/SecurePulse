const obLogService = require('../services/obLogService');

async function getAllObLogs(req, res, next) {
  try {
    const logs = await obLogService.getAllObLogs();
    res.json(logs);
  } catch (error) {
    next(error);
  }
}

async function getObLogById(req, res, next) {
  try {
    const log = await obLogService.getObLogById(req.params.id);
    if (!log) return res.status(404).json({ error: 'OB Log not found' });
    res.json(log);
  } catch (error) {
    next(error);
  }
}

async function createObLog(req, res, next) {
  try {
    const log = await obLogService.createObLog(req.body);
    res.status(201).json(log);
  } catch (error) {
    next(error);
  }
}

async function updateObLog(req, res, next) {
  try {
    const updated = await obLogService.updateObLog(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'OB Log not found' });
    res.json(updated);
  } catch (error) {
    next(error);
  }
}

async function deleteObLog(req, res, next) {
  try {
    const deleted = await obLogService.deleteObLog(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'OB Log not found' });
    res.json({ message: 'OB Log deleted' });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllObLogs,
  getObLogById,
  createObLog,
  updateObLog,
  deleteObLog
};
