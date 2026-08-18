'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'superadmin' | 'admin' | 'volunteer';

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  isGoogleUser?: boolean;
  twoFactorEnabled?: boolean;
  twoFactorSecret?: string;
}

interface AuthContextType {
  currentUser: UserAccount | null;
  users: UserAccount[];
  login: (email: string, pass: string) => boolean;
  loginWithGoogle: (googleProfile: { name?: string; email: string }) => void;
  initiateGoogleOAuth: () => void;
  logout: () => void;
  addAdminAccount: (name: string, email: string, pass: string) => void;
  deleteAdminAccount: (id: string) => void;
  deleteUserAccount?: (id: string) => void;
  updateUserRole?: (id: string, role: UserRole) => void;
  enable2FA: (userId: string) => string;
  verify2FA: (userId: string, code: string) => boolean;
  disable2FA: (userId: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const INITIAL_USERS: UserAccount[] = [
  { id: 'usr_super', name: 'Super Admin', email: 'superadmin@victory.org.ph', role: 'superadmin' },
  { id: 'usr_admin', name: 'Admin User', email: 'admin@victory.org.ph', role: 'admin' },
  { id: 'usr_volunteer', name: 'Volunteer User', email: 'volunteer@victory.org.ph', role: 'volunteer' },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<UserAccount[]>(INITIAL_USERS);
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(null);

  useEffect(() => {
    // Load stored users or fallback to INITIAL_USERS
    const savedUsersStr = localStorage.getItem('app_users');
    let currentUsersList = INITIAL_USERS;

    if (savedUsersStr) {
      try {
        const parsed = JSON.parse(savedUsersStr);
        if (Array.isArray(parsed) && parsed.length > 0) {
          currentUsersList = parsed;
        } else {
          localStorage.setItem('app_users', JSON.stringify(INITIAL_USERS));
        }
      } catch (e) {
        localStorage.setItem('app_users', JSON.stringify(INITIAL_USERS));
      }
    } else {
      localStorage.setItem('app_users', JSON.stringify(INITIAL_USERS));
    }

    setUsers(currentUsersList);

    const savedCurrentUser = localStorage.getItem('app_current_user');
    if (savedCurrentUser) {
      setCurrentUser(JSON.parse(savedCurrentUser));
    }

    // Check for Google ID Token cookie set by OAuth callback
    const cookies = document.cookie.split(';');
    const tokenCookie = cookies.find((c) => c.trim().startsWith('google_id_token='));
    if (tokenCookie) {
      try {
        const idToken = tokenCookie.split('=')[1];
        // Decode Base64 JWT payload
        const base64Url = idToken.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
          atob(base64)
            .split('')
            .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
        );

        const payload = JSON.parse(jsonPayload);
        loginWithGoogle({
          name: payload.name || payload.email.split('@')[0],
          email: payload.email,
        });

        // Clear token cookie after reading
        document.cookie = 'google_id_token=; Max-Age=0; path=/;';
      } catch (e) {
        console.error('Failed to parse Google ID Token:', e);
      }
    }
  }, []);

  const saveUsers = (updatedUsers: UserAccount[]) => {
    setUsers(updatedUsers);
    localStorage.setItem('app_users', JSON.stringify(updatedUsers));
  };

  const login = (email: string, _pass: string) => {
    const savedUsersStr = localStorage.getItem('app_users');
    const parsedUsers: UserAccount[] = savedUsersStr ? JSON.parse(savedUsersStr) : [];
    const availableUsers = parsedUsers.length > 0 ? parsedUsers : INITIAL_USERS;

    const user = availableUsers.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (user) {
      setCurrentUser(user);
      localStorage.setItem('app_current_user', JSON.stringify(user));
      if (!savedUsersStr || parsedUsers.length === 0) {
        localStorage.setItem('app_users', JSON.stringify(INITIAL_USERS));
      }
      return true;
    }
    return false;
  };

  // AUTOMATIC USER CREATION & REAL GOOGLE NAME/EMAIL MATCHING
  const loginWithGoogle = (googleProfile: { name?: string; email: string }) => {
    const savedUsersStr = localStorage.getItem('app_users');
    const parsedUsers: UserAccount[] = savedUsersStr ? JSON.parse(savedUsersStr) : [];
    const currentList = parsedUsers.length > 0 ? parsedUsers : INITIAL_USERS;

    const realEmail = googleProfile.email;
    
    // Derived formatted name from profile or handle
    const realName =
      googleProfile.name && googleProfile.name.trim() !== '' && googleProfile.name.toLowerCase() !== 'google user'
        ? googleProfile.name
        : realEmail
            .split('@')[0]
            .replace(/[._-]/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase());

    let targetUser = currentList.find(
      (u) => u.email.toLowerCase() === realEmail.toLowerCase()
    );

    let updatedList: UserAccount[];

    if (!targetUser) {
      // Create brand new account with actual Google Name and Email
      targetUser = {
        id: `usr_${Date.now()}`,
        name: realName,
        email: realEmail,
        role: 'volunteer',
        isGoogleUser: true,
        twoFactorEnabled: false,
      };
      updatedList = [...currentList, targetUser];
    } else {
      // Update existing matched user with the current Google Name
      targetUser = { ...targetUser, name: realName, isGoogleUser: true };
      updatedList = currentList.map((u) => (u.id === targetUser!.id ? targetUser! : u));
    }

    saveUsers(updatedList);
    setCurrentUser(targetUser);
    localStorage.setItem('app_current_user', JSON.stringify(targetUser));
  };

  const initiateGoogleOAuth = () => {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

    if (!clientId || clientId === 'YOUR_GOOGLE_CLIENT_ID') {
      alert('Google Client ID is not configured in .env.local!');
      return;
    }

    const redirectUri = encodeURIComponent(`${window.location.origin}/api/auth/callback/google`);
    const scope = encodeURIComponent('openid email profile');
    const nonce = Math.random().toString(36).substring(2);

    // OAuth implicit flow returning id_token directly
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=id_token&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&nonce=${nonce}`;

    window.location.href = authUrl;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('app_current_user');
  };

  const addAdminAccount = (name: string, email: string, _pass: string) => {
    const newUser: UserAccount = {
      id: `usr_${Date.now()}`,
      name,
      email,
      role: 'admin',
      twoFactorEnabled: false,
    };
    const updated = [...users, newUser];
    saveUsers(updated);
  };

  const deleteAdminAccount = (id: string) => {
    const updated = users.filter((u) => u.id !== id);
    saveUsers(updated);
  };

  const updateUserRole = (id: string, role: UserRole) => {
    const updated = users.map((u) => (u.id === id ? { ...u, role } : u));
    saveUsers(updated);
    if (currentUser && currentUser.id === id) {
      const updatedCurrent = { ...currentUser, role };
      setCurrentUser(updatedCurrent);
      localStorage.setItem('app_current_user', JSON.stringify(updatedCurrent));
    }
  };

  const enable2FA = (userId: string) => {
    const secret = 'MOCK_2FA_SECRET_KEY_123';
    const updated = users.map((u) =>
      u.id === userId ? { ...u, twoFactorEnabled: true, twoFactorSecret: secret } : u
    );
    saveUsers(updated);
    if (currentUser && currentUser.id === userId) {
      const updatedCurrent = { ...currentUser, twoFactorEnabled: true, twoFactorSecret: secret };
      setCurrentUser(updatedCurrent);
      localStorage.setItem('app_current_user', JSON.stringify(updatedCurrent));
    }
    return secret;
  };

  const verify2FA = (_userId: string, code: string) => {
    return code.length === 6;
  };

  const disable2FA = (userId: string) => {
    const updated = users.map((u) =>
      u.id === userId ? { ...u, twoFactorEnabled: false, twoFactorSecret: undefined } : u
    );
    saveUsers(updated);
    if (currentUser && currentUser.id === userId) {
      const updatedCurrent = { ...currentUser, twoFactorEnabled: false, twoFactorSecret: undefined };
      setCurrentUser(updatedCurrent);
      localStorage.setItem('app_current_user', JSON.stringify(updatedCurrent));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        users,
        login,
        loginWithGoogle,
        initiateGoogleOAuth,
        logout,
        addAdminAccount,
        deleteAdminAccount,
        deleteUserAccount: deleteAdminAccount,
        updateUserRole,
        enable2FA,
        verify2FA,
        disable2FA,
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