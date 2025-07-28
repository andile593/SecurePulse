// hooks/useClients.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getClients,
  createClient,
  updateClient,
  deleteClient,
} from '@/lib/api/clients';
import { Client } from '@/types/Client';

export function useClients() {
  return useQuery<Client[]>({
    queryKey: ['clients'],
    queryFn: getClients,
  });
}

export function useCreateClient() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createClient,
    onSuccess: () => queryClient.invalidateQueries(['clients']),
  });
}
