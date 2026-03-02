import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fuji Tyres | Premium Tyres & Expert Fitting Services",
  description:
    "Your trusted destination for premium tyres, expert consultation, and tyre inspection. Quality brands, competitive prices, and personalised advice for every vehicle.",
  keywords: [
    "tyres",
    "buy tyres",
    "tyre shop",
    "car tyres",
    "premium tyres",
    "tyre consultation",
    "tyre inspection",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
