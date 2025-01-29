import HeaderTop from "@/components/HeaderTop";

import "./globals.css"
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "TREAT PATH GLOBAL - Health and Pet Care Services",
  description: "Welcome to TREAT PATH GLOBAL - Your trusted destination for high-quality medicines and health solutions. Our mission is to provide accessible and reliable healthcare options including pet care services to everyone. Explore our wide range of over-the-counter remedies and prescription drugs, and experience our commitment to excellence with carefully curated products from top pharmaceutical companies. Treat Path is here to support your journey to better health.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderTop />
        {children}
      </body>
    </html>
  );
}