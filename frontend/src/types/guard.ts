import type { OBLog } from '@/types';
import type { Vehicle } from '@/types';
import type { Dispatch } from '@/types';

export interface Guard {
  id?: string;
  name: string;
  phone: string;
  status: string;
  assignedVehicleId?: string | null;
  assignedVehicle?: Vehicle;
  dispatches?: Dispatch[];
  OBLogs?: OBLog[];
}
