import api from './axios';
import { Client } from '@/types/client';

export const getClients = () => api.get<Client[]>('/clients');
export const getClientById = (id: string) => api.get<Client>(`/clients/${id}`);
export const createClient = (client: Client) => api.post<Client>('/clients', client);
export const updateClient = (id: string, client: Partial<Client>) => api.put(`/clients/${id}`, client);
export const deleteClient = (id: string) => api.delete(`/clients/${id}`);
