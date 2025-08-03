import { Request, Response } from 'express';
import * as obLogService from '../services/obLogService';

export async function getAllObLogs(req: Request, res: Response): Promise<void> {
  try {
    const logs = await obLogService.getAllObLogs();
    res.json(logs);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function getObLogById(req: Request, res: Response): Promise<void> {
  try {
    const log = await obLogService.getObLogById(parseInt(req.params.id));
    if (!log) return res.status(404).json({ error: 'OB Log not found' });
    res.json(log);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function createObLog(req: Request, res: Response): Promise<void> {
  try {
    const log = await obLogService.createObLog(req.body);
    res.status(201).json(log);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function updateObLog(req: Request, res: Response): Promise<void> {
  try {
    const updated = await obLogService.updateObLog(parseInt(req.params.id), req.body);
    if (!updated) return res.status(404).json({ error: 'OB Log not found' });
    res.json(updated);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function deleteObLog(req: Request, res: Response): Promise<void> {
  try {
    const deleted = await obLogService.deleteObLog(parseInt(req.params.id));
    if (!deleted) return res.status(404).json({ error: 'OB Log not found' });
    res.json({ message: 'OB Log deleted' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
