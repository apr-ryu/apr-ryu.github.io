import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { CartProvider } from "./statics/constants/cartContext";
import "./globals.scss";
import "./globals.css";
import "tailwindcss/tailwind.css";

import { NextUIProvider } from "@nextui-org/react";

//COMPONENTS
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const lexend = Lexend({
  weight: ["200", "300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font--lexend",
});

export const metadata: Metadata = {
  title: "mogutable",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} antialiased`}>
        <NextUIProvider>
          <CartProvider>
            <Navbar />
            {children}
            <Footer />
          </CartProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}