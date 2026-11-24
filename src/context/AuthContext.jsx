import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('satyield_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return null;
      }
    }
    // Default demo user so the app is immediately fully usable
    return {
      name: 'Ramesh Patel',
      email: 'ramesh.farmer@smartkisan.in',
      phone: '+91 98220 12345',
      state: 'Maharashtra',
      city: 'Nagpur',
      farmSize: '5 Acres',
      role: 'Progressive Farmer'
    };
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('satyield_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('satyield_user');
    }
  }, [user]);

  const login = (email, password) => {
    const newUser = {
      name: email.split('@')[0].toUpperCase(),
      email,
      phone: '+91 98220 12345',
      state: 'Maharashtra',
      city: 'Nagpur',
      farmSize: '4.5 Acres',
      role: 'Registered Farmer'
    };
    setUser(newUser);
    return true;
  };

  const signup = (userData) => {
    setUser({
      ...userData,
      role: 'Registered Farmer'
    });
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
