export interface ObLog {
  id?: string;
  title: string;
  content: string;
  createdBy: string; // guard/user ID
  createdAt?: string;
  updatedAt?: string;
}
