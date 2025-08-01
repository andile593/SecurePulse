import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getGuards,
  createGuard,
  updateGuard,
  deleteGuard,
} from '@/lib/api/guards';
import type { Guard } from '@/types/guard';

type UpdateGuardInput = {
  id: string;
  guard: Partial<Guard>;
};

type DeleteGuardInput = { id: string };

export function useGuards() {
  return useQuery<Guard[]>({
    queryKey: ['guards'],
    queryFn: getGuards,
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

export function useUpdateGuard() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateGuard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['guards'] });
    },
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
