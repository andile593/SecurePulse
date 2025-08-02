import api from './axios';
import type { Site } from '@/types/site';

export const getSites = () => api.get<Site[]>('/sites');
export const getSiteById = (id: string) => api.get<Site>(`/sites/${id}`);
export const createSite = (site: Site) => api.post<Site>('/sites', site);

export type UpdateSiteInput = { id: string; site: Partial<Site> };
export const updateSite = ({ id, site }: UpdateSiteInput) => 
  api.put(`/sites/${id}`, site);

export type DeleteSiteInput = { id: string };
export const deleteSite = ({ id }: DeleteSiteInput) => 
  api.delete(`/sites/${id}`);
