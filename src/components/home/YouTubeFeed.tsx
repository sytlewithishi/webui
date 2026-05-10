import Image from "next/image";
import {
  youtubeVideos,
  thumbUrl,
  watchUrl,
  YOUTUBE_CHANNEL_URL,
} from "@/lib/youtube";

export default function YouTubeFeed() {
  const recent = youtubeVideos.slice(0, 6);

  return (
    <section className="section gradient-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-2">
              From the Channel
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text font-[family-name:var(--font-playfair)] leading-tight">
              Latest from{" "}
              <span className="text-primary italic">@stylewithishi</span>
            </h2>
          </div>
          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:text-primary-dark transition-colors whitespace-nowrap"
          >
            See all on YouTube →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5">
          {recent.map((video) => (
            <a
              key={video.id}
              href={watchUrl(video.id)}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              aria-label={`Watch: ${video.title}`}
            >
              <div className="aspect-[9/16] relative overflow-hidden rounded-xl border border-border bg-background-alt">
                <Image
                  src={thumbUrl(video.id, "max")}
                  alt={video.title}
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-text/70 via-transparent to-transparent" />
                <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-text/60 backdrop-blur-sm flex items-center justify-center text-background opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    className="w-4 h-4 ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <p className="mt-3 text-sm text-text font-medium leading-snug line-clamp-2">
                {video.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
