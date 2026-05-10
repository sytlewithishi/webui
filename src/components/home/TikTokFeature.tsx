import TikTokEmbed from "@/components/TikTokEmbed";
import { tiktokPosts, TIKTOK_PROFILE_URL } from "@/lib/tiktok";

export default function TikTokFeature() {
  const featured = tiktokPosts[0];

  if (!featured) return null;

  return (
    <section className="section bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          <div>
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-3">
              Found on TikTok
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text font-[family-name:var(--font-playfair)] leading-tight">
              Quick takes,
              <br />
              <span className="text-primary italic">found pieces.</span>
            </h2>
            <p className="mt-6 text-text-light text-lg leading-relaxed">
              The fast lane of the curation. Trending pieces, on-the-fly
              styling, the occasional discovery I can&apos;t wait to share. If
              you want the volume, this is the channel.
            </p>
            <div className="mt-8">
              <a
                href={TIKTOK_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary inline-flex items-center gap-2"
              >
                Follow @stylewithishi on TikTok
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
            </div>
            <p className="mt-4 text-xs text-muted italic">
              &ldquo;{featured.caption}&rdquo;
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <TikTokEmbed id={featured.id} url={featured.url} />
          </div>
        </div>
      </div>
    </section>
  );
}
