import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collaborations | StyleWithIshi",
  description:
    "Explore brand partnerships, press features, and collaboration opportunities with StyleWithIshi.",
};

const collaborationTypes = [
  {
    title: "Brand Partnerships",
    description:
      "Partner with StyleWithIshi for authentic fashion content, product styling, and brand ambassador opportunities.",
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
    title: "Content Creation",
    description:
      "From Instagram Reels to YouTube videos, create engaging fashion content that resonates with your target audience.",
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
      "Host styling workshops, attend fashion events, or bring unique styling experiences to your customers.",
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
      "Available for interviews, expert commentary, and media appearances on fashion and style topics.",
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

export default function CollaborationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-secondary font-medium tracking-wide uppercase text-sm mb-2">
              Work Together
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text font-[family-name:var(--font-playfair)]">
              Let&apos;s <span className="text-primary">Collaborate</span>
            </h1>
            <p className="mt-6 text-lg text-text-light">
              Partner with StyleWithIshi to create authentic fashion content,
              host events, or bring expert styling to your brand.
            </p>
          </div>
        </div>
      </section>

      {/* Collaboration Types */}
      <section className="section bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text font-[family-name:var(--font-playfair)]">
              Ways to <span className="text-primary">Work Together</span>
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
                <p className="mt-2 text-text-light">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="section gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-3">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-[family-name:var(--font-playfair)]">
              Selected work,{" "}
              <span className="text-primary italic">on request</span>
            </h2>
            <p className="mt-6 text-text-light leading-relaxed">
              Past brand partnerships, editorial features, and styling work
              are shared discreetly with serious inquiries — same way the
              Collection is curated. Email for a media kit with case studies,
              audience metrics, and rate card.
            </p>
            <div className="mt-8">
              <a
                href="mailto:collaborations@stylewithishi.com?subject=Media%20kit%20request"
                className="btn btn-primary"
              >
                Request the Media Kit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Press Kit Section */}
      <section className="section bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text font-[family-name:var(--font-playfair)]">
                    Press & Media Kit
                  </h2>
                  <p className="mt-4 text-text-light">
                    Download our press kit for high-resolution images, bio, and
                    brand information.
                  </p>
                  <ul className="mt-6 space-y-2 text-sm text-text-light">
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 text-accent mr-2"
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
                      High-resolution photos
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 text-accent mr-2"
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
                      Professional bio
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 text-accent mr-2"
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
                      Brand guidelines
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 text-accent mr-2"
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
                      Social media stats
                    </li>
                  </ul>
                  <a
                    href="mailto:collaborations@stylewithishi.com?subject=Media%20kit%20request"
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

      {/* Inquiry Form CTA */}
      <section className="section gradient-accent text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)]">
              Interested in Working Together?
            </h2>
            <p className="mt-4 text-white/90 text-lg">
              I&apos;d love to hear about your project or partnership ideas.
              Let&apos;s create something amazing together.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?type=collaboration"
                className="btn bg-white text-primary hover:bg-background"
              >
                Send an Inquiry
              </Link>
              <a
                href="mailto:collaborations@stylewithishi.com"
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
