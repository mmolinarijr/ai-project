import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/layout/ThemeContext';
import ClientRootLayout from '@/components/layout/ClientRootLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Agrinvest',
  description: 'Agrinvest Project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <ClientRootLayout>
        <main className="flex-1 flex flex-col items-center justify-between w-full overflow-y-auto">{children}</main>
      </ClientRootLayout>
    </ThemeProvider>
  );
}
