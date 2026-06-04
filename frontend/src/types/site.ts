import type { Client } from '@/types';
import type { Transmitter, TransmitterCreateInput } from './transmitter';

export interface Site {
  id?: string;
  shortId?: number;
  name: string;
  address: string;
  clientId?: string;
  latitude?: number;
  longitude?: number;
  client?: Client;
  transmitters?: Transmitter[];
}
export type SiteCreateInput = {
  name: string;
  address: string;
  clientId: string;
  latitude?: number;
  longitude?: number;
  transmitters?: TransmitterCreateInput[]; 
};