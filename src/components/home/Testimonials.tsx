"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Marketing Executive",
    content:
      "Working with Ishi completely transformed how I approach getting dressed each morning. She helped me build a capsule wardrobe that actually works for my lifestyle. I feel more confident than ever!",
    rating: 5,
  },
  {
    id: 2,
    name: "Jennifer L.",
    role: "Entrepreneur",
    content:
      "The wardrobe audit was eye-opening! Ishi helped me see pieces in my closet that I'd forgotten about and showed me how to style them in new ways. Worth every penny.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amanda K.",
    role: "Healthcare Professional",
    content:
      "I was skeptical about hiring a stylist, but Ishi made the experience so comfortable and fun. She really listened to what I wanted and delivered beyond my expectations.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michelle R.",
    role: "Teacher",
    content:
      "The personal shopping experience was incredible. Ishi knew exactly what would flatter my body type and fit my budget. I've never felt better about my style!",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="section bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-secondary font-medium tracking-wide uppercase text-sm mb-2">
            Client Love
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text font-[family-name:var(--font-playfair)]">
            What My <span className="text-primary">Clients</span> Say
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-4 left-0 text-gold/20">
              <svg
                className="w-24 h-24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Testimonial Content */}
            <div className="card p-8 md:p-12 relative z-10">
              <div className="text-center">
                {/* Rating Stars */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-text-light italic leading-relaxed">
                  &quot;{testimonials[activeIndex].content}&quot;
                </blockquote>

                {/* Author */}
                <div className="mt-8">
                  <p className="font-semibold text-text font-[family-name:var(--font-playfair)] text-lg">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-muted text-sm">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-background hover:bg-primary hover:text-white transition-colors duration-200"
                aria-label="Previous testimonial"
              >
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                      index === activeIndex ? "bg-primary" : "bg-border"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-background hover:bg-primary hover:text-white transition-colors duration-200"
                aria-label="Next testimonial"
              >
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
