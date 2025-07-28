import api from './axios';
import { ObLog } from '@/types/obLog';

export const getObLogs = () => api.get<ObLog[]>('/ob-logs');
export const getObLogById = (id: string) => api.get<ObLog>(`/ob-logs/${id}`);
export const createObLog = (data: ObLog) => api.post<ObLog>('/ob-logs', data);
export const updateObLog = (id: string, data: Partial<ObLog>) => api.put(`/ob-logs/${id}`, data);
export const deleteObLog = (id: string) => api.delete(`/ob-logs/${id}`);
