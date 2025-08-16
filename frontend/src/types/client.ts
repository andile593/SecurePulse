import type { Site } from '@/types';

export interface Client {
  id?: string;
  shortId?: number;   
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  sites?: Site[];
}


export type SiteCreateInput = {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
};

export type CreateClientInput = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  sites: SiteCreateInput[];
};
