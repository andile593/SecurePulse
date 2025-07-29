import type { Alarm } from '@/types';

export interface AiCall {
  id?: string;
  aiDecision: string;
  confidenceScore: number;
  evaluatedAt: string;
  notes?: string;
  alarmId: string;
  alarm?: Alarm;
}
