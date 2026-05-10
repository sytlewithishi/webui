import Link from "next/link";
import EmailSignupForm from "@/components/forms/EmailSignupForm";

const footerLinks = {
  services: [
    { name: "1-on-1 Styling", href: "/services#styling" },
    { name: "Wardrobe Audit", href: "/services#wardrobe" },
    { name: "Personal Shopping", href: "/services#shopping" },
    { name: "Style Courses", href: "/services#courses" },
  ],
  company: [
    { name: "Edits", href: "/edits" },
    { name: "Collection", href: "/shop" },
    { name: "Atelier", href: "/atelier" },
    { name: "About Ishi", href: "/about" },
    { name: "Collaborations", href: "/collaborations" },
    { name: "Daily Picks (Amazon)", href: "https://www.amazon.ca/shop/stylewithishi", external: true },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  {
    name: "Amazon",
    href: "https://www.amazon.ca/shop/stylewithishi",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.88 17.88 0 01-5.43-3.395c-.135-.14-.15-.265-.045-.383l-.06.086zm6.137-6.47c0-1.074.27-1.96.81-2.656.54-.695 1.27-1.168 2.19-1.42-.11-.08-.22-.14-.33-.19-.11-.05-.235-.09-.375-.12a3.19 3.19 0 00-.705-.075c-.57 0-1.075.125-1.515.375s-.795.56-1.065.93l-.195.28-.24-.17c-.09-.06-.13-.13-.13-.22v-.32c0-.13.06-.26.18-.39.54-.57 1.205-1 1.995-1.29a6.53 6.53 0 012.37-.435 5.2 5.2 0 011.65.255c.51.17.96.415 1.35.735.39.32.705.715.945 1.185.24.47.36 1.015.36 1.635v5.97c0 .12-.045.22-.135.3l-.21.15c-.27.17-.54.31-.81.42-.27.11-.57.2-.9.27-.33.07-.69.105-1.08.105-.63 0-1.185-.1-1.665-.3a3.1 3.1 0 01-1.155-.855 3.55 3.55 0 01-.66-1.305 5.842 5.842 0 01-.21-1.605zm2.49 1.725c.42 0 .81-.055 1.17-.165.36-.11.675-.26.945-.45v-2.685c-.48-.06-.93-.09-1.35-.09-.69 0-1.245.15-1.665.45-.42.3-.63.755-.63 1.365 0 .54.135.96.405 1.26.27.3.645.45 1.125.45v-.135zm8.94 5.685c-.375-.255-.465-.6-.27-.96l.03-.06c.105-.21.285-.3.54-.27.12.015.33.09.63.225l.75.36c.51.24 1.05.42 1.62.54.57.12 1.14.18 1.71.18.855 0 1.545-.12 2.07-.36.525-.24.81-.57.855-.99.03-.3-.06-.54-.27-.72-.21-.18-.555-.33-1.035-.45l-2.04-.51c-1.02-.27-1.755-.66-2.205-1.17-.45-.51-.63-1.14-.54-1.89.075-.6.3-1.11.675-1.53.375-.42.855-.735 1.44-.945a6.08 6.08 0 011.905-.33c.6 0 1.17.06 1.71.18.54.12 1.02.285 1.44.495l.39.195c.18.09.285.225.315.405l-.09.585c-.03.21-.15.345-.36.405-.09.03-.285-.015-.585-.135l-.63-.27a5.73 5.73 0 00-1.095-.36 4.82 4.82 0 00-1.11-.135c-.705 0-1.26.1-1.665.3-.405.2-.63.49-.675.87-.03.27.06.495.27.675.21.18.57.33 1.08.45l1.995.51c1.02.255 1.755.63 2.205 1.125.45.495.63 1.11.54 1.845-.09.735-.39 1.335-.9 1.8-.51.465-1.155.795-1.935.99-.78.195-1.605.285-2.475.27-.645-.015-1.275-.09-1.89-.225a9.96 9.96 0 01-1.755-.54 9.02 9.02 0 01-.57-.27z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/stylewithishi",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
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
    href: "https://youtube.com/@stylewithishi",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
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
    href: "https://tiktok.com/@stylewithishi",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-text text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-gold font-[family-name:var(--font-playfair)]">
                StyleWithIshi
              </span>
            </Link>
            <p className="mt-4 text-background/80 text-sm leading-relaxed">
              Globally curated fashion from independent designers, by Ishi.
              Two decades of style direction, now with a private collection.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/60 hover:text-gold transition-colors duration-200"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold text-gold uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-background/70 hover:text-gold transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-gold uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-background/70 hover:text-gold transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-sm font-semibold text-gold uppercase tracking-wider">
              Stay Stylish
            </h3>
            <p className="mt-4 text-background/70 text-sm">
              First word on the next drop. Field notes from the road.
            </p>
            <div className="mt-4">
              <EmailSignupForm
                source="footer"
                variant="dark"
                buttonLabel="Subscribe"
                placeholder="Enter your email"
                successMessage="On the list. Watch your inbox."
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              &copy; {new Date().getFullYear()} StyleWithIshi. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              {footerLinks.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-background/60 hover:text-gold transition-colors duration-200 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
