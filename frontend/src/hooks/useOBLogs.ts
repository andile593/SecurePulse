import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getOBLogs,
  createOBLog,
  updateOBLog,
  deleteOBLog,
} from '@/lib/api/OBLogs';
import type { OBLog } from '@/types/OBLog';

export function useOBLogs() {
  return useQuery<OBLog[]>({
    queryKey: ['OBLogs'],
    queryFn: async ( )=> {
      const res = await getOBLogs();
      return res.data
    } 
  });
}

export function useCreateOBLog() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createOBLog,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['OBLogs'] }),
  });
}

export function useUpdateOBLog() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateOBLog,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['OBLogs'] }),
  });
}

export function useDeleteOBLog() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteOBLog,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['OBLogs'] }),
  });
}
