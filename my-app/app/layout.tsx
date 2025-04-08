import type { Metadata } from "next";
import { Lexend } from "next/font/google";

//COMPONENTS
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import "./globals.scss";

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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
