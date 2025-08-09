import type { Site } from '@/types';

export interface Client {
  id?: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  sites?: Site[];
}

