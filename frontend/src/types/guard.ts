export interface Guard {
  id?: string;
  name: string;
  badgeNumber: string;
  phone?: string;
  email?: string;
  status: "on_duty" | "off_duty" | "inactive";
  assignedSiteId?: string;
}
