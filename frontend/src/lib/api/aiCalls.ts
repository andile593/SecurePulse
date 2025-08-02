import api from './axios';
import type { AiCall } from '@/types/aiCall';

export const getAiCalls = () => api.get<AiCall[]>('/ai-calls');
export const getAiCallById = (id: string) => api.get<AiCall>(`/ai-calls/${id}`);
export const createAiCall = (aiCall: AiCall) => api.post<AiCall>('/ai-calls', aiCall);

export type UpdateAiCallInput = { id: string; aiCall: Partial<AiCall> };
export const updateAiCall = ({ id, aiCall }: UpdateAiCallInput) =>
  api.put(`/ai-calls/${id}`, aiCall);

export type DeleteAiCallInput = { id: string };
export const deleteAiCall = ({ id }: DeleteAiCallInput) =>
  api.delete(`/ai-calls/${id}`);
