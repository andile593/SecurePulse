import api from './axios';
import type { ObLog } from '@/types/obLog';

export const getObLogs = () => api.get<ObLog[]>('/ob-logs');
export const getObLogById = (id: string) => api.get<ObLog>(`/ob-logs/${id}`);
export const createObLog = (obLog: ObLog) => api.post<ObLog>('/ob-logs', obLog);

export type UpdateObLogInput = { id: string; obLog: Partial<ObLog> };
export const updateObLog = ({ id, obLog }: UpdateObLogInput) =>
  api.put(`/ob-logs/${id}`, obLog);

export type DeleteObLogInput = { id: string };
export const deleteObLog = ({ id }: DeleteObLogInput) =>
  api.delete(`/ob-logs/${id}`);
