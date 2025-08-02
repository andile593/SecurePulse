// lib/api/auth.ts

import api from './axios';

export const login = async (credentials: { email: string; password: string }) => {
  const response = await api.post('/auth/login', credentials);
  const { token, user } = response.data;

  // Store token (and maybe user info) securely
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
  
  // Set token for future requests
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  return user;
};
