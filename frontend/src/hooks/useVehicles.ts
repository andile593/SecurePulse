import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getVehicles,
  createVehicle,
  updateVehicle,
  deleteVehicle,
  getVehicleById 
} from '@/lib/api/vehicles';
import type { Vehicle } from '@/types/vehicle';

type UpdateVehicleInput = { id: string; vehicle: Partial<Vehicle> };
type DeleteVehicleInput = { id: string };

export function useVehicles() {
  return useQuery<Vehicle[]>({
    queryKey: ['vehicles'],
    queryFn: async () => {
      const res = await getVehicles();
      return res.data;
    },
  });
}
export const useVehicleById = (id: string) => {
  return useQuery({
    queryKey: ['vehicle', id],
    queryFn: () => getVehicleById(id),
    enabled: !!id,
  });
};

export function useCreateVehicle() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createVehicle,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['vehicles'] }),
  });
}

export function useUpdateVehicle() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateVehicle,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['vehicles'] }),
  });
}

export function useDeleteVehicle() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteVehicle,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['vehicles'] }),
  });
}
