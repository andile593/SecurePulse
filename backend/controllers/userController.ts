import { Request, Response } from 'express';
import * as userService from '../services/userService';

// Create user (admin only, not for auth registration)
export async function createUser(req: Request, res: Response): Promise<void> {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function getUsers(req: Request, res: Response): Promise<void> {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function getUserById(req: Request, res: Response): Promise<void> {
  try {
    const user = await userService.getUserById(parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateUser(req: Request, res: Response): Promise<void> {
  try {
    const updated = await userService.updateUser(parseInt(req.params.id), req.body);
    if (!updated) return res.status(404).json({ error: 'User not found' });
    res.json(updated);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function deleteUser(req: Request, res: Response): Promise<void> {
  try {
    const deleted = await userService.deleteUser(parseInt(req.params.id));
    if (!deleted) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
