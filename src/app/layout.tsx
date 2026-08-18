import { AuthProvider } from '@/context/AuthContext';
import { AppProvider } from '@/context/ChecklistContext'; // Changed ChecklistProvider to AppProvider
import './globals.css';
import {Nunito} from 'next/font/google';
import { Roboto } from 'next/font/google';
import type { Metadata } from 'next';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Choose the weights you need
  variable: '--font-nunito',     // Define the CSS variable
  display: 'swap',
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto', // Required to use .variable
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${nunito.variable} ${roboto.variable}`}>
      <body className="font-nunito font-roboto">
        <AuthProvider>
          <AppProvider>
            {children}
          </AppProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

