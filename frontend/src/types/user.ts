


export interface User {
  id?: string;
  email: string;
  passwordHash?: string; // used only server-side
  name: string;
  createdAt?: string;
  lastLogin?: string;
  roleId: string;
  // role?: UserRole;
}
