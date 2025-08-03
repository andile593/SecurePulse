import { Request, Response } from 'express';
import * as alarmService from '../services/alarmService';

export async function createAlarm(req: Request, res: Response): Promise<void> {
  try {
    const alarm = await alarmService.createAlarm(req.body);
    res.status(201).json(alarm);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function getAlarms(req: Request, res: Response): Promise<void> {
  try {
    const alarms = await alarmService.getAllAlarms();
    res.json(alarms);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function getAlarmById(req: Request, res: Response): Promise<void> {
  try {
    const alarm = await alarmService.getAlarmById(parseInt(req.params.id));
    if (!alarm) return res.status(404).json({ error: 'Alarm not found' });
    res.json(alarm);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateAlarm(req: Request, res: Response): Promise<void> {
  try {
    const updated = await alarmService.updateAlarm(parseInt(req.params.id), req.body);
    if (!updated) return res.status(404).json({ error: 'Alarm not found' });
    res.json(updated);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function deleteAlarm(req: Request, res: Response): Promise<void> {
  try {
    const deleted = await alarmService.deleteAlarm(parseInt(req.params.id));
    if (!deleted) return res.status(404).json({ error: 'Alarm not found' });
    res.json({ message: 'Alarm deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
