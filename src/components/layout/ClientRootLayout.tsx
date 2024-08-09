'use client';

import { useTheme } from "@/components/layout/ThemeContext";
import { Inter } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });


export default function ClientRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = useTheme();

  return (
    <html lang="pt-br" className={theme === "dark" ? "dark" : ""}>
      <body className={inter.className}>
        <Header />
        <div className='mt-16 ml-16'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
