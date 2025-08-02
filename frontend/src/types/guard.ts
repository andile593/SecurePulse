import type { ObLog } from '@/types';
import type { Vehicle } from '@/types';
import type { Dispatch } from '@/types';

export interface Guard {
  id?: string;
  name: string;
  phone: string;
  status: string;
  assignedVehicleId?: string;
  assignedVehicle?: Vehicle;
  dispatches?: Dispatch[];
  obLogs?: ObLog[];
}
