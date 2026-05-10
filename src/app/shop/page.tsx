import Link from "next/link";
import type { Metadata } from "next";
import EmailSignupForm from "@/components/forms/EmailSignupForm";

export const metadata: Metadata = {
  title: "The Collection — Coming Soon",
  description:
    "A globally curated collection of independent designer pieces, by Ishi. Drops launch soon — join the waitlist for first access.",
  keywords: [
    "stylewithishi collection",
    "independent designer drops",
    "curated fashion",
    "indie fashion drops",
    "global designer collection",
  ],
  openGraph: {
    title: "The Collection — Coming Soon | StyleWithIshi",
    description:
      "Independent designers from around the world, personally curated by Ishi. Join the waitlist for the first drop.",
  },
};

const expectations = [
  {
    title: "Drop-based",
    description:
      "Tight, intentional drops. Each one a story, sourced over months — not stocked on shelves.",
  },
  {
    title: "Hand-picked",
    description:
      "Every piece passes through me. If it's in the drop, I've held it, worn it, or wanted it for myself.",
  },
  {
    title: "From the makers",
    description:
      "Pieces direct from independent ateliers, with the maker's story attached.",
  },
  {
    title: "Styling included",
    description:
      "Each piece comes with notes on how to wear it. Optional consultation for the full transformation.",
  },
];

export default function ShopPage() {
  return (
    <>
      <section className="section gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4">
              The Collection
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text font-[family-name:var(--font-playfair)] leading-tight">
              Coming. <span className="text-primary italic">Soon.</span>
            </h1>
            <p className="mt-6 text-lg text-text-light leading-relaxed">
              Independent designers, personally curated across the globe.
              The first drop — from{" "}
              <span className="text-primary font-medium">Colombia</span> and{" "}
              <span className="text-primary font-medium">India</span> —
              arrives this summer. Join the waitlist for priority access.
            </p>

            <div className="mt-10 max-w-lg mx-auto">
              <EmailSignupForm
                source="collection-waitlist"
                buttonLabel="Join the Waitlist"
                size="large"
                placeholder="your@email.com"
                successMessage="You're on the list. First drop notice will land in your inbox."
              />
              <p className="text-xs text-muted mt-3">
                Priority access · No spam · Unsubscribe anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-surface border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-3">
              The First Drop · Summer 2026
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text font-[family-name:var(--font-playfair)] leading-tight">
              Sourced from{" "}
              <span className="text-primary italic">Colombia</span> and{" "}
              <span className="text-primary italic">India</span>
            </h2>
            <p className="mt-6 text-text-light leading-relaxed text-lg">
              Two regions long on my radar — both with deep made-by-hand
              traditions and a generation of designers redefining what comes
              next. The first Collection drop arrives this summer. The
              waitlist gets first word.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-gold rounded-full" />
                <span className="text-text-light">
                  Colombia · independent ateliers
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-gold rounded-full" />
                <span className="text-text-light">
                  India · contemporary craft houses
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-2">
              What to Expect
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-[family-name:var(--font-playfair)]">
              How <span className="text-primary italic">it works</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {expectations.map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="text-lg font-semibold text-text font-[family-name:var(--font-playfair)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-text-light text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4">
              A note from the curator
            </p>
            <blockquote className="text-xl md:text-2xl text-text font-[family-name:var(--font-playfair)] italic leading-relaxed">
              &ldquo;Curation is a conversation between three people: the
              designer, you, and me. My job is to find the pieces you
              didn&apos;t know you were looking for, and put them in the
              hands of someone who&apos;ll love them.&rdquo;
            </blockquote>
            <p className="mt-6 text-sm text-muted tracking-wide">
              — Ishi
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-surface border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted tracking-wide uppercase mb-3">
              In the meantime
            </p>
            <h3 className="text-xl font-semibold text-text font-[family-name:var(--font-playfair)]">
              Daily picks on Amazon
            </h3>
            <p className="mt-3 text-text-light text-sm max-w-xl mx-auto">
              While the Collection is in curation, you&apos;ll find my everyday
              recommendations — accessible pieces I actually use — on my Amazon
              storefront.
            </p>
            <a
              href="https://www.amazon.ca/shop/stylewithishi"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-primary font-medium text-sm hover:text-primary-dark transition-colors"
            >
              Browse the storefront
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
            <p className="mt-3 text-xs text-muted">
              As an Amazon Associate, I earn from qualifying purchases.
            </p>
          </div>
        </div>
      </section>

      <section className="section gradient-accent text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)]">
              Want to be styled <span className="italic">while you wait</span>?
            </h2>
            <p className="mt-4 text-white/90 text-lg">
              Consultation slots are open now. The Collection waitlist gets
              priority booking.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="btn bg-white text-primary hover:bg-background"
              >
                Book a Consultation
              </Link>
              <Link
                href="/atelier"
                className="btn border-2 border-white text-white hover:bg-white/10"
              >
                The Curation Philosophy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
