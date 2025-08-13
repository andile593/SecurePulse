import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
} from '@/lib/api/clients';
import type { CreateClientInput, Client } from '@/types/client';



type UpdateClientInput = {
  id: string;
  client: Partial<Client>;
};

// Input type for delete mutation (just id)
type DeleteClientInput = {
  id: string;
};



// Fetch all clients
export function useClients() {
  return useQuery<Client[]>({
    queryKey: ['clients'],
    queryFn: async () => {
      const res = await getClients();
      return res.data; 
    },
  });
}

export const useClient = (id: string) => {
  return useQuery<Client>({
    queryKey: ['client', id],
    queryFn: async () => {
      const res = await getClientById(id);  
      return res.data;
    },
    enabled: !!id,
  });
};

export function useCreateClient() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createClient,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clients'] });

    },
  });
} 

export function useUpdateClient() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateClient, // expects single object arg: {id, client}
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clients'] });
    },
  });
}


// Delete a client
export function useDeleteClient() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteClient, // expects single object arg: {id}
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clients'] });
    },
  });
}