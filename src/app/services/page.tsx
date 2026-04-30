import type { Metadata } from "next";
import { APP_NAME, BASE_URL, contactInfo } from "@/lib/config";
import Script from "next/script";
import ContactForm from "@/components/ContactForm";
import ContactSection from "@/components/ContactSection";
import ServicesCardLayout from "@/components/ServicesCardLayout";

export const metadata: Metadata = {
  title: `Top-Notch Dispatch Service for Owner Operators and Fleet Companies`,
  description: "For the past decade, our experienced dispatchers have delivered high-quality freight dispatch services to owner-operators and carriers, supporting their business growth.",
  keywords: [ "logistics", "freight forwarding", "supply chain", "shipping", "customs brokerage", "cargo", "global transport", "Kandor",],
  openGraph: {
    title: `Top-Notch Dispatch Service for Owner Operators and Fleet Companies`,
    description: "For the past decade, our experienced dispatchers have delivered high-quality freight dispatch services to owner-operators and carriers, supporting their business growth.",
    images: [
      {
        url: `${BASE_URL}/services-og.jpg`,
        width: 1200,
        height: 630,
        alt: `Top-Notch Dispatch Service for Owner Operators and Fleet Companies`,
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
};

const { phone } = contactInfo;

// Schema Data
const serviceschemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      url: `${BASE_URL}`,
      name: `${APP_NAME}`,
      description: "Professional truck dispatching and logistics company in the USA offering reliable freight forwarding, dispatch, and transportation services.",
      potentialAction: {
        "@type": "SearchAction",
        target: `${BASE_URL}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${BASE_URL}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Truck Dispatching Services",
          item: `${BASE_URL}/truck-dispatching-services`,
        },
      ],
    },
    {
      "@type": "Service",
      serviceType: "Truck Dispatching & Freight Logistics",
      name: "Truck Dispatching Services USA",
      description: "Kandor Logistics offers professional truck dispatching services for owner-operators and carriers across the USA. We help maximize fleet revenue with optimized loads and dedicated dispatch support.",
      provider: {
        "@type": "ShippingCompany",
        name: `${APP_NAME}`,
        url: `${BASE_URL}`,
        logo: `${BASE_URL}/kas-logo.png`,
        slogan:
          "Reliable Dispatching and Freight Solutions Across the USA",
        telephone: `${phone}`,
        areaServed: [
          { "@type": "Place", name: "Texas" },
          { "@type": "Place", name: "Chicago" },
          { "@type": "Place", name: "California" },
          { "@type": "Place", name: "United States" },
        ],
        sameAs: [
          "https://www.facebook.com/kandorlogistics",
          "https://www.linkedin.com/company/kandorlogistics",
          "https://twitter.com/KandorLogistics",
        ],
      },
    },
    {
      "@type": "ShippingCompany",
      name: `${APP_NAME} - Texas Hub`,
      url: `${BASE_URL}/locations/texas`,
      telephone: `${phone}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Houston",
        addressRegion: "TX",
        addressCountry: "US",
      },
      serviceType: "Truck Dispatching, Freight Brokerage, and Logistics Services",
      areaServed: "Texas",
    },
    {
      "@type": "ShippingCompany",
      name: `${APP_NAME} - Chicago Hub`,
      url: `${BASE_URL}/locations/chicago`,
      telephone: `${phone}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chicago",
        addressRegion: "IL",
        addressCountry: "US",
      },
      serviceType: "Dispatching and Freight Services for Midwest Region",
      areaServed: "Illinois",
    },
    {
      "@type": "ShippingCompany",
      name: `${APP_NAME} - California Hub`,
      url: `${BASE_URL}/locations/california`,
      telephone: `${phone}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Los Angeles",
        addressRegion: "CA",
        addressCountry: "US",
      },
      serviceType: "Truck Dispatching and Logistics Services in West Coast",
      areaServed: "California",
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
    {/* Schema JSON-LD */}
    <Script id="services-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceschemaData),}}/>

    <section className="bg-gray-50 sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 mb-12">
          <h2 className="text-2xl text-gray-900 md:text-4xl font-bold">Professional Dispatch Service for Owner-Operators & Growing Fleets</h2>
          <p>We are a full-service dispatching company dedicated to the profitable outcomes you deserve. Whether you are an owner-operator or a fleet company, our expert freight dispatchers manage all back-office tasks, secure high-value loads, and offer the support you need to grow your business. Focus on driving while we handle your earnings.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServicesCardLayout
            title="Hotshot Dispatch"
            excerpt="Kandor Logistics streamlines your business with expert hotshot dispatch services, managing bookings and back-office tasks to boost efficiency and growth."
            link={`${BASE_URL}/services/hotshot-dispatch`}
          />
          <ServicesCardLayout
            title="Flatbeds/Step Deck Dispatch"
            excerpt="Kandor Logistics connects flatbed carriers with profitable long and short-haul loads, ensuring steady work, fair earnings, and efficient logistics management."
            link={`${BASE_URL}/services/flatbeds-step-deck-dispatch`}
          />
          <ServicesCardLayout
            title="Power Only Units Dispatch"
            excerpt="Kandor Logistics supports power-only truckers with reliable dispatch services and affordable trailer rentals to keep operations running smoothly."
            link={`${BASE_URL}/services/power-only-units-dispatching`}
          />
          <ServicesCardLayout
            title="Low Boy Dispatch"
            excerpt="Kandor Logistics connects lowboy carriers with bulk shipment projects, ensuring steady loads, efficient dispatching, and helping increase carrier revenue by 25%."
            link={`${BASE_URL}/services/low-boy-dispatching`}
          />
          <ServicesCardLayout
            title="Box Truck Dispatch"
            excerpt="Kandor Logistics provides steady box truck loads daily, ensuring your truck stays profitable and productive while we handle all dispatching needs."
            link={`${BASE_URL}/services/box-truck-dispatching`}
          />
          <ServicesCardLayout
            title="Dry Van Dispatch"
            excerpt="Kandor Logistics specializes in dry van dispatch, optimizing routes, reducing fuel costs, and ensuring smooth, hassle-free pickups and deliveries for drivers."
            link={`${BASE_URL}/services/dry-van-dispatching`}
          />
          <ServicesCardLayout
            title="Reefer Dispatch"
            excerpt="Kandor Logistics provides reliable reefer dispatch services with strict 30-minute temperature checks, ensuring safe transport of food, pharmaceuticals, and chemicals."
            link={`${BASE_URL}/services/reefer-dispatching`}
          />

        </div>
      </div>
    </section>

    <section className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="rounded-3xl bg-white drop-shadow-lg p-8">
            <div className="relative text-center space-y-3 pb-8">
                <div className="text-2xl text-gray-900 md:text-4xl font-bold">Lets Plan Your Next Week of Loads</div>
                <p>Tell us your lanes and equipment. We will share a quick lane strategy and pricing options.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Content */}
              <div className="relative">
                <div className="mt-6">
                  <ContactSection/>
                </div>
              </div>

              {/* Right Form */}
              <div className="relative">
                <ContactForm />
              </div>
            </div>
        </div>
      </section>
    </>
  );
}
