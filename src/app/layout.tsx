import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from "@/components/layout/ThemeContext";
import ClientRootLayout from "@/components/layout/ClientRootLayout";

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
        <div className={inter.className}>{children}</div>
      </ClientRootLayout>
    </ThemeProvider>
  );
}
