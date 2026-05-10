import Link from "next/link";
import Image from "next/image";

const highlights = [
  { title: "Two Decades", subtitle: "Curating, styling, traveling" },
  { title: "Globally Sourced", subtitle: "Independent ateliers worldwide" },
  { title: "One-of-a-kind", subtitle: "Pieces you won't see twice" },
  { title: "Styling Included", subtitle: "Every piece, every consultation" },
];

export default function AboutTeaser() {
  return (
    <section className="section gradient-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-lg mx-auto lg:mx-0">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold/20 rounded-full" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full" />

              <div className="relative h-full bg-muted/20 rounded-2xl overflow-hidden border border-border">
                <Image
                  src="/images/ishi-portrait.jpg"
                  alt="Ishi"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-3">
              The Curator
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text font-[family-name:var(--font-playfair)] leading-tight">
              Hi, I&apos;m <span className="text-primary italic">Ishi</span>
            </h2>

            <div className="mt-6 space-y-4 text-text-light leading-relaxed">
              <p>
                For two decades I&apos;ve spent more time in independent
                ateliers than department stores. Pieces find me as often as I
                find them — through quiet referrals, late-night DMs, the
                occasional tip from a designer&apos;s friend.
              </p>
              <p>
                Every piece comes with its story. The styling, I share with
                you.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="border-l-2 border-gold pl-4 py-1"
                >
                  <p className="font-medium text-text">{item.title}</p>
                  <p className="text-sm text-muted">{item.subtitle}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/about" className="btn btn-primary">
                More About Me
              </Link>
              <Link href="/atelier" className="btn btn-secondary">
                The Curation Philosophy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
