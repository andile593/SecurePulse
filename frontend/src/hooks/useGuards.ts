import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getGuards,
  getGuardById,
  createGuard,
  updateGuard,
  deleteGuard,
} from '@/lib/api/guards';
import type { Guard } from '@/types/guard';
import type { AxiosResponse } from 'axios';

type UpdateGuardInput = {
  id: string;
  guard: Partial<Guard>;
};

type DeleteGuardInput = { 
  id: string 
};

export function useGuards() {
  return useQuery<Guard[]>({
    queryKey: ['guards'],
    queryFn: async () => {
      const res = await getGuards();
      return res.data; // unwrap data here
    },
  });
}

export function useCreateGuard() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createGuard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['guards'] });
    },
  });
}

export function useGuard(id: string) {
  return useQuery<Guard>({
    queryKey: ['guard', id],
    queryFn: async () => {
      const res = await getGuardById(id);
      return res.data;
    },
    enabled: !!id, // only run if id is truthy
  });
}

export function useUpdateGuard() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: updateGuard,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['guards'] }),
    });
}

export function useDeleteGuard() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteGuard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['guards'] });
    },
  });
}