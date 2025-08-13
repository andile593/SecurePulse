import api from './axios';
import type { CreateClientInput, Client } from '@/types/client';

export const getClients = () => api.get<Client[]>('/clients');
export const getClientById = (id: string) => api.get<Client>(`/clients/${id}`);

export async function createClient(data: CreateClientInput): Promise<Client> {
  const response = await api.post<Client>('/clients', data);
  return response.data;
}

export type UpdateClientInput = {
  id: string;
  client: Partial<Client>;
  deletedSiteIds?: string[];
};

export function updateClient({ id, client, deletedSiteIds }: UpdateClientInput) {
  return api.put(`/clients/${id}`, { ...client, deletedSiteIds });
}

export type DeleteClientInput = { id: string };

export const deleteClient = ({ id }: DeleteClientInput) => 
  api.delete(`/clients/${id}`);
