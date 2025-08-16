import type { Site } from '@/types';
import type { OBLog } from '@/types';
import type { Dispatch } from '@/types';
import type { AiCall } from '@/types';

export interface Alarm {
  id?: string;
  shortId?: number;
  triggeredAt: string;
  eventType: string;
  priority: number;
  status: string;
  source: string;
  siteId: string;
  clientId: string;
  resolutionNotes?: string;
  resolvedBy?: string;
  resolvedAt?: string;
  lastAICheckAt?: string;
  aiDecision?: string;
  site?: Site;
  OBLogs?: OBLog[];
  aiCall?: AiCall;
  dispatch?: Dispatch;
}
