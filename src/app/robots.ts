import { MetadataRoute } from "next";

const BASE_URL = "https://stylewithishi.com";

const aiTrainingBots = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "Google-Extended",
  "anthropic-ai",
  "ClaudeBot",
  "Claude-Web",
  "CCBot",
  "PerplexityBot",
  "Perplexity-User",
  "Bytespider",
  "Applebot-Extended",
  "Amazonbot",
  "cohere-ai",
  "Diffbot",
  "FacebookBot",
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  "ImagesiftBot",
  "Omgilibot",
  "Omgili",
  "DataForSeoBot",
  "magpie-crawler",
  "AwarioRssBot",
  "AwarioSmartBot",
  "AwarioBot",
  "PiplBot",
  "PetalBot",
  "Scrapy",
  "scrapy",
  "AhrefsBot",
  "MJ12bot",
  "DotBot",
  "SemrushBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/private/", "/_next/", "/admin/"],
      },
      ...aiTrainingBots.map((bot) => ({
        userAgent: bot,
        disallow: "/",
      })),
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
