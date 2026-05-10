import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Ishi's Picks - Curated Fashion & Style Essentials",
  description:
    "Shop curated fashion finds from Ishi's personal collection on Amazon. Wardrobe essentials, seasonal favorites, and style staples handpicked by a professional stylist with 20+ years of experience.",
  keywords: [
    "shop stylewithishi",
    "ishi amazon storefront",
    "stylewithishi amazon",
    "curated fashion picks",
    "stylist recommendations",
    "wardrobe essentials",
    "fashion staples",
    "personal stylist picks",
    "style essentials",
    "capsule wardrobe items",
  ],
  openGraph: {
    title: "Shop Ishi's Picks | StyleWithIshi",
    description:
      "Shop curated fashion finds from Ishi's Amazon storefront. Wardrobe essentials and style staples handpicked by a professional stylist.",
    url: "https://stylewithishi.com/shop",
  },
  alternates: {
    canonical: "https://stylewithishi.com/shop",
  },
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
