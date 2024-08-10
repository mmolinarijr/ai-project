'use client';

import { useTheme } from '@/components/layout/ThemeContext';
import { Inter } from 'next/font/google';
import Header from './Header';
import Footer from './Footer';

const inter = Inter({ subsets: ['latin'] });

export default function ClientRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = useTheme();

  return (
    <html
      lang="pt-br"
      className={theme === 'dark' ? 'dark' : 'light'}>
      <body
        className={`flex flex-col min-h-screen bg-white text-black dark:bg-black dark:text-white ${inter.className}`}>
        <Header />
        <main className="flex-1 flex flex-col items-center justify-between w-full pt-[100px] pb-[50px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
