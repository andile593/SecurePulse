import api from './axios';
import { User } from '@/types/user';

export const getUsers = () => api.get<User[]>('/users');
export const getUserById = (id: string) => api.get<User>(`/users/${id}`);
export const createUser = (data: User) => api.post<User>('/users', data);
export const updateUser = (id: string, data: Partial<User>) => api.put(`/users/${id}`, data);
export const deleteUser = (id: string) => api.delete(`/users/${id}`);
