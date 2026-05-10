import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { edits } from "@/lib/edits";
import { thumbUrl } from "@/lib/youtube";
import EmailSignupForm from "@/components/forms/EmailSignupForm";

export const metadata: Metadata = {
  title: "The Edits — By Mood, Occasion, and Hand",
  description:
    "Curated bundles by Ishi: the right handful of pieces for the right moment. Travel, workwear, evening, off-duty.",
  keywords: [
    "fashion edits",
    "stylewithishi edits",
    "curated fashion bundles",
    "occasion styling",
    "travel capsule wardrobe",
  ],
  openGraph: {
    title: "The Edits | StyleWithIshi",
    description:
      "Mood-based curations. The right handful of pieces for the moment, by Ishi.",
  },
};

export default function EditsPage() {
  return (
    <>
      <section className="section gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4">
              The Edits
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text font-[family-name:var(--font-playfair)] leading-[1.05]">
              Mood, occasion,
              <br />
              <span className="text-primary italic">a handful of pieces.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-text-light leading-relaxed">
              Edits are how I think about wardrobes — not by category, but by
              the moment a piece earns its place. Each one is a small set of
              hand-picked pieces, drawn from independent designers around the
              world.
            </p>
            <p className="mt-4 text-sm text-muted">
              Pieces become available with each Collection drop. Edits stay
              live as living references.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {edits.map((edit) => (
              <article
                key={edit.slug}
                className="group flex flex-col rounded-2xl overflow-hidden border border-border bg-background-alt"
              >
                <div className="aspect-[4/5] relative bg-background-alt">
                  {edit.youtubeVideoId ? (
                    <Image
                      src={thumbUrl(edit.youtubeVideoId, "max")}
                      alt={edit.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-muted">
                      <div className="text-center p-6">
                        <p className="text-xs uppercase tracking-[0.2em]">
                          Editorial Image
                        </p>
                        <p className="text-xs mt-1 text-muted/70">
                          {edit.imagePath}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6 md:p-8 bg-surface">
                  <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-2">
                    {edit.eyebrow}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-text font-[family-name:var(--font-playfair)]">
                    {edit.title}
                  </h2>
                  <p className="mt-4 text-text-light leading-relaxed">
                    {edit.blurb}
                  </p>
                  <blockquote className="mt-6 pl-4 border-l-2 border-gold text-sm text-text-light italic leading-relaxed">
                    {edit.curatorNote}
                    <footer className="mt-2 text-xs text-muted not-italic tracking-wide">
                      — Ishi
                    </footer>
                  </blockquote>
                  <p className="mt-6 text-sm text-muted">
                    {edit.pieceCount} pieces · arriving with the next drop
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-3">
              Get the next drop
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-[family-name:var(--font-playfair)]">
              Edits go live with each{" "}
              <span className="text-primary italic">Collection drop</span>
            </h2>
            <p className="mt-4 text-text-light">
              Join the waitlist for first access — and the curator&apos;s notes
              that come with each drop.
            </p>
            <div className="mt-8 max-w-md mx-auto">
              <EmailSignupForm
                source="edits-waitlist"
                buttonLabel="Join the Waitlist"
                size="large"
                placeholder="your@email.com"
                successMessage="On the list. Edits live the moment the drop opens."
              />
            </div>
            <div className="mt-6">
              <Link
                href="/atelier"
                className="text-primary font-medium text-sm hover:text-primary-dark transition-colors"
              >
                More on how the curation works →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
