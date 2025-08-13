const guardService = require('../services/guardService');

async function createGuard(req, res, next) {
  try {
    const guard = await guardService.createGuard(req.body);
    res.status(201).json(guard);
  } catch (error) {
    next(error);
  }
}

async function getGuards(req, res, next) {
  try {
    const guards = await guardService.getAllGuards();
    res.json(guards);
  } catch (error) {
    next(error);
  }
}

async function getGuardById(req, res, next) {
  try {
    const guard = await guardService.getGuardById(req.params.id);
    if (!guard) return res.status(404).json({ error: 'Guard not found' });
    res.json(guard);
  } catch (error) {
    next(error);
  }
}

async function updateGuard(req, res, next) {
  try {
    const updated = await guardService.updateGuard(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Guard not found' });
    res.json(updated);
  } catch (error) {
    next(error);
  }
}

async function deleteGuard(req, res, next) {
  try {
    const deleted = await guardService.deleteGuard(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Guard not found' });
    res.json({ message: 'Guard deleted' });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createGuard,
  getGuards,
  getGuardById,
  updateGuard,
  deleteGuard,
};
