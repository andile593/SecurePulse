const aiCallService = require('../services/aiCallService');

async function createAiCall(req, res) {
  try {
    const aiCall = await aiCallService.createAiCall(req.body);
    res.status(201).json(aiCall);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getAiCalls(req, res) {
  try {
    const aiCalls = await aiCallService.getAllAiCalls();
    res.json(aiCalls);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getAiCallById(req, res) {
  try {
    const aiCall = await aiCallService.getAiCallById(req.params.id);
    if (!aiCall) return res.status(404).json({ error: 'AI Call not found' });
    res.json(aiCall);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateAiCall(req, res) {
  try {
    const updated = await aiCallService.updateAiCall(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'AI Call not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteAiCall(req, res) {
  try {
    const deleted = await aiCallService.deleteAiCall(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'AI Call not found' });
    res.json({ message: 'AI Call deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createAiCall,
  getAiCalls,
  getAiCallById,
  updateAiCall,
  deleteAiCall,
};
