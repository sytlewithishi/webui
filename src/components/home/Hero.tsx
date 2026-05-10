import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center gradient-warm overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-6">
              Curated by hand · Across the globe · Not by algorithm
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text leading-[1.05] font-[family-name:var(--font-playfair)]">
              Found around the world.
              <br />
              <span className="text-primary italic">Worn only by you.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-text-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Curated by Ishi from independent designers around the world.
              Style consultation included.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/shop" className="btn btn-primary text-lg px-8 py-4">
                Join the Collection Waitlist
              </Link>
              <Link
                href="/book"
                className="btn btn-secondary text-lg px-8 py-4"
              >
                Book a Consultation
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-muted">
              <span className="uppercase tracking-[0.2em] text-xs">Follow</span>
              <a
                href="https://instagram.com/stylewithishi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Instagram
              </a>
              <span className="text-border">·</span>
              <a
                href="https://youtube.com/@stylewithishi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                YouTube
              </a>
              <span className="text-border">·</span>
              <a
                href="https://tiktok.com/@stylewithishi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                TikTok
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              <div className="absolute inset-0 border-2 border-gold rounded-2xl transform translate-x-4 translate-y-4" />
              <div className="relative h-full bg-muted/20 rounded-2xl overflow-hidden border border-border">
                <Image
                  src="/images/ishi-portrait.jpg"
                  alt="Ishi"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
