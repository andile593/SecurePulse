import type { Site } from '@/types';
import type { SiteCreateInput } from '@/types/site';


export interface Client {
  id?: string;
  shortId?: number;   
  name: string;
  surname: string;
  email: string;
  phone: string;
  createdAt: string;
  sites?: Site[];
}


export type CreateClientInput = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  sites: SiteCreateInput[];
};
