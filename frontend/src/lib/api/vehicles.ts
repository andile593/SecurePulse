import api from './axios';
import type { Vehicle } from '@/types/vehicle';

export const getVehicles = () => api.get<Vehicle[]>('/vehicles');
export const getVehicleById = (id: string) => api.get<Vehicle>(`/vehicles/${id}`);
export const createVehicle = (vehicle: Vehicle) => api.post<Vehicle>('/vehicles', vehicle);

export type UpdateVehicleInput = { id: string; vehicle: Partial<Vehicle> };
export const updateVehicle = ({ id, vehicle }: UpdateVehicleInput) => 
  api.put(`/vehicles/${id}`, vehicle);

export type DeleteVehicleInput = { id: string };
export const deleteVehicle = ({ id }: DeleteVehicleInput) => 
  api.delete(`/vehicles/${id}`);
