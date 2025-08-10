import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getDispatches,
  getDispatchById,
  createDispatch,
  updateDispatch,
  deleteDispatch,
} from '@/lib/api/dispatches';
import type { Dispatch } from '@/types/dispatch';

export function useDispatches() {
  return useQuery<Dispatch[]>({
    queryKey: ['dispatches'],
    queryFn: async () => {
      const res = await getDispatches();
      return res.data
    }
  });
}

export function useCreateDispatch() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createDispatch,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['dispatches'] }),
  });
}

export function useDispatch(id: string) {
  return useQuery<Dispatch>({
    queryKey: ['dispatch', id],
    queryFn: async () => {
      const res = await getDispatchById(id);
      return res.data;
    },
    enabled: !!id,
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
