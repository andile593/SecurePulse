import type { Site } from '@/types';
import type { OBLog } from '@/types';
import type { Dispatch } from '@/types';
import type { AiCall } from '@/types';

export interface Alarm {
  id?: string;
  triggeredAt: string;
  alarmType: string;
  priority: number;
  status: string;
  siteId: string;
  site?: Site;
  OBLogs?: OBLog[];
  aiCall?: AiCall;
  dispatch?: Dispatch;
}
