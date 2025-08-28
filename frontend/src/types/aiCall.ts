// AiCall.ts
import type { Alarm } from '@/types';

export interface AiCall {
  id?: string;
  shortId?: number; 
  aiDecision: string;
  confidenceScore: number;
  calledAt: string;
  callDuration: string;
  evaluatedAt: string;
  notes?: string;
  alarmId: string;
  alarm?: Alarm;
}
