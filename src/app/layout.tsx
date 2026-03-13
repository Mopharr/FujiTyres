import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fujityres.com.ng"),
  title: {
    default: "Fuji Tyres | Buy Premium Tyres & Rims in Lagos, Nigeria",
    template: "%s | Fuji Tyres Lagos",
  },
  icons: {
    icon: "/favicon.svg",
  },
  description:
    "Buy quality tyres and rims in Lagos, Nigeria. Fuji Tyres stocks 50+ brands including Michelin, Bridgestone, Continental & Pirelli. Free expert consultation, tyre inspection, and competitive prices. Visit us at Trade Fair Lagos or Lagos Island.",
  keywords: [
    "tyres Lagos",
    "buy tyres in Lagos",
    "tyre shop Lagos Nigeria",
    "car tyres Lagos",
    "SUV tyres Nigeria",
    "tyre rims Lagos",
    "alloy rims Lagos",
    "Michelin tyres Lagos",
    "Bridgestone tyres Nigeria",
    "Continental tyres Lagos",
    "Pirelli tyres Nigeria",
    "tyre consultation Lagos",
    "tyre inspection Lagos",
    "premium tyres Nigeria",
    "Trade Fair tyres Lagos",
    "Lagos Island tyre shop",
    "buy tyres online Nigeria",
    "Fuji Tyres",
    "fuji tyres lagos",
  ],
  alternates: {
    canonical: "https://fujityres.com.ng",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://fujityres.com.ng",
    siteName: "Fuji Tyres",
    title: "Fuji Tyres | Buy Premium Tyres & Rims in Lagos, Nigeria",
    description:
      "Your trusted destination for quality tyres at unbeatable prices in Lagos. 50+ brands, free expert consultation, and professional tyre inspection services.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fuji Tyres - Premium Tyres and Rims in Lagos, Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fuji Tyres | Premium Tyres & Rims in Lagos",
    description:
      "Buy quality tyres from 50+ brands in Lagos. Free consultation, competitive prices. Visit Trade Fair or Lagos Island.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
