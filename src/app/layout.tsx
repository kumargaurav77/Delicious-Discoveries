'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Delicious Discoveries",
  description: "Discover the art of culinary mastery at our institute. From novice chefs to seasoned professionals, we offer a diverse range of courses tailored to every skill level. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
       <div className="relative flex w-full item-center justify-center">
       <Navbar/>
       </div>
        {children}
        
        
        </body>
    </html>
  );
}
