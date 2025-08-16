import type { Dispatch } from '@/types';
import type { Guard } from '@/types';

export interface Vehicle {
  id?: string;
  shortId?: number;  
  name: string;
  plate: string;
  model: string;
  status: string;
  description?: string;
  dispatches?: Dispatch[];
  guards?: Guard[];
}