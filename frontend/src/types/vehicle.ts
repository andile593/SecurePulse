import type { Dispatch } from '@/types';
import type { Guard } from '@/types';

export interface Vehicle {
  id?: string;
  plateNumber: string;
  model: string;
  status: string;
  description?: string;
  dispatches?: Dispatch[];
  guards?: Guard[];
}
