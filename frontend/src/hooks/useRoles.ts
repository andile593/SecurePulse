// /hooks/useRoles.ts
import { useQuery } from '@tanstack/react-query';
import { getRoles } from '@/lib/api/roles';
import type { Role } from '@/types/role';

export function useRoles() {
  return useQuery<Role[]>({
    queryKey: ['roles'],
    queryFn: async () => {
      const res = await getRoles();
      return res.data;
    },
  });
}
