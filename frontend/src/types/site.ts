import type { Alarm } from '@/types';
import type { Client } from '@/types';

export interface Site {
  id?: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  clientId: string;
  client?: Client;
  alarms?: Alarm[];
}
