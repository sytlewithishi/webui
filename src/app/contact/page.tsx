"use client";

import { useState } from "react";
import Link from "next/link";

const inquiryTypes = [
  { value: "general", label: "General Inquiry" },
  { value: "styling", label: "Styling Services" },
  { value: "collaboration", label: "Brand Collaboration" },
  { value: "press", label: "Press & Media" },
  { value: "other", label: "Other" },
];

const contactInfo = [
  {
    title: "Email",
    value: "isachdev@stylewithishi.com",
    href: "mailto:isachdev@stylewithishi.com",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Instagram",
    value: "@stylewithishi",
    href: "https://instagram.com/stylewithishi",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12.017 0C8.731 0 8.332.014 7.052.072 5.775.131 4.902.333 4.14.63a5.882 5.882 0 00-2.126 1.384A5.882 5.882 0 00.63 4.14C.333 4.902.131 5.775.072 7.052.014 8.332 0 8.731 0 12.017s.014 3.685.072 4.965c.059 1.277.261 2.15.558 2.912a5.882 5.882 0 001.384 2.126 5.882 5.882 0 002.126 1.384c.762.297 1.635.499 2.912.558 1.28.058 1.679.072 4.965.072s3.685-.014 4.965-.072c1.277-.059 2.15-.261 2.912-.558a5.882 5.882 0 002.126-1.384 5.882 5.882 0 001.384-2.126c.297-.762.499-1.635.558-2.912.058-1.28.072-1.679.072-4.965s-.014-3.685-.072-4.965c-.059-1.277-.261-2.15-.558-2.912a5.882 5.882 0 00-1.384-2.126A5.882 5.882 0 0019.86.63C19.098.333 18.225.131 16.948.072 15.668.014 15.269 0 11.983 0h.034zm-.867 2.166c.324 0 .663 0 1.026.001 3.232 0 3.614.011 4.89.07 1.18.054 1.82.25 2.246.415.564.22.967.482 1.39.905.423.423.685.826.905 1.39.165.426.361 1.066.415 2.246.059 1.276.07 1.658.07 4.89s-.011 3.614-.07 4.89c-.054 1.18-.25 1.82-.415 2.246a3.74 3.74 0 01-.905 1.39 3.74 3.74 0 01-1.39.905c-.426.165-1.066.361-2.246.415-1.276.059-1.658.07-4.89.07s-3.614-.011-4.89-.07c-1.18-.054-1.82-.25-2.246-.415a3.74 3.74 0 01-1.39-.905 3.74 3.74 0 01-.905-1.39c-.165-.426-.361-1.066-.415-2.246-.059-1.276-.07-1.658-.07-4.89s.011-3.614.07-4.89c.054-1.18.25-1.82.415-2.246.22-.564.482-.967.905-1.39a3.74 3.74 0 011.39-.905c.426-.165 1.066-.361 2.246-.415 1.117-.051 1.55-.066 3.807-.068v.003zm7.551 1.995a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88zm-6.702 1.683a6.173 6.173 0 100 12.346 6.173 6.173 0 000-12.346zM12 8.007a4.01 4.01 0 110 8.02 4.01 4.01 0 010-8.02z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "Response Time",
    value: "Within 24-48 hours",
    href: null,
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(data.error || "Could not send. Please try again.");
      }

      setIsSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Could not send. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="section gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-secondary font-medium tracking-wide uppercase text-sm mb-2">
              Get in Touch
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text font-[family-name:var(--font-playfair)]">
              Let&apos;s Start a{" "}
              <span className="text-primary">Conversation</span>
            </h1>
            <p className="mt-6 text-lg text-text-light">
              Have questions about my services? Want to collaborate? Or just
              want to say hi? I&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-text font-[family-name:var(--font-playfair)]">
                Contact Info
              </h2>
              <p className="mt-4 text-text-light">
                Reach out through any of these channels and I&apos;ll get back
                to you as soon as possible.
              </p>

              <div className="mt-8 space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      {info.icon}
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-muted">{info.title}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={
                            info.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            info.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="font-medium text-text hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium text-text">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted mb-4">Follow for daily tips</p>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/stylewithishi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-background rounded-lg flex items-center justify-center text-text-light hover:text-primary hover:bg-primary/10 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.017 0C8.731 0 8.332.014 7.052.072 5.775.131 4.902.333 4.14.63a5.882 5.882 0 00-2.126 1.384A5.882 5.882 0 00.63 4.14C.333 4.902.131 5.775.072 7.052.014 8.332 0 8.731 0 12.017s.014 3.685.072 4.965c.059 1.277.261 2.15.558 2.912a5.882 5.882 0 001.384 2.126 5.882 5.882 0 002.126 1.384c.762.297 1.635.499 2.912.558 1.28.058 1.679.072 4.965.072s3.685-.014 4.965-.072c1.277-.059 2.15-.261 2.912-.558a5.882 5.882 0 002.126-1.384 5.882 5.882 0 001.384-2.126c.297-.762.499-1.635.558-2.912.058-1.28.072-1.679.072-4.965s-.014-3.685-.072-4.965c-.059-1.277-.261-2.15-.558-2.912a5.882 5.882 0 00-1.384-2.126A5.882 5.882 0 0019.86.63C19.098.333 18.225.131 16.948.072 15.668.014 15.269 0 11.983 0h.034zm-.867 2.166c.324 0 .663 0 1.026.001 3.232 0 3.614.011 4.89.07 1.18.054 1.82.25 2.246.415.564.22.967.482 1.39.905.423.423.685.826.905 1.39.165.426.361 1.066.415 2.246.059 1.276.07 1.658.07 4.89s-.011 3.614-.07 4.89c-.054 1.18-.25 1.82-.415 2.246a3.74 3.74 0 01-.905 1.39 3.74 3.74 0 01-1.39.905c-.426.165-1.066.361-2.246.415-1.276.059-1.658.07-4.89.07s-3.614-.011-4.89-.07c-1.18-.054-1.82-.25-2.246-.415a3.74 3.74 0 01-1.39-.905 3.74 3.74 0 01-.905-1.39c-.165-.426-.361-1.066-.415-2.246-.059-1.276-.07-1.658-.07-4.89s.011-3.614.07-4.89c.054-1.18.25-1.82.415-2.246.22-.564.482-.967.905-1.39a3.74 3.74 0 011.39-.905c.426-.165 1.066-.361 2.246-.415 1.117-.051 1.55-.066 3.807-.068v.003zm7.551 1.995a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88zm-6.702 1.683a6.173 6.173 0 100 12.346 6.173 6.173 0 000-12.346zM12 8.007a4.01 4.01 0 110 8.02 4.01 4.01 0 010-8.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com/@stylewithishi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-background rounded-lg flex items-center justify-center text-text-light hover:text-primary hover:bg-primary/10 transition-colors"
                    aria-label="YouTube"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://tiktok.com/@stylewithishi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-background rounded-lg flex items-center justify-center text-text-light hover:text-primary hover:bg-primary/10 transition-colors"
                    aria-label="TikTok"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-accent"
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
                    </div>
                    <h3 className="text-2xl font-bold text-text font-[family-name:var(--font-playfair)]">
                      Message Sent!
                    </h3>
                    <p className="mt-2 text-text-light">
                      Thank you for reaching out. I&apos;ll get back to you
                      within 24-48 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          inquiryType: "",
                          message: "",
                        });
                      }}
                      className="mt-6 btn btn-secondary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-text mb-2"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-text mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="inquiryType"
                        className="block text-sm font-medium text-text mb-2"
                      >
                        What is this about?
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      >
                        <option value="">Select an option</option>
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-text mb-2"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                        placeholder="Tell me more about what you're looking for..."
                      />
                    </div>

                    {submitError && (
                      <p className="text-error text-sm" role="alert">
                        {submitError}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text font-[family-name:var(--font-playfair)]">
              Ready to Get <span className="text-primary">Started</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link href="/book" className="group">
              <div className="card p-6 text-center hover:border-primary transition-colors">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-text font-[family-name:var(--font-playfair)]">
                  Book a Consultation
                </h3>
                <p className="mt-2 text-text-light text-sm">
                  Ready to transform your style? Book your session now.
                </p>
              </div>
            </Link>

            <Link href="/services" className="group">
              <div className="card p-6 text-center hover:border-primary transition-colors">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-text font-[family-name:var(--font-playfair)]">
                  View Services
                </h3>
                <p className="mt-2 text-text-light text-sm">
                  Explore our packages and find the perfect fit.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
