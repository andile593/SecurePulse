import api from './axios';
import { Vehicle } from '@/types/vehicle';

export const getVehicles = () => api.get<Vehicle[]>('/vehicles');
export const getVehicleById = (id: string) => api.get<Vehicle>(`/vehicles/${id}`);
export const createVehicle = (data: Vehicle) => api.post<Vehicle>('/vehicles', data);
export const updateVehicle = (id: string, data: Partial<Vehicle>) => api.put(`/vehicles/${id}`, data);
export const deleteVehicle = (id: string) => api.delete(`/vehicles/${id}`);
