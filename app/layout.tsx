import type { Metadata } from "next";
import "./globals.css";
import { Poppins as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "400"],
});

export const metadata: Metadata = {
  title: "Yahya Dahir | Frontend Developer",
  description: "Yahya Dahir | Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        {children}
      </body>
    </html>
  );
}
