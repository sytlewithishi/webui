import Link from "next/link";
import type { Metadata } from "next";
import { FAQJsonLd } from "@/components/SEO/JsonLd";

export const metadata: Metadata = {
  title: "Personal Styling Services & Packages",
  description:
    "Book personal styling sessions with Ishi: 1-on-1 consultations starting at $150, wardrobe audits, personal shopping, and style courses. Transform your look with a professional fashion consultant.",
  keywords: [
    "personal styling services",
    "fashion consultant packages",
    "wardrobe audit service",
    "personal shopping service",
    "style consultation pricing",
    "virtual styling session",
    "in-person stylist",
  ],
  openGraph: {
    title: "Personal Styling Services & Packages | StyleWithIshi",
    description:
      "Book personal styling sessions: consultations, wardrobe audits, personal shopping & courses. Packages from $199.",
  },
};

const packages = [
  {
    id: "essentials",
    name: "Essentials",
    tagline: "Perfect for a style refresh",
    price: "$199",
    priceNote: "One-time",
    description:
      "Get personalized style guidance to refresh your look and build confidence in your wardrobe choices.",
    features: [
      "60-minute virtual consultation",
      "Style assessment questionnaire",
      "Personalized style guide PDF",
      "Color palette recommendations",
      "Shopping list with links",
      "Email follow-up support",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    id: "signature",
    name: "Signature",
    tagline: "Complete wardrobe transformation",
    price: "$499",
    priceNote: "One-time",
    description:
      "A comprehensive styling experience to transform your wardrobe and create a cohesive, versatile collection.",
    features: [
      "90-minute virtual consultation",
      "Complete wardrobe audit",
      "Capsule wardrobe planning",
      "Personalized lookbook",
      "Curated shopping recommendations",
      "Two 30-minute follow-up sessions",
      "Priority email support (30 days)",
    ],
    popular: true,
    cta: "Most Popular",
  },
  {
    id: "vip",
    name: "VIP Experience",
    tagline: "Full personal styling service",
    price: "$999",
    priceNote: "One-time",
    description:
      "The ultimate styling experience with hands-on personal shopping and ongoing support for a complete style transformation.",
    features: [
      "2-hour in-person or virtual consultation",
      "In-depth wardrobe audit & organization",
      "Personal shopping experience (3 hours)",
      "Complete style transformation guide",
      "Seasonal wardrobe updates (4x/year)",
      "Unlimited email support (90 days)",
      "VIP access to new services & events",
      "Priority booking",
    ],
    popular: false,
    cta: "Go VIP",
  },
];

const services = [
  {
    id: "styling",
    title: "1-on-1 Styling Sessions",
    description:
      "Personalized consultations designed to help you discover your unique style identity. We'll discuss your lifestyle, preferences, and goals to create a customized approach to your wardrobe.",
    includes: [
      "Style assessment & body type analysis",
      "Color theory & palette recommendations",
      "Outfit formulas for your lifestyle",
      "Shopping strategies & brand recommendations",
    ],
    duration: "60-90 minutes",
    format: "Virtual or In-Person",
    startingAt: "$150",
  },
  {
    id: "wardrobe",
    title: "Wardrobe Audit",
    description:
      "A comprehensive review of your existing wardrobe to identify key pieces, fill gaps, and maximize your outfit options. We'll organize, edit, and create new combinations from what you already own.",
    includes: [
      "Complete closet assessment",
      "Keep, donate, alter recommendations",
      "Gap analysis & shopping list",
      "Outfit combination guide",
    ],
    duration: "2-3 hours",
    format: "Virtual or In-Person",
    startingAt: "$250",
  },
  {
    id: "shopping",
    title: "Personal Shopping",
    description:
      "Let me be your style guide as we shop together for pieces that elevate your wardrobe. Whether in-store or online, I'll help you make smart, stylish choices that fit your budget and lifestyle.",
    includes: [
      "Pre-shopping consultation",
      "Curated store/brand selection",
      "Real-time styling guidance",
      "Budget management support",
    ],
    duration: "3-4 hours",
    format: "In-Person or Virtual",
    startingAt: "$350",
  },
  {
    id: "courses",
    title: "Style Courses & Workshops",
    description:
      "Learn the fundamentals of fashion through interactive group workshops and self-paced online courses. Perfect for those who want to understand the 'why' behind styling decisions.",
    includes: [
      "Video lessons & workbooks",
      "Live Q&A sessions",
      "Community access",
      "Certificate of completion",
    ],
    duration: "Self-paced or 4-week cohorts",
    format: "Online",
    startingAt: "$99",
  },
];

const faqs = [
  {
    question: "How do virtual sessions work?",
    answer:
      "Virtual sessions are conducted via Zoom or Google Meet. For wardrobe audits, you'll walk me through your closet using your phone camera. For consultations, we'll review your style goals and I'll share my screen to show recommendations.",
  },
  {
    question: "What should I prepare before our session?",
    answer:
      "Before our session, you'll complete a style questionnaire and send photos of your current wardrobe (or key pieces). This helps me understand your lifestyle, preferences, and goals so we can make the most of our time together.",
  },
  {
    question: "Do you work with all budgets?",
    answer:
      "Great style isn't about how much you spend—it's about making smart choices. I work with clients at all budget levels and will tailor my recommendations to fit your financial comfort zone.",
  },
  {
    question: "Can I book individual services instead of packages?",
    answer:
      "Individual services are available for wardrobe audits and personal shopping. However, packages offer the best value and most comprehensive experience. Contact me if you have specific needs.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellations made 48+ hours before your session receive a full refund. Cancellations within 24-48 hours can be rescheduled once. Less than 24 hours notice is non-refundable but can be credited toward a future service.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <FAQJsonLd faqs={faqs} />
      {/* Hero Section */}
      <section className="section gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-secondary font-medium tracking-wide uppercase text-sm mb-2">
              Services & Packages
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text font-[family-name:var(--font-playfair)]">
              Find Your Perfect{" "}
              <span className="text-primary">Style Package</span>
            </h1>
            <p className="mt-6 text-lg text-text-light">
              From quick style refreshes to complete wardrobe transformations,
              I offer services tailored to your unique needs and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-secondary font-medium tracking-wide uppercase text-sm mb-2">
              Styling Packages
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-[family-name:var(--font-playfair)]">
              Choose Your <span className="text-primary">Transformation</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative card p-8 flex flex-col ${
                  pkg.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-text font-[family-name:var(--font-playfair)]">
                    {pkg.name}
                  </h3>
                  <p className="text-muted text-sm">{pkg.tagline}</p>
                </div>

                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-primary font-[family-name:var(--font-playfair)]">
                    {pkg.price}
                  </span>
                  <span className="text-muted text-sm ml-2">{pkg.priceNote}</span>
                </div>

                <p className="text-text-light text-sm mb-6">{pkg.description}</p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <svg
                        className="w-5 h-5 text-accent flex-shrink-0 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-text-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/book?package=${pkg.id}`}
                  className={`btn w-full ${
                    pkg.popular ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="section gradient-warm" id="individual">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-secondary font-medium tracking-wide uppercase text-sm mb-2">
              Individual Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-[family-name:var(--font-playfair)]">
              À La Carte <span className="text-primary">Options</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="card p-8 scroll-mt-24"
              >
                <h3 className="text-xl font-semibold text-text font-[family-name:var(--font-playfair)]">
                  {service.title}
                </h3>
                <p className="mt-3 text-text-light text-sm">
                  {service.description}
                </p>

                <div className="mt-6">
                  <h4 className="text-sm font-medium text-text mb-2">
                    What&apos;s Included:
                  </h4>
                  <ul className="space-y-2">
                    {service.includes.map((item, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <svg
                          className="w-4 h-4 text-accent flex-shrink-0 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-text-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center text-muted">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {service.duration}
                  </div>
                  <div className="flex items-center text-muted">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    {service.format}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-text">
                    Starting at{" "}
                    <span className="font-semibold text-primary">
                      {service.startingAt}
                    </span>
                  </span>
                  <Link
                    href={`/book?service=${service.id}`}
                    className="text-primary font-medium text-sm hover:text-primary-dark transition-colors"
                  >
                    Book Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-secondary font-medium tracking-wide uppercase text-sm mb-2">
              Common Questions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-[family-name:var(--font-playfair)]">
              Frequently <span className="text-primary">Asked</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card p-6">
                <h3 className="font-semibold text-text">{faq.question}</h3>
                <p className="mt-2 text-text-light text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section gradient-accent text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)]">
              Not Sure Which Service Is Right for You?
            </h2>
            <p className="mt-4 text-white/90 text-lg">
              Book a free 15-minute discovery call and I&apos;ll help you find
              the perfect fit.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn bg-white text-primary hover:bg-background"
              >
                Schedule a Discovery Call
              </Link>
              <Link
                href="/book"
                className="btn border-2 border-white text-white hover:bg-white/10"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
