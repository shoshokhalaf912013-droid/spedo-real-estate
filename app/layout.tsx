import type { Metadata } from "next";

import "@/core/bootstrap";

import FloatingHeader from "@/components/header/FloatingHeader";
import Footer from "@/components/layout/Footer";
import SpedoChatWidget from "@/components/ai/SpedoChatWidget";

import AuthProvider from "@/features/auth/context/AuthProvider";

import {
  Geist,
  Geist_Mono,
  Playfair_Display,
} from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SPEDO Real Estate",
  description:
    "Premium Red Sea Real Estate Investment Opportunities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${playfair.variable}
        h-full
      `}
    >
      <body
        className="
          min-h-screen
          bg-[#05070D]
          text-white
          antialiased
          overflow-x-hidden
        "
      >
        <AuthProvider>
          <FloatingHeader />
          {children}
          <Footer />
          <SpedoChatWidget />
        </AuthProvider>
      </body>
    </html>
  );
}