import api from './axios';

export const login = async (credentials: { email: string; password: string }) => {
  const response = await api.post('/auth/login', credentials);
  const { token, user } = response.data;

  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  return user;
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  delete api.defaults.headers.common['Authorization'];
};

export const restoreSession = () => {
  const token = localStorage.getItem('token');
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
};

export const updateMe = async (data: {
  name?: string;
  email?: string;
  password?: string;
}) => {
  const response = await api.patch('/auth/me', data);
  return response.data;
};