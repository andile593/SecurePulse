import api from './axios';
import { Guard } from '@/types/guard';

export const getGuards = () => api.get<Guard[]>('/guards');
export const getGuardById = (id: string) => api.get<Guard>(`/guards/${id}`);
export const createGuard = (data: Guard) => api.post<Guard>('/guards', data);
export const updateGuard = (id: string, data: Partial<Guard>) => api.put(`/guards/${id}`, data);
export const deleteGuard = (id: string) => api.delete(`/guards/${id}`);
