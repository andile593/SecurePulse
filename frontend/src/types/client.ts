import type { Site } from '@/types';

export interface Client {
  id?: string;
  name: string;
  contactEmail: string;
  phone: string;
  createdAt?: string;
  sites?: Site[]; // Related
}
