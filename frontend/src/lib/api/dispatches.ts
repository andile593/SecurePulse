import api from './axios';
import type { Dispatch } from '@/types/dispatch';

export const getDispatches = () => api.get<Dispatch[]>('/dispatches');
export const getDispatchById = (id: string) => api.get<Dispatch>(`/dispatches/${id}`);
export const createDispatch = (dispatch: Dispatch) => api.post<Dispatch>('/dispatches', dispatch);

export type UpdateDispatchInput = { id: string; dispatch: Partial<Dispatch> };
export const updateDispatch = ({ id, dispatch }: UpdateDispatchInput) =>
  api.put(`/dispatches/${id}`, dispatch);

export type DeleteDispatchInput = { id: string };
export const deleteDispatch = ({ id }: DeleteDispatchInput) =>
  api.delete(`/dispatches/${id}`);
