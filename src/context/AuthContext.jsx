import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const DEMO_USERS = [
  {
    name: 'Ramesh Patel',
    email: 'ramesh.farmer@smartkisan.in',
    phone: '9822012345',
    state: 'Maharashtra',
    city: 'Nagpur',
    farmSize: '5 Acres',
    role: 'Progressive Farmer',
    password: 'kisan123'
  },
  {
    name: 'Gurpreet Singh',
    email: 'gurpreet.punjab@smartkisan.in',
    phone: '9814012345',
    state: 'Punjab',
    city: 'Ludhiana',
    farmSize: '8 Acres',
    role: 'Progressive Farmer',
    password: 'kisan123'
  }
];

export const DEMO_OTP = '5432';

// Strips out password field from user session object
const sanitizeUser = (userObj) => {
  if (!userObj) return null;
  const { password, ...safeUser } = userObj;
  return safeUser;
};

export const AuthProvider = ({ children }) => {
  // Registered users list in localStorage
  const [usersList, setUsersList] = useState(() => {
    try {
      const stored = localStorage.getItem('satyield_users');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to parse satyield_users:', e);
    }
    // Seed with built-in demo farmers
    localStorage.setItem('satyield_users', JSON.stringify(DEMO_USERS));
    return DEMO_USERS;
  });

  // Current session user in localStorage
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('satyield_user');
      if (saved) {
        const parsed = JSON.parse(saved);
        return sanitizeUser(parsed);
      }
    } catch (e) {
      console.error('Failed to parse satyield_user:', e);
    }
    // Visitor starts logged-out by default
    return null;
  });

  // Keep session synced with localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('satyield_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('satyield_user');
    }
  }, [user]);

  // Keep usersList synced with localStorage
  useEffect(() => {
    localStorage.setItem('satyield_users', JSON.stringify(usersList));
  }, [usersList]);

  // login(email, password) -> { ok: true, user } | { ok: false, error: string }
  const login = (email, password) => {
    const trimmedEmail = (email || '').trim().toLowerCase();
    const targetUser = usersList.find(
      (u) => (u.email || '').toLowerCase() === trimmedEmail
    );

    if (!targetUser) {
      return { ok: false, error: 'No farmer account found with this email address.' };
    }

    if (targetUser.password !== password) {
      return { ok: false, error: 'Incorrect password. Please verify your credentials.' };
    }

    const safeUser = sanitizeUser(targetUser);
    setUser(safeUser);
    return { ok: true, user: safeUser };
  };

  // signup(userData) -> { ok: true, user } | { ok: false, error: string }
  const signup = (userData) => {
    const trimmedEmail = (userData.email || '').trim().toLowerCase();
    const existing = usersList.find(
      (u) => (u.email || '').toLowerCase() === trimmedEmail
    );

    if (existing) {
      return { ok: false, error: 'An account with this email is already registered.' };
    }

    const newUserRecord = {
      name: userData.name || 'Farmer',
      email: trimmedEmail,
      phone: userData.phone || '',
      state: userData.state || 'Maharashtra',
      city: userData.city || 'Nagpur',
      farmSize: userData.farmSize || '5 Acres',
      role: 'Registered Farmer',
      password: userData.password
    };

    setUsersList((prev) => [...prev, newUserRecord]);

    const safeUser = sanitizeUser(newUserRecord);
    setUser(safeUser);
    return { ok: true, user: safeUser };
  };

  // loginWithPhone(phone, enteredOtp) -> { ok: true, user } | { ok: false, error: string }
  const loginWithPhone = (phone, enteredOtp) => {
    const cleanPhone = (phone || '').replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      return { ok: false, error: 'Please enter a valid 10-digit mobile number.' };
    }

    if (enteredOtp !== DEMO_OTP) {
      return { ok: false, error: `Invalid OTP. Demo OTP is ${DEMO_OTP}.` };
    }

    // Check if phone matches any registered farmer
    const matched = usersList.find(
      (u) => (u.phone || '').replace(/\D/g, '').endsWith(cleanPhone.slice(-10))
    );

    if (matched) {
      const safe = sanitizeUser(matched);
      setUser(safe);
      return { ok: true, user: safe };
    }

    // If new mobile number, auto-create a verified farmer profile
    const newFarmer = {
      name: `Kisan ${cleanPhone.slice(-4)}`,
      email: `${cleanPhone}@smartkisan.in`,
      phone: cleanPhone,
      state: 'Maharashtra',
      city: 'Nagpur',
      farmSize: '5 Acres',
      role: 'Verified Farmer (OTP)',
      password: 'otp_verified'
    };

    setUsersList((prev) => [...prev, newFarmer]);
    const safe = sanitizeUser(newFarmer);
    setUser(safe);
    return { ok: true, user: safe };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        loginWithPhone,
        logout,
        isAuthenticated: !!user,
        demoUsers: DEMO_USERS,
        demoOtp: DEMO_OTP
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
