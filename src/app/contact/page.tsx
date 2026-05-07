import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL, contactInfo } from "@/lib/config";
import ContactForm from "@/components/ContactForm";
import LocationSection from "@/components/LocationSection";

const { phone, logo } = contactInfo;

export const metadata: Metadata = {
  title: `Contact Us to Explore the Partnership Opportunity`,
  description: "Reach the Kandor Logistics team for trucking dispatch support — call, email, or book a free consultation. We help owner-operators and fleet companies across the USA.",
  keywords: ["logistics", "Kandor", "Contact us", "Trucking Dispatch Support"],
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: `Contact Us to Explore the Partnership Opportunity`,
    description: "Reach the Kandor Logistics team for trucking dispatch support — call, email, or book a free consultation. We help owner-operators and fleet companies across the USA.",
    images: [
      {
        url: `${BASE_URL}/contact-us.jpg`,
        width: 500,
        height: 500,
        alt: `Contact Us to Explore the Partnership Opportunity`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@KandorLogistics",
    creator: "@KandorLogistics",
    title: `Contact Us to Explore the Partnership Opportunity`,
    description: "Reach the Kandor Logistics team for trucking dispatch support — call, email, or book a free consultation. We help owner-operators and fleet companies across the USA.",
    images: `${BASE_URL}${logo}`,
  },
};

const contactSchemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "url": `${BASE_URL}`,
      "name": `${APP_NAME}`,
      "description": "Kandor Logistics, a dedicated team of truck dispatchers, provides 24/7 back-office support for owner-operators and fleets. Get a free quote today!",
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${BASE_URL}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      }
    },
    {
      "@type": "WebPage",
      "url": `${BASE_URL}/contact`,
      "name": "Contact Us",
      "inLanguage": "en-US",
      "description": "Reach the Kandor Logistics team for trucking dispatch support — call, email, or book a free consultation. We help owner-operators and fleet companies across the USA.",
      "isPartOf": {
        "@type": "WebSite",
        "url": `${BASE_URL}`,
        "name": `${APP_NAME}`,
      },
    },
    {
      "@type": "Organization",
      "name": `${APP_NAME}`,
      "url": `${BASE_URL}`,
      "logo": `${BASE_URL}${logo}`,
      "foundingDate": "2020",
      "founder": {
        "@type": "Person",
        "name": `${APP_NAME}`,
      },
      "description": "Reach the Kandor Logistics team for trucking dispatch support — call, email, or book a free consultation. We help owner-operators and fleet companies across the USA.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": `${phone}`,
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": ["en", "es"],
      },
      "sameAs": [
        "https://www.facebook.com/kandorlogistics",
        "https://x.com/kandorlogistics",
        "https://www.instagram.com/kandorlogistics",
        "https://www.youtube.com/@KandorLogistics"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Houston, Texas",
        "addressRegion": "TX",
        "addressCountry": "US",
      },
    },
    {
      "@type": "ContactPage",
      "name": "Contact Us",
      "url": `${BASE_URL}/contact`,
      "primaryImageOfPage": `${BASE_URL}${logo}`,
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${BASE_URL}`,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Contact",
            "item": `${BASE_URL}/contact`,
          },
        ],
      },
    },
  ],
};

export default function Contact() {
  return (
    <>
      <Script id="contact-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchemaData) }}/>

      <section className="sm:pt-40 md:pt-40 lg:pt-40 pt-40 bg-gray-50 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-3 pb-12">
            <h1 className="text-2xl text-gray-900 md:text-4xl font-bold">Reach Out and Connect with Our Expert Team</h1>
            <p>No matter where you are or when you need us, we’re here for you.</p>
            <p>We’re excited to connect! Have a question, need a hand, or want to share your thoughts? Our team is ready and eager to help.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white px-8 py-12 shadow-md rounded-lg">
            <div className="relative space-y-3">
              <div className="text-xl font-semibold text-gray-900 mb-4">Get in Touch with Our Support Team</div>
              <ContactForm />
            </div>
            <div className="relative">
              <LocationSection
                mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52809511.31490187!2d-161.46914193546857!3d36.11208890130274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1763029895913!5m2!1sen!2sin"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}