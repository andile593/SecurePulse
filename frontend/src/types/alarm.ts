import type { Transmitter } from '@/types';
import type { AiCall } from '@/types';
import type { Dispatch } from '@/types';

export interface Alarm {
  id?: string;
  shortId?: number;   
  source: string;          // Type of Alarm (FSK, OLA)
  eventType: string;       // Event Type
  triggeredAt: string;     // Date and time
  zone: string;            // Triggered zone
  transmitterId: string;   // 🔑 FK to transmitter
  transmitter?: Transmitter;
  aiCalls?: AiCall[];
  dispatch?: Dispatch;
}
