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
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['sites'] }),
  });
}
export function useSite(id: string) {
  return useQuery<Site>({
    queryKey: ['site', id],
    queryFn: async () => {
      const res = await getSiteById(id);
      return res.data;
    },
    enabled: !!id, // only run if id is truthy
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
