import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact StyleWithIshi - Book a Consultation",
  description:
    "Get in touch with Ishi for styling inquiries, bookings, collaborations, or press. Contact @stylewithishi to start your style transformation journey.",
  keywords: [
    "contact stylewithishi",
    "book personal stylist",
    "styling consultation",
    "fashion consultant contact",
    "hire personal stylist",
  ],
  openGraph: {
    title: "Contact StyleWithIshi - Book a Consultation",
    description:
      "Get in touch with Ishi for styling inquiries, bookings, or collaborations. Start your style transformation today.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
