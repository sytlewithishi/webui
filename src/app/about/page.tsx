import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ishi — Curator & Stylist",
  description:
    "Meet Ishi (@stylewithishi): two decades of fashion curation, sourcing independent designers globally and styling clients one piece at a time.",
  keywords: [
    "about stylewithishi",
    "ishi curator",
    "fashion curator bio",
    "independent designer stylist",
    "globally sourced fashion",
  ],
  openGraph: {
    title: "About Ishi — Curator & Stylist | StyleWithIshi",
    description:
      "Two decades. Globally curated. Independent designers only. Personal styling included.",
  },
};

const values = [
  {
    title: "Independence",
    description:
      "Championing makers outside the system — small ateliers, single-person studios, the designers no algorithm will surface.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Discovery",
    description:
      "Off-feed. Off-runway. Off the obvious. The good stuff is rarely where everyone is already looking.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    title: "Restraint",
    description:
      "Fewer, better. A wardrobe of pieces you actually want to wear beats a closet full of pieces you forgot you owned.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 12h14"
        />
      </svg>
    ),
  },
  {
    title: "Story",
    description:
      "Every piece carries its origin — the maker, the place, the moment. Yours becomes the next chapter.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
];

const howIWork = [
  {
    step: "01",
    title: "We talk",
    body: "A short conversation about your life, your closet, what's working, what isn't. No tests, no quizzes — I learn faster from how you describe a bad outfit than from any questionnaire.",
  },
  {
    step: "02",
    title: "I curate",
    body: "From two decades of relationships with independent designers and one ear to the ground, I pull a small set of pieces I think are right for you. Sometimes from the Collection, sometimes commissioned, always considered.",
  },
  {
    step: "03",
    title: "You wear it",
    body: "The styling is yours. I send notes on how to wear each piece, what it pairs with, when to break the rules. Follow-up sessions are part of the work — style isn't a single transaction.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4">
                About
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text font-[family-name:var(--font-playfair)] leading-[1.05]">
                Hi, I&apos;m <span className="text-primary italic">Ishi</span>
              </h1>
              <p className="mt-4 text-lg text-text-light">
                Curator. Stylist. Hard to track down.
              </p>

              <div className="mt-8 space-y-4 text-text-light leading-relaxed">
                <p>
                  I&apos;ve spent the last two decades in fashion — most of it
                  off the obvious paths. I work with independent designers
                  around the world: small studios, next-generation makers, the
                  houses you may not have heard of yet. And I bring what they
                  make to the people I think will love it.
                </p>
                <p>
                  My job has two halves. One half is curation: finding the
                  pieces, the makers, the small studios that the algorithm will
                  never surface. The other half is styling: helping the right
                  pieces find the right people, and showing you how to wear
                  them in a way that&apos;s yours.
                </p>
                <p>
                  Every piece comes with its story. The styling, I share with
                  you.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/book" className="btn btn-primary">
                  Work With Me
                </Link>
                <Link href="/atelier" className="btn btn-secondary">
                  The Curation Philosophy
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                <div className="absolute inset-0 border-2 border-gold rounded-2xl transform translate-x-4 translate-y-4" />
                <div className="relative h-full bg-muted/20 rounded-2xl overflow-hidden border border-border">
                  <Image
                    src="/images/ishi-portrait.jpg"
                    alt="Ishi"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-2">
              What I Believe
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-[family-name:var(--font-playfair)]">
              Four things that shape{" "}
              <span className="text-primary italic">the work</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  {value.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-text font-[family-name:var(--font-playfair)]">
                  {value.title}
                </h3>
                <p className="mt-2 text-text-light text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-2">
              How I Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-[family-name:var(--font-playfair)]">
              From conversation to{" "}
              <span className="text-primary italic">closet</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {howIWork.map((step) => (
              <div key={step.step} className="card p-8">
                <span className="text-5xl font-bold text-gold/40 font-[family-name:var(--font-playfair)]">
                  {step.step}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-text font-[family-name:var(--font-playfair)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-text-light text-sm leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-2">
                Hear it from me
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-text font-[family-name:var(--font-playfair)]">
                A short <span className="text-primary italic">message</span>
              </h2>
            </div>

            <div className="aspect-video bg-muted/20 rounded-2xl overflow-hidden border border-border">
              <div className="w-full h-full flex items-center justify-center text-muted">
                <div className="text-center p-8">
                  <svg
                    className="w-20 h-20 mx-auto mb-4 text-muted/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-sm">YouTube Video Embed</p>
                  <p className="text-xs mt-1 text-muted/70">
                    Add your introduction video here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section gradient-accent text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)]">
              Ready to be styled?
            </h2>
            <p className="mt-4 text-white/90 text-lg">
              Consultations are open. The Collection waitlist is too.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="btn bg-white text-primary hover:bg-background"
              >
                Book a Consultation
              </Link>
              <Link
                href="/shop"
                className="btn border-2 border-white text-white hover:bg-white/10"
              >
                Join the Collection Waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
