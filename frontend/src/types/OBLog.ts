import type { Guard } from '@/types';
import type { Alarm } from '@/types';

export interface OBLog {
  id?: string;
  shortId?: number; 
  logTime: string;
  message: string;
  source: string;
  alarmId?: string;
  guardId?: string;
  alarm?: Alarm;
  guard?: Guard;
}
