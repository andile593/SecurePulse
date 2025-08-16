import type { Alarm } from '@/types';
import type { Client } from '@/types';

export interface Site {
  id?: string;
  shortId?: number;   
  name: string;
  address: string;      
  location?: string;    
  latitude?: number;    
  longitude?: number;   
  clientId?: string;
  client?: Client;
  alarms?: Alarm[];
}
