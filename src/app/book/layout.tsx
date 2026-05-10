import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Styling Session",
  description:
    "Book your personal styling session with Ishi. Choose from packages starting at $199 or individual services. Virtual and in-person options available.",
  keywords: [
    "book personal stylist",
    "schedule styling session",
    "hire fashion consultant",
    "virtual styling booking",
    "wardrobe consultation booking",
  ],
  openGraph: {
    title: "Book a Styling Session | StyleWithIshi",
    description:
      "Book your personal styling session with Ishi. Packages from $199. Virtual and in-person options.",
  },
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
