import type { Guard, Site } from '@/types';

export interface OBLog {
  id?: string;
  shortId?: number; 
  logTime: string;
  notes: string;
  actionLog: string;
  siteId?: string;
  guardId?: string;
  site?: Site;
  guard?: Guard;
}
