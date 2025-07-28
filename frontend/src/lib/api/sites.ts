import api from './axios';
import { Site } from '@/types/site';

export const getSites = () => api.get<Site[]>('/sites');
export const getSiteById = (id: string) => api.get<Site>(`/sites/${id}`);
export const createSite = (data: Site) => api.post<Site>('/sites', data);
export const updateSite = (id: string, data: Partial<Site>) => api.put(`/sites/${id}`, data);
export const deleteSite = (id: string) => api.delete(`/sites/${id}`);
