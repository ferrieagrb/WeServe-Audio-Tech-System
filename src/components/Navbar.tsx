'use client';
import Link from 'next/link';

interface NavbarProps {
  role: 'admin' | 'volunteer';
  setRole: (role: 'admin' | 'volunteer') => void;
}

export default function Navbar({ role, setRole }: NavbarProps) {
  return (
    <nav className="bg-slate-900 text-white p-4 flex justify-between items-center shadow-md">
      <div className="flex space-x-6 items-center">
        <span className="font-bold text-lg text-indigo-400">AudioTech Ministry</span>
        <Link href="/" className="hover:text-indigo-300">Master Inventory</Link>
        <Link href="/checklist" className="hover:text-indigo-300">Service Checklist</Link>
      </div>
      <div className="flex items-center space-x-2 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
        <span className="text-xs text-gray-400">Current Role:</span>
        <button
          onClick={() => setRole(role === 'admin' ? 'volunteer' : 'admin')}
          className={`px-2 py-1 text-xs font-bold rounded ${
            role === 'admin' ? 'bg-red-600 text-white' : 'bg-green-600 text-white'
          }`}
        >
          {role.toUpperCase()}
        </button>
      </div>
    </nav>
  );
}