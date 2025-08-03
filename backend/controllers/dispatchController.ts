import { Request, Response } from 'express';
import * as dispatchService from '../services/dispatchService';

export async function createDispatch(req: Request, res: Response): Promise<void> {
  try {
    const dispatch = await dispatchService.createDispatch(req.body);
    res.status(201).json(dispatch);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function getDispatches(req: Request, res: Response): Promise<void> {
  try {
    const dispatches = await dispatchService.getAllDispatches();
    res.json(dispatches);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function getDispatchById(req: Request, res: Response): Promise<void> {
  try {
    const dispatch = await dispatchService.getDispatchById(parseInt(req.params.id));
    if (!dispatch) return res.status(404).json({ error: 'Dispatch not found' });
    res.json(dispatch);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateDispatch(req: Request, res: Response): Promise<void> {
  try {
    const updated = await dispatchService.updateDispatch(parseInt(req.params.id), req.body);
    if (!updated) return res.status(404).json({ error: 'Dispatch not found' });
    res.json(updated);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function deleteDispatch(req: Request, res: Response): Promise<void> {
  try {
    const deleted = await dispatchService.deleteDispatch(parseInt(req.params.id));
    if (!deleted) return res.status(404).json({ error: 'Dispatch not found' });
    res.json({ message: 'Dispatch deleted' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
