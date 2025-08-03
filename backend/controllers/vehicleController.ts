import { Request, Response } from 'express';
import * as vehicleService from '../services/vehicleService';

export async function createVehicle(req: Request, res: Response): Promise<void> {
  try {
    const vehicle = await vehicleService.createVehicle(req.body);
    res.status(201).json(vehicle);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function getVehicles(req: Request, res: Response): Promise<void> {
  try {
    const vehicles = await vehicleService.getAllVehicles();
    res.json(vehicles);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function getVehicleById(req: Request, res: Response): Promise<void> {
  try {
    const vehicle = await vehicleService.getVehicleById(parseInt(req.params.id));
    if (!vehicle) return res.status(404).json({ error: 'Vehicle not found' });
    res.json(vehicle);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateVehicle(req: Request, res: Response): Promise<void> {
  try {
    const updated = await vehicleService.updateVehicle(parseInt(req.params.id), req.body);
    if (!updated) return res.status(404).json({ error: 'Vehicle not found' });
    res.json(updated);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function deleteVehicle(req: Request, res: Response): Promise<void> {
  try {
    const deleted = await vehicleService.deleteVehicle(parseInt(req.params.id));
    if (!deleted) return res.status(404).json({ error: 'Vehicle not found' });
    res.json({ message: 'Vehicle deleted' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
