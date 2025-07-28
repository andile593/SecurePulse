export interface Alarm {
  id?: string;
  type: string; // e.g., "motion", "tamper", "door"
  location: string;
  triggeredAt: string;
  resolved?: boolean;
  resolvedAt?: string;
}
