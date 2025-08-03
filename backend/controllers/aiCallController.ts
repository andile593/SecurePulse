import { Request, Response } from 'express';
import * as aiCallService from '../services/aiCallService';

export async function createAiCall(req: Request, res: Response): Promise<void> {
  try {
    const aiCall = await aiCallService.createAiCall(req.body);
    res.status(201).json(aiCall);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function getAiCalls(req: Request, res: Response): Promise<void> {
  try {
    const aiCalls = await aiCallService.getAllAiCalls();
    res.json(aiCalls);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function getAiCallById(req: Request, res: Response): Promise<void> {
  try {
    const aiCall = await aiCallService.getAiCallById(parseInt(req.params.id));
    if (!aiCall) return res.status(404).json({ error: 'AI Call not found' });
    res.json(aiCall);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateAiCall(req: Request, res: Response): Promise<void> {
  try {
    const updated = await aiCallService.updateAiCall(parseInt(req.params.id), req.body);
    if (!updated) return res.status(404).json({ error: 'AI Call not found' });
    res.json(updated);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function deleteAiCall(req: Request, res: Response): Promise<void> {
  try {
    const deleted = await aiCallService.deleteAiCall(parseInt(req.params.id));
    if (!deleted) return res.status(404).json({ error: 'AI Call not found' });
    res.json({ message: 'AI Call deleted' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
