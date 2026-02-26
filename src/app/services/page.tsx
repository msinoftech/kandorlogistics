import Link from "next/link";
import type { Metadata } from "next";
import { APP_NAME, BASE_URL, contactInfo } from "@/lib/config";
import Script from "next/script";
import ContactForm from "@/components/ContactForm";
import ContactSection from "@/components/ContactSection";

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
        <div className="max-w-8xl lg:max-w-4xl mx-auto text-center pb-12">
          <h1 className="text-2xl text-gray-900 md:text-4xl font-bold">Professional Dispatch Service for Owner-Operators & Growing Fleets</h1>
          <p className="mt-4 mx-auto text-md">We are a full-service dispatching company dedicated to the profitable outcomes you deserve. Whether you are an owner-operator or a fleet company, our expert freight dispatchers manage all back-office tasks, secure high-value loads, and offer the support you need to grow your business. Focus on driving while we handle your earnings.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Service 1 */}
          <div className="relative group bg-gradient-to-br from-white via-red-50 to-orange-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative md:items-stretch z-10 mb-6">
              <div className="p-6 pb-8">
                <div className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors"><Link href="/services/hotshot-dispatch">Hotshot Dispatch</Link></div>
                <p className="text-md">Kandor Logistics streamlines your business with expert hotshot dispatch services, managing bookings and back-office tasks to boost efficiency and growth.</p>
                <div className="flex item-end justify-end my-4">
                  <Link href="/services/hotshot-dispatch" aria-label="Discover more about Hotshot Dispatch" className="gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-orange-400 rounded-full shadow hover:from-red-600 hover:to-orange-500 transition-all">Discover more →</Link>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 w-full -z-0">
              <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-40 group-hover:opacity-60 transition-all duration-300">
                <path fill="url(#waveGradient)" d="M0,224L30,192C60,160,120,96,180,74.7C240,53,300,75,360,101.3C420,128,480,160,540,176C600,192,660,192,720,170.7C780,149,840,107,900,96C960,85,1020,107,1080,138.7C1140,171,1200,213,1260,213.3C1320,213,1380,171,1410,149.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                ></path>
                <defs>
                  <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f87171" />
                    <stop offset="100%" stopColor="#fb923c" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Service 2 */}
          <div className="relative group bg-gradient-to-br from-white via-red-50 to-orange-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative md:items-stretch z-10 mb-6">
              <div className="p-6 pb-8">
                <div className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors"><Link href="/services/flatbeds-step-deck-dispatch">Flatbeds/Step Deck Dispatch</Link></div>
                <p className="text-md">Kandor Logistics connects flatbed carriers with profitable long and short-haul loads, ensuring steady work, fair earnings, and efficient logistics management.</p>
                <div className="flex item-end justify-end my-4">
                  <Link href="/services/flatbeds-step-deck-dispatch" aria-label="Discover more about Flatbeds and Step Deck Dispatch" className="gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-orange-400 rounded-full shadow hover:from-red-600 hover:to-orange-500 transition-all">Discover more →</Link>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 w-full -z-0">
              <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-40 group-hover:opacity-60 transition-all duration-300">
                <path fill="url(#waveGradient)" d="M0,224L30,192C60,160,120,96,180,74.7C240,53,300,75,360,101.3C420,128,480,160,540,176C600,192,660,192,720,170.7C780,149,840,107,900,96C960,85,1020,107,1080,138.7C1140,171,1200,213,1260,213.3C1320,213,1380,171,1410,149.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                ></path>
                <defs>
                  <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f87171" />
                    <stop offset="100%" stopColor="#fb923c" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Service 3 */}
          <div className="relative group bg-gradient-to-br from-white via-red-50 to-orange-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative md:items-stretch z-10 mb-6">
              <div className="p-6 pb-8">
                <div className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors"><Link href="/services/power-only-units-dispatching">Power Only Units Dispatch</Link></div>
                <p className="text-md">Kandor Logistics supports power-only truckers with reliable dispatch services and affordable trailer rentals to keep operations running smoothly.</p>
                <div className="flex item-end justify-end my-4">
                  <Link href="/services/power-only-units-dispatching" aria-label="Discover more about Power Only Units Dispatching" className="gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-orange-400 rounded-full shadow hover:from-red-600 hover:to-orange-500 transition-all">Discover more →</Link>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 w-full -z-0">
              <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-40 group-hover:opacity-60 transition-all duration-300">
                <path fill="url(#waveGradient)" d="M0,224L30,192C60,160,120,96,180,74.7C240,53,300,75,360,101.3C420,128,480,160,540,176C600,192,660,192,720,170.7C780,149,840,107,900,96C960,85,1020,107,1080,138.7C1140,171,1200,213,1260,213.3C1320,213,1380,171,1410,149.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                ></path>
                <defs>
                  <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f87171" />
                    <stop offset="100%" stopColor="#fb923c" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Service 4 */}
          <div className="relative group bg-gradient-to-br from-white via-red-50 to-orange-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative md:items-stretch z-10 mb-6">
              <div className="p-6 pb-8">
                <div className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors"><Link href="/services/low-boy-dispatching">Low Boy Dispatch</Link></div>
                <p className="text-md">Kandor Logistics connects lowboy carriers with bulk shipment projects, ensuring steady loads, efficient dispatching, and helping increase carrier revenue by 25%.</p>
                <div className="flex item-end justify-end my-4">
                  <Link href="/services/low-boy-dispatching" aria-label="Discover more about Low Boy Dispatching" className="gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-orange-400 rounded-full shadow hover:from-red-600 hover:to-orange-500 transition-all">Discover more →</Link>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 w-full -z-0">
              <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-40 group-hover:opacity-60 transition-all duration-300">
                <path fill="url(#waveGradient)" d="M0,224L30,192C60,160,120,96,180,74.7C240,53,300,75,360,101.3C420,128,480,160,540,176C600,192,660,192,720,170.7C780,149,840,107,900,96C960,85,1020,107,1080,138.7C1140,171,1200,213,1260,213.3C1320,213,1380,171,1410,149.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                ></path>
                <defs>
                  <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f87171" />
                    <stop offset="100%" stopColor="#fb923c" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Service 5 */}
          <div className="relative group bg-gradient-to-br from-white via-red-50 to-orange-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative md:items-stretch z-10 mb-6">
              <div className="p-6 pb-8">
                <div className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors"><Link href="/services/box-truck-dispatching">Box Truck Dispatch</Link></div>
                <p className="text-md">Kandor Logistics provides steady box truck loads daily, ensuring your truck stays profitable and productive while we handle all dispatching needs.</p>
                <div className="flex item-end justify-end my-4">
                  <Link href="/services/box-truck-dispatching" aria-label="Discover more about Box Truck Dispatching" className="gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-orange-400 rounded-full shadow hover:from-red-600 hover:to-orange-500 transition-all">Discover more →</Link>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 w-full -z-0">
              <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-40 group-hover:opacity-60 transition-all duration-300">
                <path fill="url(#waveGradient)" d="M0,224L30,192C60,160,120,96,180,74.7C240,53,300,75,360,101.3C420,128,480,160,540,176C600,192,660,192,720,170.7C780,149,840,107,900,96C960,85,1020,107,1080,138.7C1140,171,1200,213,1260,213.3C1320,213,1380,171,1410,149.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                ></path>
                <defs>
                  <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f87171" />
                    <stop offset="100%" stopColor="#fb923c" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Service 6 */}
          <div className="relative group bg-gradient-to-br from-white via-red-50 to-orange-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative md:items-stretch z-10 mb-6">
              <div className="p-6 pb-8">
                <div className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors"><Link href="/services/dry-van-dispatching">Dry Van Dispatch</Link></div>
                <p className="text-md">Kandor Logistics specializes in dry van dispatch, optimizing routes, reducing fuel costs, and ensuring smooth, hassle-free pickups and deliveries for drivers.</p>
                <div className="flex item-end justify-end my-4">
                  <Link href="/services/dry-van-dispatching" aria-label="Discover more about Dry Van Dispatching" className="gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-orange-400 rounded-full shadow hover:from-red-600 hover:to-orange-500 transition-all">Discover more →</Link>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 w-full -z-0">
              <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-40 group-hover:opacity-60 transition-all duration-300">
                <path fill="url(#waveGradient)" d="M0,224L30,192C60,160,120,96,180,74.7C240,53,300,75,360,101.3C420,128,480,160,540,176C600,192,660,192,720,170.7C780,149,840,107,900,96C960,85,1020,107,1080,138.7C1140,171,1200,213,1260,213.3C1320,213,1380,171,1410,149.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                ></path>
                <defs>
                  <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f87171" />
                    <stop offset="100%" stopColor="#fb923c" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Service 7 */}
          <div className="relative group bg-gradient-to-br from-white via-red-50 to-orange-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative md:items-stretch mb-6 z-10">
              <div className="p-6 pb-8">
                <div className="text-2xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors"><Link href="/services/reefer-dispatching">Reefer Dispatch</Link></div>
                <p className="text-md">Kandor Logistics provides reliable reefer dispatch services with strict 30-minute temperature checks, ensuring safe transport of food, pharmaceuticals, and chemicals.</p>
                <div className="flex item-end justify-end my-4">
                  <Link href="/services/reefer-dispatching" aria-label="Discover more about Reefer Dispatching" className="gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-orange-400 rounded-full shadow hover:from-red-600 hover:to-orange-500 transition-all">Discover more →</Link>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 w-full -z-0">
              <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-40 group-hover:opacity-60 transition-all duration-300">
                <path fill="url(#waveGradient)" d="M0,224L30,192C60,160,120,96,180,74.7C240,53,300,75,360,101.3C420,128,480,160,540,176C600,192,660,192,720,170.7C780,149,840,107,900,96C960,85,1020,107,1080,138.7C1140,171,1200,213,1260,213.3C1320,213,1380,171,1410,149.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                ></path>
                <defs>
                  <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f87171" />
                    <stop offset="100%" stopColor="#fb923c" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>


        </div>
      </div>
    </section>

    <section id="contact" className="bg-white max-w-7xl mx-auto px-6 py-20">
          <div className="rounded-3xl bg-white drop-shadow-lg p-8">
            <div className="relative text-center pb-8">
                <div className="text-2xl text-gray-900 md:text-4xl font-bold">Lets Plan Your Next Week of Loads</div>
                <p className="mt-3">Tell us your lanes and equipment. We will share a quick lane strategy and pricing options.</p>
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
