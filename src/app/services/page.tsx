import type { Metadata } from "next";
import { APP_NAME, BASE_URL, contactInfo } from "@/lib/config";
import Script from "next/script";
import ContactForm from "@/components/ContactForm";
import ContactSection from "@/components/ContactSection";
import ServicesCardLayout from "@/components/ServicesCardLayout";

const { phone } = contactInfo;

export const metadata: Metadata = {
  title: `Dispatch Services for Owner-Operators and Fleet Owners | Kandor Logistics`,
  description: "Explore all Kandor Logistics dispatch services. For those, we offer 24/7 support across the USA, Dm free.",
  keywords: [ "logistics", "freight forwarding", "supply chain", "shipping", "customs brokerage", "cargo", "global transport", "Kandor",],
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
  openGraph: {
    title: `Dispatch Services for Owner-Operators and Fleet Owners | Kandor Logistics`,
    description: "Explore all Kandor Logistics dispatch services. For those, we offer 24/7 support across the USA, Dm free.",
    images: [
      {
        url: `${BASE_URL}/comprehensive-power-only-units-dispatch.jpg`,
        width: 500,
        height: 500,
        alt: `Dispatch Services for Owner-Operators and Fleet Owners | Kandor Logistics`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@KandorLogistics",
    creator: "@KandorLogistics",
    title: "Dispatch Services for Owner-Operators and Fleet Owners | Kandor Logistics",
    description: "Explore all Kandor Logistics dispatch services. For those, we offer 24/7 support across the USA, Dm free.",
    images: `${BASE_URL}/comprehensive-power-only-units-dispatch.jpg`,
  },
};

const serviceschemaData = {
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
      },
    },
    {
      "@type": "WebPage",
      "url": `${BASE_URL}/services`,
      "name": "Services | Kandor Logistics",
      "inLanguage": "en-US",
      "description": "Explore all Kandor Logistics dispatch services. For those, we offer 24/7 support across the USA, Dm free.",
      "isPartOf": {
        "@type": "WebSite",
        "url": `${BASE_URL}`,  
        "name": `${APP_NAME}`,
      },
    },
    {
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
          "name": "Services",
          "item": `${BASE_URL}/services`,
        },
      ],
    },
    {
      "@type": "Service",
      "serviceType": "Truck Dispatching & Freight Logistics",
      "name": "Dispatch Services for Owner-Operators and Fleet Owners",
      "description": "Explore all Kandor Logistics dispatch services. For those, we offer 24/7 support across the USA, Dm free.",
      "provider": {
        "@type": "ShippingCompany",
        "name": `${APP_NAME}`,
        "url": `${BASE_URL}`,
        "primaryImageOfPage": `${BASE_URL}/comprehensive-power-only-units-dispatch.jpg`,
        "slogan": "Dispatch Services for Owner-Operators and Fleet Owners",
        "telephone": `${phone}`,
        "areaServed": [
          { "@type": "Place", name: "Texas" },
          { "@type": "Place", name: "Chicago" },
          { "@type": "Place", name: "California" },
          { "@type": "Place", name: "United States" },
        ],
        "sameAs": [
          "https://www.facebook.com/kandorlogistics",
          "https://x.com/kandorlogistics",
          "https://www.instagram.com/kandorlogistics",
          "https://www.youtube.com/@KandorLogistics"
        ],
      },
    },
    {
      "@type": "ShippingCompany",
      "name": `${APP_NAME} - Texas Hub`,
      "url": `${BASE_URL}/locations/texas`,
      "telephone": `${phone}`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Houston",
        "addressRegion": "TX",
        "addressCountry": "US",
      },
      "serviceType": "Truck Dispatching, Freight Brokerage, and Logistics Services",
      "areaServed": "Texas",
    },
    {
      "@type": "ShippingCompany",
      "name": `${APP_NAME} - Chicago Hub`,
      "url": `${BASE_URL}/locations/chicago`,
      "telephone": `${phone}`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chicago",
        "addressRegion": "IL",
        "addressCountry": "US",
      },
      "serviceType": "Dispatching and Freight Services for Midwest Region",
      "areaServed": "Illinois",
    },
    {
      "@type": "ShippingCompany",
      "name": `${APP_NAME} - California Hub`,
      "url": `${BASE_URL}/locations/california`,
      "telephone": `${phone}`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Los Angeles",
        "addressRegion": "CA",
        "addressCountry": "US",
      },
      "serviceType": "Truck Dispatching and Logistics Services in West Coast",
      "areaServed": "California",
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
          <h1 className="text-2xl text-gray-900 md:text-4xl font-bold">Professional Dispatch Service for Owner-Operators & Growing Fleets</h1>
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
