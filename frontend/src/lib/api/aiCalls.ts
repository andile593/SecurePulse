import api from './axios';
import { AiCall } from '@/types/aiCall';

export const getAiCalls = () => api.get<AiCall[]>('/ai-calls');
export const getAiCallById = (id: string) => api.get<AiCall>(`/ai-calls/${id}`);
export const createAiCall = (data: AiCall) => api.post<AiCall>('/ai-calls', data);
export const updateAiCall = (id: string, data: Partial<AiCall>) => api.put(`/ai-calls/${id}`, data);
export const deleteAiCall = (id: string) => api.delete(`/ai-calls/${id}`);
