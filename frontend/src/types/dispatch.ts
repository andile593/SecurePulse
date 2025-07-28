export interface Dispatch {
  id?: string;
  guardId: string;
  siteId: string;
  vehicleId?: string;
  status: "pending" | "en_route" | "arrived" | "completed";
  createdAt?: string;
  updatedAt?: string;
}
