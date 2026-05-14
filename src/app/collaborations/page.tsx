import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collaborations | StyleWithIshi",
  description:
    "Past partnerships, editorial features, and collaboration opportunities with StyleWithIshi. For brands, publications, and media.",
};

const collaborationTypes = [
  {
    title: "Brand Partnerships",
    description:
      "Authentic content, product styling, ambassador work, and campaigns with brands whose values align with the curation.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Editorial & Content",
    description:
      "Long-form video, Instagram Reels, TikTok features, and short-form styling content built for the channels your audience actually watches.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Events & Workshops",
    description:
      "Styling workshops, in-store events, panel appearances, and pop-up curation experiences for retail, hospitality, and brand teams.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Press & Media",
    description:
      "Interviews, expert commentary, podcast guesting, and editorial features on fashion, curation, and global design.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
        />
      </svg>
    ),
  },
];

type PastCollaboration = {
  name: string;
  type: string;
  year?: string;
  description?: string;
  // Path under /public, e.g. "/images/brands/halara.svg". Falls back to brand name text when absent.
  logo?: string;
};

// Populate with real brand/designer names. Examples of `type`:
// "Brand Partnership", "Editorial", "Workshop", "Ambassador", "Podcast", "Press Feature".
const pastCollaborations: PastCollaboration[] = [
  { name: "GH-Trends", type: "Brand Partnership" },
  { name: "SideFeel Clothing", type: "Brand Partnership" },
  { name: "Caralane Global", type: "Brand Partnership" },
  { name: "Pumiey", type: "Brand Partnership" },
  { name: "Evaless", type: "Brand Partnership" },
  { name: "Joopita Jewelry", type: "Brand Partnership" },
  { name: "Ana Luisa Jewelry", type: "Brand Partnership", logo: "/images/brands/ana-luisa.png" },
  { name: "NewBella Shoes", type: "Brand Partnership" },
  { name: "Bella Barnett", type: "Brand Partnership" },
  { name: "BeeKind", type: "Brand Partnership" },
  { name: "Loveandcrafted", type: "Brand Partnership" },
  { name: "Flaxmaker", type: "Brand Partnership", description: "Apparel and swimwear collaborations." },
  { name: "Alcea Rosea", type: "Brand Partnership" },
  { name: "Halara", type: "Brand Partnership", logo: "/images/brands/halara.png" },
  { name: "Italo Jewelry", type: "Brand Partnership", logo: "/images/brands/italo.png" },
  { name: "Afitne", type: "Brand Partnership" },
  { name: "Arach & Cloz", type: "Brand Partnership" },
  { name: "StyleWe", type: "Brand Partnership" },
  { name: "Bsubseach", type: "Brand Partnership", description: "Cover-ups collaboration.", logo: "/images/brands/bsubseach.png" },
  { name: "Joyshaper", type: "Brand Partnership", logo: "/images/brands/joyshaper.png" },
  { name: "Berlook", type: "Brand Partnership", logo: "/images/brands/berlook.png" },
  { name: "Retro Stage", type: "Brand Partnership" },
  { name: "Celina Gems", type: "Brand Partnership" },
  { name: "Darong", type: "Brand Partnership" },
  { name: "Bestyle", type: "Brand Partnership", description: "Crystal necklace collaboration." },
  { name: "Totatuit", type: "Brand Partnership" },
  { name: "VVCloth", type: "Brand Partnership", logo: "/images/brands/vvcloth.jpg" },
  { name: "Rihoas", type: "Brand Partnership", logo: "/images/brands/rihoas.jpg" },
  { name: "Cupshe", type: "Brand Partnership", logo: "/images/brands/cupshe.png" },
  { name: "MaH", type: "Brand Partnership", description: "Backpacks and bags collaboration." },
  { name: "Fur Institute of Canada", type: "Ambassador", logo: "/images/brands/fur-institute-of-canada.png" },
  { name: "Sunzel", type: "Brand Partnership", description: "Sport and yoga apparel collaboration." },
  { name: "Verano Hill", type: "Brand Partnership" },
  { name: "Magnewear", type: "Brand Partnership", description: "Sunglasses collaboration.", logo: "/images/brands/magnewear.png" },
  { name: "Lucky Bear & Co.", type: "Brand Partnership", logo: "/images/brands/lucky-bear-and-co.png" },
  { name: "Liwisi", type: "Brand Partnership", logo: "/images/brands/liwisi.png" },
];

function BrandTile({ collab }: { collab: PastCollaboration }) {
  return (
    <div className="flex items-center gap-3 px-2 py-2">
      {collab.logo && (
        <Image
          src={collab.logo}
          alt=""
          width={56}
          height={56}
          className="h-10 w-10 shrink-0 object-contain"
        />
      )}
      <span className="whitespace-nowrap text-lg italic text-text-light font-[family-name:var(--font-playfair)]">
        {collab.name}
      </span>
    </div>
  );
}

export default function CollaborationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-3">
              Work Together
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text font-[family-name:var(--font-playfair)]">
              Let&apos;s{" "}
              <span className="text-primary italic">Collaborate</span>
            </h1>
            <p className="mt-6 text-lg text-text-light leading-relaxed">
              Brand partnerships, editorial content, events, and press —
              built on two decades of fashion curation across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Collaboration Types */}
      <section className="section bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-2">
              Ways to Work Together
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-[family-name:var(--font-playfair)]">
              What we can{" "}
              <span className="text-primary italic">build together</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {collaborationTypes.map((type) => (
              <div key={type.title} className="card p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  {type.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-text font-[family-name:var(--font-playfair)]">
                  {type.title}
                </h3>
                <p className="mt-2 text-text-light leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Collaborations */}
      <section className="section gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-2">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-[family-name:var(--font-playfair)]">
              Selected{" "}
              <span className="text-primary italic">past collaborations</span>
            </h2>
          </div>

          {pastCollaborations.length > 0 ? (
            <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-6">
              {pastCollaborations.map((collab, i) => (
                <BrandTile key={i} collab={collab} />
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-text-light leading-relaxed">
                A full list of past brand partnerships, editorial features,
                and styling work is available in the media kit — shared with
                serious inquiries.
              </p>
              <div className="mt-8">
                <a
                  href="mailto:isachdev@stylewithishi.com?subject=Media%20kit%20request"
                  className="btn btn-primary"
                >
                  Request the Media Kit
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Press & Media Kit */}
      <section className="section bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-3">
                    For Press
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-text font-[family-name:var(--font-playfair)]">
                    Press & Media Kit
                  </h2>
                  <p className="mt-4 text-text-light leading-relaxed">
                    Includes high-resolution photography, professional bio,
                    brand guidelines, social media metrics, and a full list of
                    past collaborations and editorial features.
                  </p>
                  <ul className="mt-6 space-y-2 text-sm text-text-light">
                    {[
                      "High-resolution photography",
                      "Professional bio",
                      "Brand guidelines",
                      "Social media metrics",
                      "Full collaboration history",
                    ].map((item) => (
                      <li key={item} className="flex items-center">
                        <svg
                          className="w-4 h-4 text-accent mr-2 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="mailto:isachdev@stylewithishi.com?subject=Media%20kit%20request"
                    className="mt-6 btn btn-primary inline-flex"
                  >
                    Request the Media Kit
                  </a>
                </div>
                <div className="hidden md:block">
                  <div className="aspect-square bg-muted/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center text-muted">
                      <svg
                        className="w-16 h-16 mx-auto mb-2 text-muted/50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <p className="text-sm">Press Kit Preview</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="section gradient-accent text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)]">
              Interested in working together?
            </h2>
            <p className="mt-4 text-white/90 text-lg">
              Tell me about your project or partnership idea — let&apos;s
              create something.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?type=collaboration"
                className="btn bg-white text-primary hover:bg-background"
              >
                Send an Inquiry
              </Link>
              <a
                href="mailto:isachdev@stylewithishi.com"
                className="btn border-2 border-white text-white hover:bg-white/10"
              >
                Email Directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
