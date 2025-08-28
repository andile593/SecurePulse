import type { Alarm } from './alarm';

export interface AiCall {
  id?: string;
  shortId?: number;
  alarmId: string;
  calledAt: string;
  callDuration?: string;
  notes?: string;
  aiDecision?: string;
  confidenceScore?: number;
  evaluatedAt?: string;
  alarm?: Alarm;
}
