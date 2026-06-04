import { createContext, useContext, useState, useEffect } from 'react';
import { login as loginAPI, logout as logoutAPI, restoreSession, updateMe as updateMeAPI } from '@/lib/api/auth';
import { disconnectSocket } from '@/hooks/useAlarmSocket';
import type { User } from '@/types/user';

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateMe: (data: { name?: string; email?: string; password?: string }) => Promise<void>;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    if (savedToken && savedUser) {
      try {
        setToken(savedToken);
        setUser(JSON.parse(savedUser));
        restoreSession();
      } catch {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const userData = await loginAPI({ email, password });
    const savedToken = localStorage.getItem('token');
    setUser(userData);
    setToken(savedToken);
  };

  const logout = () => {
    logoutAPI();
    disconnectSocket();
    setUser(null);
    setToken(null);
  };

  // CHANGED: Update profile and sync changes to localStorage
  // so the nav reflects the new name/email immediately.
  const updateMe = async (data: { name?: string; email?: string; password?: string }) => {
    const updated = await updateMeAPI(data);
    const updatedUser = { ...user, ...updated };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        updateMe,
        isAuthenticated: !!token,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};