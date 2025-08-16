
import type { Role } from '@/types'

export interface User {
  id?: string;
  shortId?: number; 
  email: string;
  password?: string; 
  name: string;
  createdAt?: string;
  lastLogin?: string;
  roleId: string;
  role?: Role;
}