import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How StyleWithIshi handles your information.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <section className="section bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-3">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-text font-[family-name:var(--font-playfair)]">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted">
            Draft. Last updated: pending review.
          </p>

          <div className="mt-10 space-y-8 text-text-light leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-text font-[family-name:var(--font-playfair)] mb-3">
                What we collect
              </h2>
              <p>
                When you join a waitlist, subscribe to the newsletter, contact
                us, or book a consultation, you provide your name, email
                address, and any details you choose to share. We also collect
                basic usage analytics (page views, referral source, device
                type) to understand how the site is used.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text font-[family-name:var(--font-playfair)] mb-3">
                How we use it
              </h2>
              <p>
                We use your information to respond to inquiries, deliver the
                services you request, send you updates if you&apos;ve opted in,
                and improve the site. We don&apos;t sell your data. We share it
                only with the providers we use to operate the site (email,
                analytics, payment processing), under their respective privacy
                policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text font-[family-name:var(--font-playfair)] mb-3">
                Your choices
              </h2>
              <p>
                You can unsubscribe from emails any time using the link in the
                footer of every email. You can request a copy or deletion of
                your personal information by emailing{" "}
                <a
                  href="mailto:hello@stylewithishi.com"
                  className="text-primary hover:underline"
                >
                  hello@stylewithishi.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text font-[family-name:var(--font-playfair)] mb-3">
                Contact
              </h2>
              <p>
                Questions about this policy? Email{" "}
                <a
                  href="mailto:hello@stylewithishi.com"
                  className="text-primary hover:underline"
                >
                  hello@stylewithishi.com
                </a>
                .
              </p>
            </section>

            <section className="text-sm text-muted border-t border-border pt-6">
              This is a placeholder draft and should be reviewed by a lawyer
              before launch, especially if collecting EU/UK/CA personal data.
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
