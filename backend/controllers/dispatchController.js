const dispatchService = require('../services/dispatchService');

async function createDispatch(req, res, next) {
  try {
    const dispatch = await dispatchService.createDispatch(req.body);
    res.status(201).json(dispatch);
  } catch (error) {
    next(error);
  }
}

async function getDispatches(req, res, next) {
  try {
    const dispatches = await dispatchService.getAllDispatches();
    res.json(dispatches);
  } catch (error) {
    next(error);
  }
}

async function getDispatchById(req, res, next) {
  try {
    const dispatch = await dispatchService.getDispatchById(req.params.id);
    if (!dispatch) return res.status(404).json({ error: 'Dispatch not found' });
    res.json(dispatch);
  } catch (error) {
    next(error);
  }
}

async function updateDispatch(req, res, next) {
  try {
    const updated = await dispatchService.updateDispatch(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Dispatch not found' });
    res.json(updated);
  } catch (error) {
    next(error);
  }
}

async function deleteDispatch(req, res, next) {
  try {
    const deleted = await dispatchService.deleteDispatch(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Dispatch not found' });
    res.json({ message: 'Dispatch deleted' });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createDispatch,
  getDispatches,
  getDispatchById,
  updateDispatch,
  deleteDispatch,
};
