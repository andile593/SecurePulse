import api from './axios';
import type { Client } from '@/types/client';

export const getClients = () => api.get<Client[]>('/clients');
export const getClientById = (id: string) => api.get<Client>(`/clients/${id}`);

export const createClient = (client: Client) => api.post<Client>('/clients', client);

export type UpdateClientInput = {
  id: string;
  client: Partial<Client>;
};
export const updateClient = ({ id, client }: UpdateClientInput) => 
  api.put(`/clients/${id}`, client);

export type DeleteClientInput = { id: string };

export const deleteClient = ({ id }: DeleteClientInput) => 
  api.delete(`/clients/${id}`);
