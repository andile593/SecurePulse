import type { Guard } from '@/types';
import type { Alarm } from '@/types';
import type { Vehicle } from '@/types';

export interface Dispatch {
  id?: string;
  shortId?: number;   
  dispatchedAt: string;
  arrivalTime?: string;
  resolvedAt?: string;
  responseNotes?: string;
  alarmId: string;
  alarm?: Alarm;
  guardId?: string;
  guard?: Guard;
  vehicleId?: string;
  vehicle?: Vehicle;
}
