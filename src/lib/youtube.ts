export const YOUTUBE_CHANNEL_ID = "UCCSVLIrWg896z-wP0IMlVbw";
export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@stylewithishi";

export type YouTubeVideo = {
  id: string;
  title: string;
  publishedAt: string;
};

export const youtubeVideos: YouTubeVideo[] = [
  {
    id: "wecBnE_xYKk",
    title: "Pinterest Inspired",
    publishedAt: "2026-05-01",
  },
  {
    id: "AsPpcz5L4M4",
    title: "Outfit Ideas",
    publishedAt: "2026-04-26",
  },
  {
    id: "PwHQZ7rOV9Y",
    title: "Summer Ready",
    publishedAt: "2026-04-19",
  },
  {
    id: "2zcde9sdVFA",
    title: "Glam Outfit Idea",
    publishedAt: "2026-04-17",
  },
  {
    id: "uwEaefIXru8",
    title: "Summer Outfit",
    publishedAt: "2026-04-12",
  },
  {
    id: "_ypxxlSqpH0",
    title: "Subtle Glam",
    publishedAt: "2026-04-09",
  },
  {
    id: "fkBVz2NH60c",
    title: "Outfit Ideas",
    publishedAt: "2026-04-05",
  },
  {
    id: "9FMXlPDTHbA",
    title: "Perfect Dress for Spring",
    publishedAt: "2026-04-02",
  },
  {
    id: "bIFLYVwhREQ",
    title: "Gym Ready",
    publishedAt: "2026-03-27",
  },
  {
    id: "UKy6QtUB-Js",
    title: "A Little Desi Fashion",
    publishedAt: "2026-03-19",
  },
  {
    id: "hKW3X3QXaAU",
    title: "Subtle Glam",
    publishedAt: "2026-03-13",
  },
  {
    id: "oYL9PFs-3HM",
    title: "Outfit Ideas",
    publishedAt: "2026-03-08",
  },
  {
    id: "NQ1kwKRRRns",
    title: "Simple Outfit, Bold Colour",
    publishedAt: "2026-03-06",
  },
  {
    id: "mUm_WVxL15Y",
    title: "Styling Tip · Jacket + Brooch",
    publishedAt: "2026-02-26",
  },
  {
    id: "HreC68005fs",
    title: "Time for Spring",
    publishedAt: "2026-02-22",
  },
];

export function thumbUrl(videoId: string, quality: "hq" | "max" | "sd" = "hq") {
  const file =
    quality === "max"
      ? "maxresdefault.jpg"
      : quality === "sd"
        ? "sddefault.jpg"
        : "hqdefault.jpg";
  return `https://i.ytimg.com/vi/${videoId}/${file}`;
}

export function watchUrl(videoId: string) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}
