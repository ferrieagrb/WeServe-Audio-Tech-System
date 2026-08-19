'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/supabaseClient'; // Make sure this points to your supabase client file

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
  login: (email: string, pass: string) => Promise<boolean>;
  loginWithGoogle: (googleProfile: { name?: string; email: string }) => Promise<void>;
  initiateGoogleOAuth: () => void;
  logout: () => void;
  addAdminAccount: (name: string, email: string, pass: string) => Promise<void>;
  deleteAdminAccount: (id: string) => Promise<void>;
  deleteUserAccount?: (id: string) => Promise<void>;
  updateUserRole?: (id: string, role: UserRole) => Promise<void>;
  enable2FA: (userId: string) => Promise<string>;
  verify2FA: (userId: string, code: string) => boolean;
  disable2FA: (userId: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<UserAccount[]>([]);
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(null);

  useEffect(() => {
    // 1. Fetch all users from Supabase on load
    async function fetchInitialData() {
      const { data: remoteUsers, error } = await supabase.from('users').select('*');
      if (error) {
        console.error('Error fetching users from Supabase:', error.message);
      } else if (remoteUsers) {
        // Map database columns if naming differs (e.g. password_hash, etc.)
        const formattedUsers: UserAccount[] = remoteUsers.map((u) => ({
          id: u.id,
          name: u.name,
          email: u.email,
          role: u.role,
          isGoogleUser: u.is_google_user || false,
          twoFactorEnabled: u.two_factor_enabled || false,
          twoFactorSecret: u.two_factor_secret || undefined,
        }));
        setUsers(formattedUsers);
      }

      // Check for saved session in localStorage (or keep session state managed dynamically)
      const savedCurrentUser = localStorage.getItem('app_current_user');
      if (savedCurrentUser) {
        try {
          setCurrentUser(JSON.parse(savedCurrentUser));
        } catch (e) {
          localStorage.removeItem('app_current_user');
        }
      }
    }

    fetchInitialData();

    // 2. Check for Google ID Token cookie set by OAuth callback
    const cookies = document.cookie.split(';');
    const tokenCookie = cookies.find((c) => c.trim().startsWith('google_id_token='));
    if (tokenCookie) {
      try {
        const idToken = tokenCookie.split('=')[1];
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

        document.cookie = 'google_id_token=; Max-Age=0; path=/;';
      } catch (e) {
        console.error('Failed to parse Google ID Token:', e);
      }
    }
  }, []);

  const login = async (email: string, _pass: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('email', email.toLowerCase())
        .single();

      if (error || !data) {
        return false;
      }

      const userAccount: UserAccount = {
        id: data.id,
        name: data.name,
        email: data.email,
        role: data.role,
        isGoogleUser: data.is_google_user,
        twoFactorEnabled: data.two_factor_enabled,
        twoFactorSecret: data.two_factor_secret,
      };

      setCurrentUser(userAccount);
      localStorage.setItem('app_current_user', JSON.stringify(userAccount));
      return true;
    } catch (err) {
      console.error('Login error:', err);
      return false;
    }
  };

  const loginWithGoogle = async (googleProfile: { name?: string; email: string }) => {
    const realEmail = googleProfile.email.toLowerCase();
    const realName =
      googleProfile.name && googleProfile.name.trim() !== '' && googleProfile.name.toLowerCase() !== 'google user'
        ? googleProfile.name
        : realEmail
            .split('@')[0]
            .replace(/[._-]/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase());

    // Check if user already exists in Supabase
    const { data: existingUser } = await supabase
      .from('users')
      .select('*')
      .eq('email', realEmail)
      .single();

    let targetUser: UserAccount;

    if (!existingUser) {
      // Insert new user into Supabase
      const { data: newUserArray, error } = await supabase
        .from('users')
        .insert([
          {
            name: realName,
            email: realEmail,
            role: 'volunteer',
            is_google_user: true,
            two_factor_enabled: false,
          },
        ])
        .select();

      if (error || !newUserArray) {
        console.error('Failed to create Google user in database:', error?.message);
        return;
      }

      const created = newUserArray[0];
      targetUser = {
        id: created.id,
        name: created.name,
        email: created.email,
        role: created.role,
        isGoogleUser: created.is_google_user,
      };
      setUsers((prev) => [...prev, targetUser]);
    } else {
      // Update existing user name / google flag
      const { data: updatedArray, error } = await supabase
        .from('users')
        .update({ name: realName, is_google_user: true })
        .eq('id', existingUser.id)
        .select();

      if (!error && updatedArray) {
        const updated = updatedArray[0];
        targetUser = {
          id: updated.id,
          name: updated.name,
          email: updated.email,
          role: updated.role,
          isGoogleUser: updated.is_google_user,
          twoFactorEnabled: updated.two_factor_enabled,
          twoFactorSecret: updated.two_factor_secret,
        };
        setUsers((prev) => prev.map((u) => (u.id === targetUser.id ? targetUser : u)));
      } else {
        targetUser = {
          id: existingUser.id,
          name: realName,
          email: existingUser.email,
          role: existingUser.role,
          isGoogleUser: true,
        };
      }
    }

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

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=id_token&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&nonce=${nonce}`;
    window.location.href = authUrl;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('app_current_user');
  };

  const addAdminAccount = async (name: string, email: string, _pass: string) => {
    const { data, error } = await supabase
      .from('users')
      .insert([
        {
          name,
          email: email.toLowerCase(),
          role: 'admin',
          two_factor_enabled: false,
        },
      ])
      .select();

    if (error) {
      console.error('Error adding admin account:', error.message);
      return;
    }

    if (data && data.length > 0) {
      const created = data[0];
      const newUserAccount: UserAccount = {
        id: created.id,
        name: created.name,
        email: created.email,
        role: created.role,
        twoFactorEnabled: created.two_factor_enabled,
      };
      setUsers((prev) => [...prev, newUserAccount]);
    }
  };

  const deleteAdminAccount = async (id: string) => {
    const { error } = await supabase.from('users').delete().eq('id', id);

    if (error) {
      console.error('Error deleting user:', error.message);
      return;
    }

    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const updateUserRole = async (id: string, role: UserRole) => {
    const { error } = await supabase.from('users').update({ role }).eq('id', id);

    if (error) {
      console.error('Error updating role:', error.message);
      return;
    }

    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, role } : u)));
    if (currentUser && currentUser.id === id) {
      const updatedCurrent = { ...currentUser, role };
      setCurrentUser(updatedCurrent);
      localStorage.setItem('app_current_user', JSON.stringify(updatedCurrent));
    }
  };

  const enable2FA = async (userId: string): Promise<string> => {
    const secret = 'MOCK_2FA_SECRET_KEY_123';
    const { error } = await supabase
      .from('users')
      .update({ two_factor_enabled: true, two_factor_secret: secret })
      .eq('id', userId);

    if (error) {
      console.error('Error enabling 2FA:', error.message);
      return '';
    }

    setUsers((prev) =>
      prev.map((u) => (u.id === userId ? { ...u, twoFactorEnabled: true, twoFactorSecret: secret } : u))
    );
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

  const disable2FA = async (userId: string) => {
    const { error } = await supabase
      .from('users')
      .update({ two_factor_enabled: false, two_factor_secret: null })
      .eq('id', userId);

    if (error) {
      console.error('Error disabling 2FA:', error.message);
      return;
    }

    setUsers((prev) =>
      prev.map((u) => (u.id === userId ? { ...u, twoFactorEnabled: false, twoFactorSecret: undefined } : u))
    );
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