import { MetadataRoute } from "next";

const BASE_URL = "https://stylewithishi.com";

// Allowed by default (under "*"): AI search bots that cite live sources in
// answers (OAI-SearchBot, ChatGPT-User, PerplexityBot, Perplexity-User) and
// social link-preview fetchers (FacebookBot, Meta-ExternalFetcher). These are
// what make the site appear in ChatGPT/Claude/Perplexity answers and render
// rich previews on social shares.
//
// Blocked below: AI *training* crawlers (no consent to feed models) and
// commercial SEO scrapers (sell our data to competitors, no value to us).

const aiTrainingBots = [
  "GPTBot",
  "anthropic-ai",
  "ClaudeBot",
  "Google-Extended",
  "CCBot",
  "Bytespider",
  "Applebot-Extended",
  "Amazonbot",
  "cohere-ai",
  "Diffbot",
  "Meta-ExternalAgent",
];

const seoScrapers = [
  "AhrefsBot",
  "MJ12bot",
  "DotBot",
  "SemrushBot",
  "DataForSeoBot",
  "magpie-crawler",
  "AwarioRssBot",
  "AwarioSmartBot",
  "AwarioBot",
  "PiplBot",
  "PetalBot",
  "ImagesiftBot",
  "Omgilibot",
  "Omgili",
  "Scrapy",
  "scrapy",
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
      ...seoScrapers.map((bot) => ({
        userAgent: bot,
        disallow: "/",
      })),
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
