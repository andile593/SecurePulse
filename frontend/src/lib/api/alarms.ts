import api from './axios';
import { Alarm } from '@/types/alarm';

export const getAlarms = () => api.get<Alarm[]>('/alarms');
export const getAlarmById = (id: string) => api.get<Alarm>(`/alarms/${id}`);
export const createAlarm = (data: Alarm) => api.post<Alarm>('/alarms', data);
export const updateAlarm = (id: string, data: Partial<Alarm>) => api.put(`/alarms/${id}`, data);
export const deleteAlarm = (id: string) => api.delete(`/alarms/${id}`);
