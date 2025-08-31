import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getSites,
  getSiteById,
  createSite,
  updateSite,
  deleteSite,
} from '@/lib/api/sites';
import type { Site } from '@/types/site';

type UpdateSiteInput = { id: string; site: Partial<Site> };
type DeleteSiteInput = { id: string };

export function useSites() {
  return useQuery<Site[]>({
    queryKey: ['sites'],
    queryFn: async () => {
      const res = await getSites();
      return res.data
    },
  });
}

export function useCreateSite() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createSite,
    onMutate: async (newSite) => {
      await queryClient.cancelQueries({ queryKey: ['sites'] });

      const previousSites = queryClient.getQueryData<Site[]>(['sites']) || [];

      queryClient.setQueryData<Site[]>(['sites'], (old = []) => [
        ...old,
        { ...newSite, id: `temp-${Date.now()}` }, 
      ]);

      return { previousSites };
    },
    onError: (_err, _newSite, context) => {
      if (context?.previousSites) {
        queryClient.setQueryData(['sites'], context.previousSites);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['sites'] });
    },
  });
}

export function useSite(id: string) {
  return useQuery<Site>({
    queryKey: ['site', id],
    queryFn: async () => {
      const res = await getSiteById(id);
      return res.data;
    },
    enabled: !!id, 
  });
}

export function useUpdateSite() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateSite,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['sites'] }),
  });
}

export function useDeleteSite() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteSite,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['sites'] }),
  });
}
