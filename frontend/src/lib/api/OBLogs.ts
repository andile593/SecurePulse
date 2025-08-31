import api from './axios';
import type { OBLog } from '@/types/OBLog';

export const getOBLogs = () => api.get<OBLog[]>('/OBlogs');
export const getOBLogById = (id: string) => api.get<OBLog>(`/OBlogs/${id}`);
export const createOBLog = (OBLog: OBLog) => api.post<OBLog>('/OBlogs', OBLog);

export type UpdateOBLogInput = { id: string; log: Partial<OBLog> };
export const updateOBLog = ({ id, log }: UpdateOBLogInput) =>
  api.put(`/OBlogs/${id}`, log);

export type DeleteOBLogInput = { id: string };
export const deleteOBLog = ({ id }: DeleteOBLogInput) =>
  api.delete(`/OBlogs/${id}`);
