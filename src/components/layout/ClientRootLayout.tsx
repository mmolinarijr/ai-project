'use client';

import { useTheme } from "@/app/ThemeContext";

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
