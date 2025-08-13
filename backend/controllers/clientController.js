const clientService = require("../services/clientService");

async function createClient(req, res, next) {
  try {
    const client = await clientService.createClient(req.body);
    res.status(201).json(client);
  } catch (error) {
    next(error);
  }
}

async function getClients(req, res, next) {
  try {
    const clients = await clientService.getAllClients();
    res.json(clients);
  } catch (error) {
    next(error);
  }
}

async function getClientById(req, res, next) {
  try {
    const client = await clientService.getClientById(req.params.id);
    if (!client) return res.status(404).json({ error: "Client not found" });
    res.json(client);
  } catch (error) {
    next(error);
  }
}

async function updateClient(req, res, next) {
  try {
    const updated = await clientService.updateClient(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: "Client not found" });
    res.json(updated);
  } catch (error) {
    next(error);
  }
}

// DELETE /clients/:id
async function deleteClient(req, res, next) {
  try {
    const deleted = await clientService.deleteClient(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Client not found" });
    res.json({ message: "Client deleted successfully" });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createClient,
  getClients,
  getClientById,
  updateClient,
  deleteClient,
};
