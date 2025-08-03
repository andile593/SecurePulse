import { Request, Response } from 'express';
import * as siteService from '../services/siteService';

export async function createSite(req: Request, res: Response): Promise<void> {
  try {
    const site = await siteService.createSite(req.body);
    res.status(201).json(site);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function getSites(req: Request, res: Response): Promise<void> {
  try {
    const sites = await siteService.getAllSites();
    res.json(sites);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function getSiteById(req: Request, res: Response): Promise<void> {
  try {
    const site = await siteService.getSiteById(parseInt(req.params.id));
    if (!site) return res.status(404).json({ error: 'Site not found' });
    res.json(site);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateSite(req: Request, res: Response): Promise<void> {
  try {
    const updated = await siteService.updateSite(parseInt(req.params.id), req.body);
    if (!updated) return res.status(404).json({ error: 'Site not found' });
    res.json(updated);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function deleteSite(req: Request, res: Response): Promise<void> {
  try {
    const deleted = await siteService.deleteSite(parseInt(req.params.id));
    if (!deleted) return res.status(404).json({ error: 'Site not found' });
    res.json({ message: 'Site deleted' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
