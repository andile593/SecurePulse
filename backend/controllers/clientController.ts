import { Request, Response } from 'express';
import * as clientService from '../services/clientService';

export async function createClient(req: Request, res: Response): Promise<void> {
  try {
    const client = await clientService.createClient(req.body);
    res.status(201).json(client);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function getClients(req: Request, res: Response): Promise<void> {
  try {
    const clients = await clientService.getAllClients();
    res.json(clients);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function getClientById(req: Request, res: Response): Promise<void> {
  try {
    const client = await clientService.getClientById(parseInt(req.params.id));
    if (!client) return res.status(404).json({ error: 'Client not found' });
    res.json(client);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateClient(req: Request, res: Response): Promise<void> {
  try {
    const updated = await clientService.updateClient(parseInt(req.params.id), req.body);
    if (!updated) return res.status(404).json({ error: 'Client not found' });
    res.json(updated);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function deleteClient(req: Request, res: Response): Promise<void> {
  try {
    const deleted = await clientService.deleteClient(parseInt(req.params.id));
    if (!deleted) return res.status(404).json({ error: 'Client not found' });
    res.json({ message: 'Client deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
