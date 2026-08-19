'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { ShieldCheck, Lock, Mail, Key, UserCheck } from 'lucide-react';

export default function LoginPage() {
  const { login, initiateGoogleOAuth, verify2FA } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [twoFactorCode, setTwoFactorCode] = useState('');
  const [pendingUser, setPendingUser] = useState<any>(null);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const success = await login(email, password);
      if (!success) {
        setError('Invalid credentials or user not found.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred during login.');
    }
  };

  const handleQuickLogin = async (quickEmail: string) => {
    setError('');
    setEmail(quickEmail);
    setPassword('password123');

    try {
      const success = await login(quickEmail, 'password123');
      if (!success) {
        setError('Failed to log in with preset account.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred during quick login.');
    }
  };

  const handleVerify2FA = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pendingUser) return;

    if (verify2FA(pendingUser.id, twoFactorCode)) {
      await login(pendingUser.email, password);
    } else {
      setError('Invalid 2FA code. Please try again.');
    }
  };

  const handleGoogleSignIn = () => {
    initiateGoogleOAuth();
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <img src="victory-logo.png" alt="Your Company" className="mx-auto h-20 w-auto" />
          <span className="font-bold tracking-silang ps-[0.8em] text-primary mx-auto mt-2">SILANG</span>
          <h1 className="text-2xl font-bold text-slate-800">Audio Tech Ministry</h1>
          <p className="text-xs text-slate-500">Sign in to manage checklist & inventory</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 border border-red-200 text-xs p-3 rounded-lg text-center font-medium">
            {error}
          </div>
        )}

        {/* 2FA CODE PROMPT */}
        {pendingUser ? (
          <form onSubmit={handleVerify2FA} className="space-y-4">
            <div className="text-center space-y-1">
              <div className="flex justify-center text-indigo-600 mb-2">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h2 className="text-base font-bold text-slate-800">Two-Factor Authentication</h2>
              <p className="text-xs text-slate-500">Enter the 6-digit code from your authenticator app.</p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">2FA Verification Code</label>
              <div className="relative">
                <Key className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  maxLength={6}
                  placeholder="123456"
                  value={twoFactorCode}
                  onChange={(e) => setTwoFactorCode(e.target.value)}
                  className="w-full border border-slate-300 pl-9 pr-3 py-2 rounded-lg text-sm text-center tracking-widest font-mono outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg text-sm transition-colors shadow-sm"
            >
              Verify Code
            </button>
            <button
              type="button"
              onClick={() => setPendingUser(null)}
              className="w-full text-xs text-slate-500 hover:underline text-center block"
            >
              Back to Login
            </button>
          </form>
        ) : (
          <>
            {/* GOOGLE SIGN IN BUTTON */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold py-2.5 px-4 rounded-lg text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Sign in with Google</span>
            </button>

            <div className="flex items-center my-4">
              <div className="flex-1 border-t border-slate-200"></div>
              <span className="px-3 text-xs text-slate-400 font-medium">OR</span>
              <div className="flex-1 border-t border-slate-200"></div>
            </div>

            {/* STANDARD LOGIN FORM */}
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    placeholder="user@victory.org.ph"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-slate-300 pl-9 pr-3 py-2 rounded-lg text-sm text-primary outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-slate-300 pl-9 pr-3 py-2 rounded-lg text-sm text-primary outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg text-sm transition-colors shadow-sm"
              >
                Sign In
              </button>
            </form>

            {/* QUICK LOGINS */}
            <div className="pt-2 border-t border-slate-100 space-y-2">
              <p className="text-[11px] font-semibold text-slate-400 text-center uppercase tracking-wider">
                Quick Dev Logins
              </p>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => handleQuickLogin('superadmin@victory.org.ph')}
                  className="bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 py-1.5 px-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-1"
                >
                  <UserCheck className="w-3 h-3" />
                  Super
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickLogin('admin@victory.org.ph')}
                  className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 py-1.5 px-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-1"
                >
                  <UserCheck className="w-3 h-3" />
                  Admin
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickLogin('volunteer@victory.org.ph')}
                  className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 py-1.5 px-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-1"
                >
                  <UserCheck className="w-3 h-3" />
                  Volunteer
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}