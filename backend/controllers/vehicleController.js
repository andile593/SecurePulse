const vehicleService = require('../services/vehicleService');

async function createVehicle(req, res, next) {
  try {
    const vehicle = await vehicleService.createVehicle(req.body);
    res.status(201).json(vehicle);
  } catch (error) {
    next(error);
  }
}

async function getVehicles(req, res, next) {
  try {
    const vehicles = await vehicleService.getAllVehicles();
    res.json(vehicles);
  } catch (error) {
    next(error);
  }
}

async function getVehicleById(req, res, next) {
  try {
    const vehicle = await vehicleService.getVehicleById(req.params.id);
    if (!vehicle) return res.status(404).json({ error: 'Vehicle not found' });
    res.json(vehicle);
  } catch (error) {
    next(error);
  }
}

async function updateVehicle(req, res, next) {
  try {
    const updated = await vehicleService.updateVehicle(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Vehicle not found' });
    res.json(updated);
  } catch (error) {
    next(error);
  }
}

async function deleteVehicle(req, res, next) {
  try {
    const deleted = await vehicleService.deleteVehicle(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Vehicle not found' });
    res.json({ message: 'Vehicle deleted' });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createVehicle,
  getVehicles,
  getVehicleById,
  updateVehicle,
  deleteVehicle,
};
