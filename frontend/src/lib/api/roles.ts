
import axios from 'axios';
import type { Role } from '@/types/role';

export async function getRoles() {
  return axios.get<Role[]>('http://localhost:5000/roles'); 
}
