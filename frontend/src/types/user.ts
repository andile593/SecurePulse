export interface User {
  id?: string;
  username: string;
  email: string;
  role: "admin" | "guard" | "client" | "dispatcher";
  status: "active" | "inactive";
  createdAt?: string;
  updatedAt?: string;
}
