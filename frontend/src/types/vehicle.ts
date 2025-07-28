export interface Vehicle {
  id?: string;
  plateNumber: string;
  type: "car" | "bike" | "van";
  status: "available" | "in_use" | "maintenance";
  assignedGuardId?: string;
}
