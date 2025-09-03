import type { Site } from '@/types';
import type { Alarm } from '@/types';

export interface Transmitter {
  id?: string;
  referenceCode: string;   
  siteId: string;
  site?: Site;
  alarms?: Alarm[];
}

export type TransmitterCreateInput = {
  referenceCode: string;
  zone?: string;
};