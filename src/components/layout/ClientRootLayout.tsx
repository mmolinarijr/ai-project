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
    <html lang="pt-br" className={theme === "dark" ? "dark" : "light"}>
      <body className={`bg-white text-black dark:bg-black dark:text-white ${inter.className}`}>
        <Header />
        <div className="mt-24 max-h-fit">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
