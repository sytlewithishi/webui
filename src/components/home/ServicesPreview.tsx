import Link from "next/link";

const services = [
  {
    id: "styling",
    title: "1-on-1 Styling Sessions",
    description:
      "Personalized consultations to discover your unique style identity and build a wardrobe that reflects who you are.",
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
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    id: "wardrobe",
    title: "Wardrobe Audit",
    description:
      "A comprehensive review of your closet to identify key pieces, fill gaps, and create versatile outfit combinations.",
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
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    id: "shopping",
    title: "Personal Shopping",
    description:
      "Let me be your style guide as we shop together for pieces that elevate your wardrobe and suit your lifestyle.",
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
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
  },
  {
    id: "courses",
    title: "Style Courses & Workshops",
    description:
      "Learn the fundamentals of fashion, color theory, and body types through group workshops and online courses.",
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
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
];

export default function ServicesPreview() {
  return (
    <section className="section bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-secondary font-medium tracking-wide uppercase text-sm mb-2">
            What I Offer
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text font-[family-name:var(--font-playfair)]">
            Services Tailored to Your{" "}
            <span className="text-primary">Style Journey</span>
          </h2>
          <p className="mt-4 text-text-light">
            From quick style refreshes to complete wardrobe transformations,
            find the perfect service for your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className="group"
            >
              <div className="card p-6 h-full flex flex-col">
                {/* Icon */}
                <div className="w-14 h-14 bg-background rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="mt-5 text-xl font-semibold text-text font-[family-name:var(--font-playfair)]">
                  {service.title}
                </h3>
                <p className="mt-3 text-text-light text-sm flex-grow">
                  {service.description}
                </p>

                {/* Link */}
                <div className="mt-4 flex items-center text-primary font-medium text-sm group-hover:text-primary-dark transition-colors">
                  Learn More
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/services" className="btn btn-primary">
            View All Services & Packages
          </Link>
        </div>
      </div>
    </section>
  );
}
