const dispatchService = require('../services/dispatchService');

async function createDispatch(req, res) {
  try {
    const dispatch = await dispatchService.createDispatch(req.body);
    res.status(201).json(dispatch);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getDispatches(req, res) {
  try {
    const dispatches = await dispatchService.getAllDispatches();
    res.json(dispatches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getDispatchById(req, res) {
  try {
    const dispatch = await dispatchService.getDispatchById(req.params.id);
    if (!dispatch) return res.status(404).json({ error: 'Dispatch not found' });
    res.json(dispatch);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateDispatch(req, res) {
  try {
    const updated = await dispatchService.updateDispatch(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Dispatch not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteDispatch(req, res) {
  try {
    const deleted = await dispatchService.deleteDispatch(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Dispatch not found' });
    res.json({ message: 'Dispatch deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createDispatch,
  getDispatches,
  getDispatchById,
  updateDispatch,
  deleteDispatch,
};
