import { faqs } from "@/data/faqs";

const SITE_URL = "https://fujityres.com.ng";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function StructuredData() {
  const localBusinessBase = {
    "@context": "https://schema.org",
    "@type": "TireShop",
    url: SITE_URL,
    telephone: "+2349131692993",
    email: "info@fujityres.com",
    image: `${SITE_URL}/og-image.png`,
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "7",
    },
  };

  const location1 = {
    ...localBusinessBase,
    name: "Fuji Tyres - Trade Fair",
    description:
      "Buy premium tyres and rims in Lagos. 50+ brands, free expert consultation, and tyre inspection services at Trade Fair Lagos.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Progress Block A1, Shop 013, African Tire Village, Trade Fair",
      addressLocality: "Lagos",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "6.4698",
      longitude: "3.2584",
    },
  };

  const location2 = {
    ...localBusinessBase,
    name: "Fuji Tyres - Lagos Island",
    description:
      "Buy premium tyres and rims on Lagos Island. 50+ brands, free expert consultation, and tyre inspection services.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 29 Enuowa Street, Lagos Island",
      addressLocality: "Lagos",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fuji Tyres",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+234-913-169-2993",
      contactType: "sales",
      availableLanguage: "English",
    },
    sameAs: [
      // Add your social media URLs here when available
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: "Fuji Tyres - Frequently Asked Questions",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const services = [
    {
      name: "Tyre Sales",
      description:
        "Wide selection of premium tyres from over 50 top global brands for cars, SUVs, trucks, and commercial vehicles.",
    },
    {
      name: "Tyre Rims",
      description:
        "Quality alloy and steel rims from factory replacements to stylish custom designs.",
    },
    {
      name: "Expert Tyre Consultation",
      description:
        "Free personalised advice to help you choose the right tyres and rims for your vehicle.",
    },
    {
      name: "Tyre Inspection",
      description:
        "Comprehensive tyre health checks including tread depth, pressure, and sidewall condition.",
    },
  ];

  const serviceSchemas = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: {
      "@type": "TireShop",
      name: "Fuji Tyres",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "City",
      name: "Lagos",
    },
    description: service.description,
  }));

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Fuji Tyres",
    url: SITE_URL,
  };

  return (
    <>
      <JsonLd data={location1} />
      <JsonLd data={location2} />
      <JsonLd data={organization} />
      <JsonLd data={faqPage} />
      <JsonLd data={webSite} />
      {serviceSchemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
    </>
  );
}
