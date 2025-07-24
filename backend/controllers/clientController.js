// src/controllers/clientController.js
const clientService = require('../services/clientService');

async function createClient(req, res) {
  try {
    const client = await clientService.createClient(req.body);
    res.status(201).json(client);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getClients(req, res) {
  try {
    const clients = await clientService.getAllClients();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getClientById(req, res) {
  try {
    const client = await clientService.getClientById(req.params.id);
    if (!client) return res.status(404).json({ error: 'Client not found' });
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
 
async function updateClient(req, res) {
  try {
    const updated = await clientService.updateClient(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Client not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// DELETE /clients/:id
async function deleteClient(req, res) {
  try {
    const deleted = await clientService.deleteClient(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Client not found' });
    res.json({ message: 'Client deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createClient,
  getClients,
  getClientById,
  updateClient,
  deleteClient
};
