import type { Transmitter } from '@/types';
import type { AiCall } from '@/types';
import type { Dispatch } from '@/types';

export interface Alarm {
  id?: string;
  shortId?: number;
  source: string;
  eventType: string;
  triggeredAt: string;
  transmitterId: string;
  status?: string;
  zone?: string;
  transmitter?: Transmitter;
  aiCalls?: AiCall[];
  dispatch?: Dispatch;
}