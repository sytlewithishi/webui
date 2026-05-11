import Link from "next/link";
import type { Metadata } from "next";
import EmailSignupForm from "@/components/forms/EmailSignupForm";

export const metadata: Metadata = {
  title: "Atelier — A Letter from the Curator",
  description:
    "How Ishi curates the Collection: what earns a spot, how the designers are found, and why their names stay between us.",
  keywords: [
    "fashion curation",
    "independent designer sourcing",
    "global fashion atelier",
    "curator philosophy",
    "stylewithishi atelier",
  ],
  openGraph: {
    title: "Atelier — A Letter from the Curator | StyleWithIshi",
    description:
      "How Ishi curates pieces from independent designers around the world — and why their names stay private.",
  },
};

const principles = [
  {
    eyebrow: "What earns a spot",
    heading: "The piece has to do something the wardrobe can't.",
    body: [
      "I'm not interested in another version of something you already own. Every piece in the Collection has to do work — change a silhouette, finish an outfit, become the reason a friend asks where you got it.",
      "Most pieces I see don't make the cut. The ones that do tend to share a few traits: they're made by hand or made in small numbers, they hold up to wear, and they look better with time, not worse.",
    ],
  },
  {
    eyebrow: "How I find them",
    heading: "Off the algorithm. On the road.",
    body: [
      "I travel for the Collection — to the studios, the side-streets, the back rooms. Some of the strongest designers I work with have no shop, no English-language site, sometimes no Instagram. They were introduced by another designer, or by a tailor, or by a friend who knew I'd want to know.",
      "When I'm not on the road, I'm reading, watching, asking. The signal-to-noise ratio in fashion media is terrible. I keep a quiet network instead.",
    ],
  },
  {
    eyebrow: "Why styling is half the work",
    heading: "Finding the piece is one thing. Wearing it is another.",
    body: [
      "Most pieces fail not because they're bad, but because they're given to the wrong wearer or worn the wrong way. Curation without styling is just shopping with someone else's taste.",
      "Every piece in the Collection comes with notes — what to pair it with, when to break the rule, what not to do. Optional consultation goes deeper. The styling is part of the work, not an upsell.",
    ],
  },
];

export default function AtelierPage() {
  return (
    <>
      <section className="section gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4">
              The Atelier
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text font-[family-name:var(--font-playfair)] leading-[1.05]">
              A letter from the{" "}
              <span className="text-primary italic">curator</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-text-light leading-relaxed">
              People ask me all the time: who are the designers? Where are they?
              How do I find them? Here&apos;s how the curation actually works.
            </p>
            <p className="mt-4 text-sm text-muted tracking-wide">— Ishi</p>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-20">
            {principles.map((p) => (
              <article key={p.eyebrow}>
                <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-3">
                  {p.eyebrow}
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text font-[family-name:var(--font-playfair)] leading-tight">
                  {p.heading}
                </h2>
                <div className="mt-6 space-y-4 text-text-light leading-relaxed text-lg">
                  {p.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Where the curation lives — Medellín + Mumbai */}
      <section className="bg-background-alt overflow-hidden">
        <div className="text-center py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-3">
            Where the curation lives
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text font-[family-name:var(--font-playfair)] leading-tight max-w-3xl mx-auto">
            Two cities. The{" "}
            <span className="text-primary italic">first chapter</span>.
          </h2>
          <p className="mt-6 text-text-light text-lg leading-relaxed max-w-2xl mx-auto">
            The Collection&apos;s first drop is sourced from these two cities
            — the current chapter in two decades of finding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Medellín */}
          <article className="relative bg-gradient-to-br from-[#3d5a3d] via-[#6B8E23] to-[#A0522D] text-background p-12 md:p-16 lg:p-20 min-h-[600px] flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/3 pointer-events-none" />
            <div className="relative">
              <p className="font-medium tracking-[0.25em] uppercase text-xs mb-5 text-gold-light">
                Colombia
              </p>
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-playfair)] leading-[0.95]">
                Medellín
              </h3>
              <p className="mt-4 text-xl md:text-2xl italic font-[family-name:var(--font-playfair)] text-gold-light">
                City of Eternal Spring
              </p>
            </div>
            <div className="relative mt-12 space-y-5 leading-relaxed text-background/90">
              <p className="text-base md:text-lg">
                One of Latin America&apos;s most active fashion hubs — a wave
                of independent designers in Poblado and Laureles working with
                hand-loomed textiles, sustainable leather, and a colour
                palette borrowed from the mountains.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.25em] text-gold-light pt-4 border-t border-background/20">
                <span>Emerald</span>
                <span className="text-background/40">·</span>
                <span>Terracotta</span>
                <span className="text-background/40">·</span>
                <span>Mountain Green</span>
              </div>
            </div>
          </article>

          {/* Mumbai */}
          <article className="relative bg-gradient-to-br from-[#A8871F] via-[#D2691E] to-[#8B4513] text-background p-12 md:p-16 lg:p-20 min-h-[600px] flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/30 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/40 rounded-full blur-3xl -translate-x-1/2 translate-y-1/3 pointer-events-none" />
            <div className="relative">
              <p className="font-medium tracking-[0.25em] uppercase text-xs mb-5 text-gold-light">
                India
              </p>
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-playfair)] leading-[0.95]">
                Mumbai
              </h3>
              <p className="mt-4 text-xl md:text-2xl italic font-[family-name:var(--font-playfair)] text-gold-light">
                Maximum City
              </p>
            </div>
            <div className="relative mt-12 space-y-5 leading-relaxed text-background/90">
              <p className="text-base md:text-lg">
                India&apos;s fashion capital — heritage textile houses share
                blocks with a new generation of designers. Hand-block
                printing, jamdani weaving, and global brands built out of
                Bandra studios.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.25em] text-gold-light pt-4 border-t border-background/20">
                <span>Saffron</span>
                <span className="text-background/40">·</span>
                <span>Indigo</span>
                <span className="text-background/40">·</span>
                <span>Gold</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4">
              The next drop
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-[family-name:var(--font-playfair)]">
              Want first <span className="text-primary italic">word</span>?
            </h2>
            <p className="mt-4 text-text-light">
              Drops are tight and quiet. The waitlist gets the email before
              anyone else.
            </p>
            <div className="mt-8 max-w-md mx-auto">
              <EmailSignupForm
                source="atelier-waitlist"
                buttonLabel="Join the Waitlist"
                size="large"
                placeholder="your@email.com"
                successMessage="On the list. I'll write when there's something to say."
              />
            </div>
            <div className="mt-6">
              <Link
                href="/book"
                className="text-primary font-medium text-sm hover:text-primary-dark transition-colors"
              >
                Or book a styling consultation →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
