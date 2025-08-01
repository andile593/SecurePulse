import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getDispatches,
  createDispatch,
  updateDispatch,
  deleteDispatch,
} from '@/lib/api/dispatches';
import type { Dispatch } from '@/types/dispatch';

export function useDispatches() {
  return useQuery<Dispatch[]>({
    queryKey: ['dispatches'],
    queryFn: getDispatches,
  });
}

export function useCreateDispatch() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createDispatch,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['dispatches'] }),
  });
}

export function useUpdateDispatch() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateDispatch,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['dispatches'] }),
  });
}

export function useDeleteDispatch() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteDispatch,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['dispatches'] }),
  });
}
