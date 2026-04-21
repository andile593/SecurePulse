import api from './axios';
import type { Alarm } from '@/types/alarm';

export const getAlarms = () => api.get<Alarm[]>('/alarms');
export const getAlarmById = (id: string) => api.get<Alarm>(`/alarms/${id}`);
export const createAlarm = (alarm: Alarm) => api.post<Alarm>('/alarms', alarm);

export type UpdateAlarmInput = { id: string; alarm: Partial<Alarm> };
export const updateAlarm = ({ id, alarm }: UpdateAlarmInput) =>
  api.put(`/alarms/${id}`, alarm);

export type DeleteAlarmInput = { id: string };
export const deleteAlarm = ({ id }: DeleteAlarmInput) =>
  api.delete(`/alarms/${id}`);


export const updateAlarmStatus = (id: string, status: string) =>
  api.patch<Alarm>(`/alarms/${id}/status`, { status });