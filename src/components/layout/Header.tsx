"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navigation = [
  { name: "Edits", href: "/edits" },
  { name: "Collection", href: "/shop" },
  { name: "Atelier", href: "/atelier" },
  { name: "Services", href: "/services" },
  { name: "Collaborations", href: "/collaborations" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 md:h-32">
          {/* Logo lockup */}
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="StyleWithIshi — Home"
          >
            <Image
              src="/images/logo-square.png"
              alt=""
              width={240}
              height={240}
              priority
              className="h-20 md:h-28 w-auto"
            />
            <span className="text-3xl md:text-4xl font-bold text-primary font-[family-name:var(--font-playfair)] leading-none">
              StyleWithIshi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-text-light hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/book"
              className="btn btn-primary text-sm"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-text hover:text-primary hover:bg-background-alt transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-text-light hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/book"
                className="btn btn-primary w-full text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
