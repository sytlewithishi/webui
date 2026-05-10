import Link from "next/link";
import Image from "next/image";
import { edits } from "@/lib/edits";
import { thumbUrl } from "@/lib/youtube";

export default function EditsTeaser() {
  const featured = edits[0];
  const rest = edits.slice(1, 3);

  return (
    <section className="section bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-2">
              The Edits
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text font-[family-name:var(--font-playfair)] leading-tight">
              Mood, occasion, and the right{" "}
              <span className="text-primary italic">handful of pieces</span>
            </h2>
          </div>
          <Link
            href="/edits"
            className="text-primary font-medium hover:text-primary-dark transition-colors whitespace-nowrap"
          >
            View all edits →
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Link
            href="/edits"
            className="lg:col-span-2 group block relative overflow-hidden rounded-2xl border border-border bg-background-alt"
          >
            <div className="aspect-[16/10] lg:aspect-[16/9] relative">
              {featured.youtubeVideoId ? (
                <Image
                  src={thumbUrl(featured.youtubeVideoId, "max")}
                  alt={featured.title}
                  fill
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-muted">
                  <div className="text-center p-8">
                    <p className="text-xs uppercase tracking-[0.2em]">
                      Editorial Image
                    </p>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-text/85 via-text/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-background">
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">
                  Featured · {featured.eyebrow}
                </p>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-[family-name:var(--font-playfair)] leading-tight">
                  {featured.title}
                </h3>
                <p className="mt-3 text-background/90 max-w-xl">
                  {featured.blurb}
                </p>
                <p className="mt-4 text-xs text-background/70">
                  {featured.pieceCount} pieces ·{" "}
                  <span className="underline group-hover:text-gold transition-colors">
                    See the edit
                  </span>
                </p>
              </div>
            </div>
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {rest.map((edit) => (
              <Link
                key={edit.slug}
                href="/edits"
                className="group block relative overflow-hidden rounded-2xl border border-border bg-background-alt"
              >
                <div className="aspect-[4/3] lg:aspect-[16/10] relative">
                  {edit.youtubeVideoId ? (
                    <Image
                      src={thumbUrl(edit.youtubeVideoId, "max")}
                      alt={edit.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-muted">
                      <p className="text-xs uppercase tracking-[0.2em]">
                        Editorial Image
                      </p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-text/80 via-text/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-background">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gold mb-1">
                      {edit.eyebrow}
                    </p>
                    <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] leading-tight">
                      {edit.title}
                    </h3>
                    <p className="mt-2 text-sm text-background/85 line-clamp-2">
                      {edit.blurb}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
