const guardService = require('../services/guardService');

async function createGuard(req, res) {
  try {
    const guard = await guardService.createGuard(req.body);
    res.status(201).json(guard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getGuards(req, res) {
  try {
    const guards = await guardService.getAllGuards();
    res.json(guards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getGuardById(req, res) {
  try {
    const guard = await guardService.getGuardById(req.params.id);
    if (!guard) return res.status(404).json({ error: 'Guard not found' });
    res.json(guard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateGuard(req, res) {
  try {
    const updated = await guardService.updateGuard(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Guard not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteGuard(req, res) {
  try {
    const deleted = await guardService.deleteGuard(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Guard not found' });
    res.json({ message: 'Guard deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createGuard,
  getGuards,
  getGuardById,
  updateGuard,
  deleteGuard,
};
