import { useMemo, useState } from 'react';

export function useAuth() {
  const [token, setToken] = useState(() => localStorage.getItem('token'));

  function login(newToken) {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  }

  function logout() {
    localStorage.removeItem('token');
    setToken(null);
  }

  const isAuthenticated = useMemo(() => Boolean(token), [token]);

  return {
    token,
    isAuthenticated,
    login,
    logout,
  };
}
