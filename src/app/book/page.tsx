"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const packages = [
  {
    id: "essentials",
    name: "Essentials",
    price: 199,
    description: "60-minute consultation + style guide",
  },
  {
    id: "signature",
    name: "Signature",
    price: 499,
    description: "Complete wardrobe transformation package",
  },
  {
    id: "vip",
    name: "VIP Experience",
    price: 999,
    description: "Full personal styling with ongoing support",
  },
];

const services = [
  {
    id: "styling",
    name: "1-on-1 Styling Session",
    price: 150,
    description: "60-minute personalized consultation",
  },
  {
    id: "wardrobe",
    name: "Wardrobe Audit",
    price: 250,
    description: "Comprehensive closet review",
  },
  {
    id: "shopping",
    name: "Personal Shopping",
    price: 350,
    description: "Guided shopping experience",
  },
  {
    id: "courses",
    name: "Style Course",
    price: 99,
    description: "Self-paced online course",
  },
];

function BookingContent() {
  const searchParams = useSearchParams();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [itemType, setItemType] = useState<"package" | "service">("package");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    format: "virtual",
    notes: "",
  });
  const [step, setStep] = useState(1);

  useEffect(() => {
    const packageParam = searchParams.get("package");
    const serviceParam = searchParams.get("service");

    if (packageParam) {
      setSelectedItem(packageParam);
      setItemType("package");
    } else if (serviceParam) {
      setSelectedItem(serviceParam);
      setItemType("service");
    }
  }, [searchParams]);

  const allItems =
    itemType === "package"
      ? packages
      : services;

  const selectedItemData = allItems.find((item) => item.id === selectedItem);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would integrate with Stripe
    setStep(3);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="section gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-secondary font-medium tracking-wide uppercase text-sm mb-2">
              Book Your Session
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text font-[family-name:var(--font-playfair)]">
              Start Your Style{" "}
              <span className="text-primary">Transformation</span>
            </h1>
            <p className="mt-6 text-lg text-text-light">
              Select your service, choose a time, and let&apos;s begin your
              journey to confident style.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Flow */}
      <section className="section bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                      step >= s
                        ? "bg-primary text-white"
                        : "bg-border text-muted"
                    }`}
                  >
                    {step > s ? (
                      <svg
                        className="w-5 h-5"
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
                    ) : (
                      s
                    )}
                  </div>
                  {s < 3 && (
                    <div
                      className={`w-20 h-1 ${
                        step > s ? "bg-primary" : "bg-border"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm text-muted max-w-sm mx-auto">
              <span>Select</span>
              <span>Details</span>
              <span>Confirm</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Step 1: Select Service */}
            {step === 1 && (
              <div>
                {/* Toggle Package/Service */}
                <div className="flex justify-center mb-8">
                  <div className="inline-flex bg-background rounded-lg p-1">
                    <button
                      onClick={() => {
                        setItemType("package");
                        setSelectedItem(null);
                      }}
                      className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                        itemType === "package"
                          ? "bg-primary text-white"
                          : "text-text-light hover:text-text"
                      }`}
                    >
                      Packages
                    </button>
                    <button
                      onClick={() => {
                        setItemType("service");
                        setSelectedItem(null);
                      }}
                      className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                        itemType === "service"
                          ? "bg-primary text-white"
                          : "text-text-light hover:text-text"
                      }`}
                    >
                      Individual Services
                    </button>
                  </div>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(itemType === "package" ? packages : services).map(
                    (item) => (
                      <button
                        key={item.id}
                        onClick={() => setSelectedItem(item.id)}
                        className={`card p-6 text-left transition-all ${
                          selectedItem === item.id
                            ? "ring-2 ring-primary"
                            : "hover:border-primary"
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold text-text font-[family-name:var(--font-playfair)]">
                            {item.name}
                          </h3>
                          {selectedItem === item.id && (
                            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                              <svg
                                className="w-4 h-4 text-white"
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
                          )}
                        </div>
                        <p className="mt-2 text-2xl font-bold text-primary font-[family-name:var(--font-playfair)]">
                          ${item.price}
                        </p>
                        <p className="mt-2 text-text-light text-sm">
                          {item.description}
                        </p>
                      </button>
                    )
                  )}
                </div>

                <div className="mt-8 flex justify-between items-center">
                  <Link href="/services" className="text-primary text-sm">
                    ← View service details
                  </Link>
                  <button
                    onClick={() => setStep(2)}
                    disabled={!selectedItem}
                    className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Details */}
            {step === 2 && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Form */}
                <div className="lg:col-span-2">
                  <div className="card p-8">
                    <h2 className="text-xl font-bold text-text font-[family-name:var(--font-playfair)] mb-6">
                      Your Details
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-text mb-2"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-text mb-2"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-text mb-2"
                          >
                            Phone (Optional)
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="preferredDate"
                            className="block text-sm font-medium text-text mb-2"
                          >
                            Preferred Date
                          </label>
                          <input
                            type="date"
                            id="preferredDate"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text mb-2">
                          Session Format
                        </label>
                        <div className="flex gap-4">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="format"
                              value="virtual"
                              checked={formData.format === "virtual"}
                              onChange={handleChange}
                              className="mr-2"
                            />
                            Virtual
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="format"
                              value="in-person"
                              checked={formData.format === "in-person"}
                              onChange={handleChange}
                              className="mr-2"
                            />
                            In-Person
                          </label>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="notes"
                          className="block text-sm font-medium text-text mb-2"
                        >
                          Additional Notes
                        </label>
                        <textarea
                          id="notes"
                          name="notes"
                          value={formData.notes}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                          placeholder="Tell me about your style goals..."
                        />
                      </div>

                      <div className="flex justify-between pt-4">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="btn btn-secondary"
                        >
                          Back
                        </button>
                        <button type="submit" className="btn btn-primary">
                          Proceed to Payment
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="card p-6 sticky top-24">
                    <h3 className="font-semibold text-text mb-4">
                      Order Summary
                    </h3>
                    {selectedItemData && (
                      <>
                        <div className="py-4 border-b border-border">
                          <p className="font-medium text-text">
                            {selectedItemData.name}
                          </p>
                          <p className="text-sm text-muted mt-1">
                            {selectedItemData.description}
                          </p>
                        </div>
                        <div className="py-4">
                          <div className="flex justify-between">
                            <span className="text-muted">Subtotal</span>
                            <span className="text-text">
                              ${selectedItemData.price}
                            </span>
                          </div>
                        </div>
                        <div className="pt-4 border-t border-border">
                          <div className="flex justify-between text-lg font-semibold">
                            <span className="text-text">Total</span>
                            <span className="text-primary">
                              ${selectedItemData.price}
                            </span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-accent"
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
                <h2 className="text-3xl font-bold text-text font-[family-name:var(--font-playfair)]">
                  Booking Received!
                </h2>
                <p className="mt-4 text-text-light max-w-md mx-auto">
                  Thank you for booking with StyleWithIshi! You&apos;ll receive
                  a confirmation email shortly with next steps and payment
                  instructions.
                </p>
                <div className="mt-8 card p-6 max-w-md mx-auto text-left">
                  <h3 className="font-semibold text-text mb-4">
                    What&apos;s Next?
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xs mr-3 flex-shrink-0">
                        1
                      </span>
                      <span className="text-text-light">
                        Check your email for payment link
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xs mr-3 flex-shrink-0">
                        2
                      </span>
                      <span className="text-text-light">
                        Complete payment to confirm your booking
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xs mr-3 flex-shrink-0">
                        3
                      </span>
                      <span className="text-text-light">
                        Receive style questionnaire to prepare for your session
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <Link href="/" className="btn btn-primary">
                    Return Home
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default function BookPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      }
    >
      <BookingContent />
    </Suspense>
  );
}
