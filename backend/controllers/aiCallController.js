const aiCallService = require('../services/aiCallService');

async function createAiCall(req, res, next) {
  try {
    const aiCall = await aiCallService.createAiCall(req.body);
    res.status(201).json(aiCall);
  } catch (error) {
     next(error);
  }
}

async function getAiCalls(req, res, next) {
  try {
    const aiCalls = await aiCallService.getAllAiCalls();
    res.json(aiCalls);
  } catch (error) {
     next(error);
  }
}

async function getAiCallById(req, res, next) {
  try {
    const aiCall = await aiCallService.getAiCallById(req.params.id);
    if (!aiCall) return res.status(404).json({ error: 'AI Call not found' });
    res.json(aiCall);
  } catch (error) {
     next(error);
  }
}

async function updateAiCall(req, res, next) {
  try {
    const updated = await aiCallService.updateAiCall(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'AI Call not found' });
    res.json(updated);
  } catch (error) {
     next(error);
  }
}

async function deleteAiCall(req, res, next) {
  try {
    const deleted = await aiCallService.deleteAiCall(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'AI Call not found' });
    res.json({ message: 'AI Call deleted' });
  } catch (error) {
     next(error);
  }
}

module.exports = {
  createAiCall,
  getAiCalls,
  getAiCallById,
  updateAiCall,
  deleteAiCall,
};
