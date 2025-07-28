import api from './axios';
import { Dispatch } from '@/types/dispatch';

export const getDispatches = () => api.get<Dispatch[]>('/dispatches');
export const getDispatchById = (id: string) => api.get<Dispatch>(`/dispatches/${id}`);
export const createDispatch = (data: Dispatch) => api.post<Dispatch>('/dispatches', data);
export const updateDispatch = (id: string, data: Partial<Dispatch>) => api.put(`/dispatches/${id}`, data);
export const deleteDispatch = (id: string) => api.delete(`/dispatches/${id}`);
