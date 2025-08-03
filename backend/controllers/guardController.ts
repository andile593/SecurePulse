import { Request, Response } from 'express';
import * as guardService from '../services/guardService';

export async function createGuard(req: Request, res: Response): Promise<void> {
  try {
    const guard = await guardService.createGuard(req.body);
    res.status(201).json(guard);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function getGuards(req: Request, res: Response): Promise<void> {
  try {
    const guards = await guardService.getAllGuards();
    res.json(guards);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function getGuardById(req: Request, res: Response): Promise<void> {
  try {
    const guard = await guardService.getGuardById(parseInt(req.params.id));
    if (!guard) return res.status(404).json({ error: 'Guard not found' });
    res.json(guard);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateGuard(req: Request, res: Response): Promise<void> {
  try {
    const updated = await guardService.updateGuard(parseInt(req.params.id), req.body);
    if (!updated) return res.status(404).json({ error: 'Guard not found' });
    res.json(updated);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function deleteGuard(req: Request, res: Response): Promise<void> {
  try {
    const deleted = await guardService.deleteGuard(parseInt(req.params.id));
    if (!deleted) return res.status(404).json({ error: 'Guard not found' });
    res.json({ message: 'Guard deleted' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
