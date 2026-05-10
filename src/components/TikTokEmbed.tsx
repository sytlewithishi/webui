"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __tiktokEmbedScriptInjected?: boolean;
  }
}

export default function TikTokEmbed({
  id,
  url,
  className,
}: {
  id: string;
  url: string;
  className?: string;
}) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.__tiktokEmbedScriptInjected) return;

    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    window.__tiktokEmbedScriptInjected = true;
  }, []);

  return (
    <blockquote
      className={`tiktok-embed ${className ?? ""}`}
      cite={url}
      data-video-id={id}
      style={{ maxWidth: "605px", minWidth: "325px", margin: 0 }}
    >
      <section>
        <a target="_blank" rel="noopener noreferrer" href={url}>
          View on TikTok
        </a>
      </section>
    </blockquote>
  );
}
