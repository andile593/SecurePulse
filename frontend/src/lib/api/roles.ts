// /lib/api/roles.ts
import axios from 'axios';
import type { Role } from '@/types/role';

export async function getRoles() {
  return axios.get<Role[]>('/api/roles'); // adjust API endpoint as needed
}
