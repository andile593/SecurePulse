import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getObLogs,
  createObLog,
  updateObLog,
  deleteObLog,
} from '@/lib/api/obLogs';
import type { ObLog } from '@/types/obLog';

export function useObLogs() {
  return useQuery<ObLog[]>({
    queryKey: ['obLogs'],
    queryFn: getObLogs,
  });
}

export function useCreateObLog() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createObLog,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['obLogs'] }),
  });
}

export function useUpdateObLog() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateObLog,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['obLogs'] }),
  });
}

export function useDeleteObLog() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteObLog,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['obLogs'] }),
  });
}
