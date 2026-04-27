import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NOMA - Premium Fashion E-Commerce",
  description: "A study of identity in motion. Limited drops from our ORIGINS: RECODED collection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-black text-white">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
