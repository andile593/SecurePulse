import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getAiCalls,
  createAiCall,
  updateAiCall,
  deleteAiCall,
} from '@/lib/api/aiCalls';
import type { AiCall } from '@/types/aiCall';

export function useAiCalls() {
  return useQuery<AiCall[]>({
    queryKey: ['aiCalls'],
    queryFn: async () => {
      const res = await getAiCalls();
      return res.data
    }
  });
}

export function useCreateAiCall() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createAiCall,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['aiCalls'] }),
  });
}

export function useUpdateAiCall() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateAiCall,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['aiCalls'] }),
  });
}

export function useDeleteAiCall() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteAiCall,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['aiCalls'] }),
  });
}
