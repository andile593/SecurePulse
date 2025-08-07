import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from '@/lib/api/users';
import type { User } from '@/types/user';

type UpdateUserInput = { id: string; user: Partial<User> };
type DeleteUserInput = { id: string };

export function useUsers() {
  return useQuery<User[]>({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await getUsers();
      return res.data
    }
  });
}

export function useUser(id: string) {
  return useQuery<User>({
    queryKey: ['user', id],
    queryFn: async () => {
      const res = await getUser(id);
      return res.data; 
    },
    enabled: !!id,
  });
}

export function useCreateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
  });
}

export function useUpdateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
  });
}
