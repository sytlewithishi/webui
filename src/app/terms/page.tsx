import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of StyleWithIshi.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <section className="section bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-3">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-text font-[family-name:var(--font-playfair)]">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-muted">
            Draft. Last updated: pending review.
          </p>

          <div className="mt-10 space-y-8 text-text-light leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-text font-[family-name:var(--font-playfair)] mb-3">
                Use of the site
              </h2>
              <p>
                By using stylewithishi.com you agree to use it lawfully and
                respectfully. The content, brand assets, photography, and copy
                are owned by StyleWithIshi unless otherwise noted, and may not
                be reproduced without permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text font-[family-name:var(--font-playfair)] mb-3">
                Services and bookings
              </h2>
              <p>
                Consultation packages are subject to a separate booking
                agreement provided at the time of payment, including
                cancellation and refund terms. The Collection (when launched)
                is governed by drop-specific terms shared with each drop.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text font-[family-name:var(--font-playfair)] mb-3">
                Affiliate disclosure
              </h2>
              <p>
                As an Amazon Associate, StyleWithIshi earns from qualifying
                purchases. Some outbound links on the site are affiliate links;
                this is always disclosed near the link.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text font-[family-name:var(--font-playfair)] mb-3">
                Limitations
              </h2>
              <p>
                Style advice is offered in good faith based on Ishi&apos;s
                experience and judgment. The site and its services are
                provided as-is, without warranties. StyleWithIshi is not liable
                for outcomes resulting from style decisions made on the basis
                of advice provided.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text font-[family-name:var(--font-playfair)] mb-3">
                Contact
              </h2>
              <p>
                Questions about these terms? Email{" "}
                <a
                  href="mailto:isachdev@stylewithishi.com"
                  className="text-primary hover:underline"
                >
                  isachdev@stylewithishi.com
                </a>
                .
              </p>
            </section>

            <section className="text-sm text-muted border-t border-border pt-6">
              This is a placeholder draft and should be reviewed by a lawyer
              before launch.
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
