import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import type { ReactNode } from 'react';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { token, isLoading } = useAuth();

  if (isLoading) return null;

  return token ? <>{children}</> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;