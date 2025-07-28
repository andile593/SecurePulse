export interface AiCall {
  id?: string;
  message: string;
  severity: "low" | "medium" | "high";
  timestamp: string;
  source?: string; // e.g., drone ID or camera ID
}
