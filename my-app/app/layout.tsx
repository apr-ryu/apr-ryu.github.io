import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { Providers } from "./providers";
import CartProvider from "./statics/constants/cartContext";

//COMPONENTS
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import "./globals.scss";
import "./globals.css";

const lexend = Lexend({
  weight: ["200", "300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font--lexend",
});

export const metadata: Metadata = {
  title: "Mogu Table",
  description: "Mogu Table",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} antialiased`}>
        <Providers>
          <CartProvider>
            <Navbar />
            {children}
            <Footer />
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
