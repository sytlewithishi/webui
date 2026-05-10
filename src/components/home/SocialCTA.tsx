import Link from "next/link";

const socialPlatforms = [
  {
    name: "Instagram",
    handle: "@stylewithishi",
    href: "https://instagram.com/stylewithishi",
    description: "Behind the curation. On the road.",
    color: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12.017 0C8.731 0 8.332.014 7.052.072 5.775.131 4.902.333 4.14.63a5.882 5.882 0 00-2.126 1.384A5.882 5.882 0 00.63 4.14C.333 4.902.131 5.775.072 7.052.014 8.332 0 8.731 0 12.017s.014 3.685.072 4.965c.059 1.277.261 2.15.558 2.912a5.882 5.882 0 001.384 2.126 5.882 5.882 0 002.126 1.384c.762.297 1.635.499 2.912.558 1.28.058 1.679.072 4.965.072s3.685-.014 4.965-.072c1.277-.059 2.15-.261 2.912-.558a5.882 5.882 0 002.126-1.384 5.882 5.882 0 001.384-2.126c.297-.762.499-1.635.558-2.912.058-1.28.072-1.679.072-4.965s-.014-3.685-.072-4.965c-.059-1.277-.261-2.15-.558-2.912a5.882 5.882 0 00-1.384-2.126A5.882 5.882 0 0019.86.63C19.098.333 18.225.131 16.948.072 15.668.014 15.269 0 11.983 0h.034zm-.867 2.166c.324 0 .663 0 1.026.001 3.232 0 3.614.011 4.89.07 1.18.054 1.82.25 2.246.415.564.22.967.482 1.39.905.423.423.685.826.905 1.39.165.426.361 1.066.415 2.246.059 1.276.07 1.658.07 4.89s-.011 3.614-.07 4.89c-.054 1.18-.25 1.82-.415 2.246a3.74 3.74 0 01-.905 1.39 3.74 3.74 0 01-1.39.905c-.426.165-1.066.361-2.246.415-1.276.059-1.658.07-4.89.07s-3.614-.011-4.89-.07c-1.18-.054-1.82-.25-2.246-.415a3.74 3.74 0 01-1.39-.905 3.74 3.74 0 01-.905-1.39c-.165-.426-.361-1.066-.415-2.246-.059-1.276-.07-1.658-.07-4.89s.011-3.614.07-4.89c.054-1.18.25-1.82.415-2.246.22-.564.482-.967.905-1.39a3.74 3.74 0 011.39-.905c.426-.165 1.066-.361 2.246-.415 1.117-.051 1.55-.066 3.807-.068v.003zm7.551 1.995a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88zm-6.702 1.683a6.173 6.173 0 100 12.346 6.173 6.173 0 000-12.346zM12 8.007a4.01 4.01 0 110 8.02 4.01 4.01 0 010-8.02z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "YouTube",
    handle: "@stylewithishi",
    href: "https://youtube.com/@stylewithishi",
    description: "Long-form looks. Styling stories.",
    color: "bg-red-600",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "TikTok",
    handle: "@stylewithishi",
    href: "https://tiktok.com/@stylewithishi",
    description: "Found pieces, fast styled.",
    color: "bg-black",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
];

export default function SocialCTA() {
  return (
    <section className="section gradient-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-secondary font-medium tracking-wide uppercase text-sm mb-2">
            Stay Connected
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text font-[family-name:var(--font-playfair)]">
            Follow the <span className="text-primary">Style Journey</span>
          </h2>
          <p className="mt-4 text-text-light">
            Join our community for daily inspiration, styling tips, and
            exclusive content.
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {socialPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="card p-6 text-center hover:scale-105 transition-transform duration-300">
                {/* Icon */}
                <div
                  className={`w-16 h-16 ${platform.color} rounded-2xl flex items-center justify-center text-white mx-auto`}
                >
                  {platform.icon}
                </div>

                {/* Content */}
                <h3 className="mt-4 text-lg font-semibold text-text">
                  {platform.name}
                </h3>
                <p className="text-primary font-medium text-sm">
                  {platform.handle}
                </p>
                <p className="mt-2 text-muted text-sm">
                  {platform.description}
                </p>

                {/* Follow Button */}
                <div className="mt-4">
                  <span className="inline-flex items-center text-primary font-medium text-sm group-hover:text-primary-dark transition-colors">
                    Follow
                    <svg
                      className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-surface rounded-2xl shadow-lg">
            <div className="text-left">
              <p className="font-semibold text-text font-[family-name:var(--font-playfair)]">
                Ready to transform your style?
              </p>
              <p className="text-sm text-muted">
                Book a consultation and start your journey today.
              </p>
            </div>
            <Link href="/book" className="btn btn-gold whitespace-nowrap">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
