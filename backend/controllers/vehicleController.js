const vehicleService = require('../services/vehicleService');

async function createVehicle(req, res) {
  try {
    const vehicle = await vehicleService.createVehicle(req.body);
    res.status(201).json(vehicle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getVehicles(req, res) {
  try {
    const vehicles = await vehicleService.getAllVehicles();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getVehicleById(req, res) {
  try {
    const vehicle = await vehicleService.getVehicleById(req.params.id);
    if (!vehicle) return res.status(404).json({ error: 'Vehicle not found' });
    res.json(vehicle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateVehicle(req, res) {
  try {
    const updated = await vehicleService.updateVehicle(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Vehicle not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteVehicle(req, res) {
  try {
    const deleted = await vehicleService.deleteVehicle(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Vehicle not found' });
    res.json({ message: 'Vehicle deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createVehicle,
  getVehicles,
  getVehicleById,
  updateVehicle,
  deleteVehicle,
};
