export function PersonJsonLd() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ishi",
    alternateName: "StyleWithIshi",
    url: "https://stylewithishi.com",
    image: "https://stylewithishi.com/images/ishi-profile.jpg",
    jobTitle: "Fashion Curator & Personal Stylist",
    description:
      "Curator of independent designer fashion and personal stylist with two decades of experience sourcing one-of-a-kind pieces from around the world.",
    sameAs: [
      "https://instagram.com/stylewithishi",
      "https://youtube.com/@stylewithishi",
      "https://tiktok.com/@stylewithishi",
    ],
    knowsAbout: [
      "Independent Designer Curation",
      "Global Fashion Sourcing",
      "Personal Styling",
      "Wardrobe Consulting",
      "Capsule Wardrobes",
      "One-of-a-kind Pieces",
      "Color Analysis",
      "Style Direction",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://stylewithishi.com",
    name: "StyleWithIshi",
    alternateName: "Style With Ishi",
    description:
      "A globally-curated collection of independent designer pieces and one-on-one styling, by Ishi. Two decades of curation, one-of-a-kind pieces, personal styling included.",
    url: "https://stylewithishi.com",
    logo: "https://stylewithishi.com/images/logo.png",
    image: "https://stylewithishi.com/images/og-image.jpg",
    email: "isachdev@stylewithishi.com",
    priceRange: "$$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      "https://instagram.com/stylewithishi",
      "https://youtube.com/@stylewithishi",
      "https://tiktok.com/@stylewithishi",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Curation & Styling",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "The Collection",
            description:
              "Drop-based access to globally-curated pieces from independent designers",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "1-on-1 Styling",
            description:
              "Personalized consultation with access to the curated collection",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wardrobe Audit",
            description:
              "Comprehensive review of your existing wardrobe with curator's eye",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Personal Shopping",
            description:
              "Guided sourcing through Ishi's curated network of designers",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  );
}

export function WebsiteJsonLd() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "StyleWithIshi",
    alternateName: "Style With Ishi",
    url: "https://stylewithishi.com",
    description:
      "Globally-curated fashion from independent designers, by Ishi. Style consultation included.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://stylewithishi.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
}

export function FAQJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  price,
  image,
}: {
  name: string;
  description: string;
  price: string;
  image?: string;
}) {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Fashion Curation & Personal Styling",
    name,
    description,
    provider: {
      "@type": "Person",
      name: "Ishi",
      url: "https://stylewithishi.com",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: name,
      itemListElement: [
        {
          "@type": "Offer",
          price,
          priceCurrency: "USD",
        },
      ],
    },
    image: image || "https://stylewithishi.com/images/og-image.jpg",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
    />
  );
}
