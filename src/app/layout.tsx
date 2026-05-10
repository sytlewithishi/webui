import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  PersonJsonLd,
  LocalBusinessJsonLd,
  WebsiteJsonLd,
} from "@/components/SEO/JsonLd";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stylewithishi.com"),
  title: {
    default: "StyleWithIshi | Globally Curated Fashion by Ishi",
    template: "%s | StyleWithIshi",
  },
  description:
    "Independent designers from around the world, personally curated by Ishi. Two decades of style direction, now with a private collection of one-of-a-kind pieces.",
  keywords: [
    "independent designer fashion",
    "globally curated fashion",
    "private collection",
    "personal stylist",
    "fashion curator",
    "wardrobe stylist",
    "personal shopping",
    "wardrobe audit",
    "capsule wardrobe",
    "one of a kind clothing",
    "indie designer clothes",
    "global fashion sourcing",
    "boutique styling",
    "stylewithishi",
  ],
  authors: [{ name: "Ishi", url: "https://stylewithishi.com" }],
  creator: "StyleWithIshi",
  publisher: "StyleWithIshi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://stylewithishi.com",
  },
  openGraph: {
    title: "StyleWithIshi | Globally Curated Fashion by Ishi",
    description:
      "Independent designers from around the world, personally curated by Ishi. Two decades of style direction, now with a private collection.",
    url: "https://stylewithishi.com",
    type: "website",
    locale: "en_US",
    siteName: "StyleWithIshi",
  },
  twitter: {
    card: "summary_large_image",
    title: "StyleWithIshi | Globally Curated Fashion by Ishi",
    description:
      "Independent designers from around the world, curated by Ishi. Two decades of curation, now with a private collection.",
    site: "@stylewithishi",
    creator: "@stylewithishi",
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
  verification: {
    // Add these when you have the verification codes
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PersonJsonLd />
        <LocalBusinessJsonLd />
        <WebsiteJsonLd />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
