import api from './axios';
import type { Guard } from '@/types/guard';

export const getGuards = () => api.get<Guard[]>('/guards');
export const getGuardById = (id: string) => api.get<Guard>(`/guards/${id}`);
export const createGuard = (guard: Guard) => api.post<Guard>('/guards', guard);

export type UpdateGuardInput = {
  id: string;
  guard: Partial<Guard>;
};
export const updateGuard = ({ id, guard }: UpdateGuardInput) =>
  api.put(`/guards/${id}`, guard);

export type DeleteGuardInput = { id: string };
export const deleteGuard = ({ id }: DeleteGuardInput) =>
  api.delete(`/guards/${id}`);
