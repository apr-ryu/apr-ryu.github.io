import type { Metadata } from "next";
import { Lexend } from "next/font/google";

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
      <body className={`${lexend.variable} antialiased`}>{children}</body>
    </html>
  );
}
