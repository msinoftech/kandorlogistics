import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL, contactInfo } from "@/lib/config";
import ContactForm from "@/components/ContactForm";
import {FaqSection} from "@/components/FaqSection";

const { phone } = contactInfo;

export const metadata: Metadata = {
  title: "Flatbed & Step Deck Dispatch Services | Kandor Logistics",
  description: "Partner with expert flatbed and stepdeck dispatchers to connect with steady, top-paying loads.  Also ensuring handling & route optimisation for oversized freight — 24/7.",
  keywords: "flatbed dispatch services, flatbed truck dispatch, flatbed dispatcher Texas, flatbed dispatcher california, flatbed dispatcher Chicago, dispatch service for owner operators, dispatcher in Texas for owner operators, step deck dispatch services, step deck dispatcher, step decks dispatch for Owner Operator",
  alternates: {
    canonical: `${BASE_URL}/services/flatbeds-step-deck-dispatch`,
  },
  openGraph: {
    title: "Flatbed & Step Deck Dispatch Services | Kandor Logistics",
    description: "Partner with expert flatbed and stepdeck dispatchers to connect with steady, top-paying loads.  Also ensuring handling & route optimisation for oversized freight — 24/7.",
    url: `${BASE_URL}/services/flatbeds-step-deck-dispatch`,
    siteName: `${APP_NAME}`,
    images: [
      {
        url: `${BASE_URL}/flatbedstep-truck-dispatch.jpg`,
        width: 500,
        height: 500,
        alt: "Flatbed & Step Deck Dispatch Services | Kandor Logistics",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flatbed & Step Deck Dispatch Services | Kandor Logistics",
    description: "Partner with expert flatbed and stepdeck dispatchers to connect with steady, top-paying loads.  Also ensuring handling & route optimisation for oversized freight — 24/7.",
    images: `${BASE_URL}/flatbedstep-truck-dispatch.jpg`,
  },
  
};

const faqItems = [
    {
        title: "What is a flatbed dispatcher?",
        content: `A flatbed dispatcher is responsible for sourcing and managing loads for flatbed or open-trailer trucks. They handle freight that exceeds standard size and shape, including oversized items and heavy machinery that require open transport. They also ensure compliance with safety and load requirements, negotiate freight rates, communicate with shippers and truck owners, and plan optimised routes. Adhering to DOT regulations and properly securing loads is essential for success in flatbed dispatching.`,
    },
    {
        title: "What is a step deck in trucking?",
        content: `A step deck, or drop deck, trailer is a flatbed with two deck levels designed to haul loads taller than the standard 8 feet, 6 inches height limit. With a legal clearance of up to 10 feet, step decks are suitable for transporting heavy equipment, machinery, or oversized freight that cannot fit on a traditional flatbed.`,
    },
    {
        title: "Does a flatbed pay more than a dry van?",
        content: `With the complex challenges of safety regulations, secure loads, and handling heavy or oversized cargo, Flatbed drivers earn more than dry van drivers. Market trends, region, demand, weather, and loading conditions can impact the margins.`,
    },
    {
        title: "How much weight can a step deck carry?",
        content: `The weight a step deck can carry depends on federal and state regulations, axle configuration, and trailer length. Generally, a standard step deck trailer measuring 48 to 53 feet can support up to 48,000 pounds of freight. Its 10-foot height capacity exceeds the legal limit of standard flatbeds.`,
    },
]

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
    {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        "url": `${BASE_URL}`,
        "name": `${APP_NAME}`
    },
    {
        "@type": "WebPage",
        "@id": `${BASE_URL}/services/flatbeds-step-deck-dispatch/#webpage`,
        "url": `${BASE_URL}/services/flatbeds-step-deck-dispatch`,
        "name": "Flatbed & Step Deck Dispatch Services",
        "isPartOf": {
            "@type": "WebSite",
            "url": `${BASE_URL}`,
            "name": `${APP_NAME}`
        },
        "description": "Partner with expert flatbed and stepdeck dispatchers to connect with steady, top-paying loads. Also ensuring handling & route optimisation for oversized freight — 24/7.",
        "inLanguage": "en-US",
    },
    {
        "@type": "Organization",
        "name": `${APP_NAME}`,
        "url": `${BASE_URL}`,
        "primaryImageOfPage": `${BASE_URL}/flatbedstep-truck-dispatch.jpg`,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": `${phone}`,
          "contactType": "customer service",
          "areaServed": "Global",
          "availableLanguage": ["en","es"]
        },
        "sameAs": [
          "https://www.facebook.com/kandorlogistics",
          "https://x.com/kandorlogistics",
          "https://www.instagram.com/kandorlogistics",
          "https://www.youtube.com/@KandorLogistics"
        ]
    },
    {
        "@type": "BreadcrumbList",
        "@id": `${BASE_URL}/services/flatbeds-step-deck-dispatch/#breadcrumb`,
        "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${BASE_URL}`
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": `${BASE_URL}/services`
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "Flatbed & Step Deck Dispatch Services",
            "item": `${BASE_URL}/services/flatbeds-step-deck-dispatch`
        }
        ]
    },
    {
        "@type": "Service",
        "serviceType": "Flatbed & Step Deck Dispatch",
        "name": "Flatbed & Step Deck Dispatch Services",
        "description": "Partner with expert flatbed and stepdeck dispatchers to connect with steady, top-paying loads.  Also ensuring handling & route optimisation for oversized freight — 24/7.",
        "url": `${BASE_URL}/services/flatbeds-step-deck-dispatch`,
        "provider": {
        "@type": "ShippingCompany",
        "name": `${APP_NAME}`,
        "url": `${BASE_URL}`,
        "primaryImageOfPage": `${BASE_URL}/flatbedstep-truck-dispatch.jpg`
        },
        "areaServed": [
        {"@type": "State", "name": "Texas"},
        {"@type": "City", "name": "Chicago"},
        {"@type": "State", "name": "California"}
        ],
        "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "flatbeds step deck dispatch",
        "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Urgent Freight Coordination"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Small Load Management"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Back-Office Paperwork and Compliance"}}
        ]
        }
    },
    {
        "@type": "FAQPage",
        "@id": `${BASE_URL}/services/flatbeds-step-deck-dispatch/#faq`,
        "mainEntity": faqItems.map((item) => ({
          "@type": "Question",
          "name": item.title,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.content
          }
        }))
    }
    ]
};

export default function FlatbedsStepDeckDispatchPage() {
  return (
    <>
    {/* Schema Markup */}
    <Script id="FlatbedsStepDeck-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

    <section className="bg-white relative sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-2xl text-gray-900 md:text-4xl font-bold mb-8">Flatbed/Step Truck Dispatch</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1">
                    <Image src="/flatbedstep-truck-dispatch.jpg" alt="flatbed dispatch services" width={600} height={350} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="flex-1 space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Top-Notch Flatbed/Step Truck Dispatch Services</h2>
                    <p>We handle every aspect of your business with tailored Flatbed and Step Truck Dispatch Services designed for owner-operators and small fleets. With 24/7 support, our expert dispatchers keep your trucks moving with top-paying loads, reducing downtime and empty miles so you can focus on growing your business.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-white relative pb-20">
        <div className="max-w-7xl mx-auto px-6 space-y-18">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1 space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">How Our Flatbed Truck Dispatchers Help to Scale Your Business</h2>
                    <p>Keeping your wheels turning with steady, profitable loads is the key to reaching your earning potential. It is tough to find loads, handle paperwork, and keep up with calls, leaving you with little time to drive or grow your business. Our dedicated Flatbed and Step Deck Dispatchers take the wheel on everything from securing top-paying loads to handling all the paperwork and communication, freeing you to focus on the drive.</p>
                </div>
                <div className="flex-1">
                    <Image src="/our-flatbed-truck-dispatchers-help-to-scale-your-business.jpg" alt="step deck dispatch services" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>
        </div>
    </section>

    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* Left Image */}
                <div className="flex justify-center">
                    <Image src="/benefits-of-partnering-with-flatbedstep-deck-dispatch.jpg" alt="dispatch service for owner operators" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                {/* Right Content */}
                <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Benefits of Partnering with Flatbed/Step Deck Dispatch Team</h2>
                    <p>Our team specialises in the unique requirements of oversized flatbed trailers. By partnering with our dedicated Flatbed and Step Deck Dispatchers, you gain access to high-value load sourcing, rate negotiation, route planning, paperwork management, and comprehensive back-office support tailored to your needs.</p>
                    <p>Our customised dispatch service helps you operate efficiently, increase earnings, and achieve sustained growth mile after mile.</p>
                    <h3 className="text-xl font-bold text-gray-900">Who Can Work With Us?</h3>
                    
                    <div className="flex items-start gap-4 p-3 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Owner-operators stepdeck/flatbed trailers,​</p>
                    </div>

                    <div className="flex items-start gap-4 p-3 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Small Fleet Owners</p>
                    </div>
                    
                    <div className="flex items-start gap-4 p-3 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Fleet Companies</p>
                    </div>
                    
                    <div className="flex items-start gap-4 p-3 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Carrier specialised in oversized freight</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-3 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What Our Flatbed/Step Deck Dispatch Service Does for You</h2>
                <p>Our dispatch services keep your flatbed trucks and open-deck trailers in demand by matching them with the most suitable freight.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Item 1 */}
                <div className="bg-gray-100 rounded-2xl shadow p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-red-600 mb-2">Load sourcing & Negotiation</h3>
                    <p>By tapping into cutting-edge load boards and a robust broker network, we keep your trucks moving with steady, well-paying step-deck/flatbed loads.</p>
                    <p>Our skilled dispatchers work hard to get the best rates for every load, so you make more money with each trip.</p>
                </div>

                {/* Item 2 */}
                <div className="bg-gray-100 rounded-2xl shadow p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-red-600 mb-2">Permit & compliance Handling</h3>
                    <p>Large or non-standard shipments require special permits and strict compliance with regulations. Our team manages permit requirements and ensures your shipments remain compliant, minimising potential issues and delays.</p>
                </div>

                {/* Item 3 */}
                <div className="bg-gray-100 rounded-2xl shadow p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-red-600 mb-2">Advance Route planning & optimisation</h3>
                    <p>We design customised routes that address all height, weight, and bridge restrictions, reducing empty miles and increasing your earning potential.</p>
                </div>

                {/* Item 4 */}
                <div className="bg-gray-100 rounded-2xl shadow p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-red-600 mb-2">Complete back-office administrative support</h3>
                    <p>From confirming your pay rates and handling broker forms to sending invoices and ensuring timely payment for wait times, we take care of all the paperwork so you can focus on driving and growing your business.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-white max-w-7xl relative mx-auto px-6 py-20">
        <div className="rounded-3xl bg-white drop-shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Left Content */}
                <div className="relative">
                    <div className="space-y-3">
                        <div className="text-2xl md:text-3xl text-gray-900 font-bold">Partner with Us to Scale Your Business</div>
                        <p>Contact us for a customised dispatch plan tailored to your equipment, lanes, and rate goals so that you can drive with confidence</p>
                    </div>

                </div>

                {/* Right Form */}
                <div className="relative">
                    <ContactForm />
                </div>
            </div>
        </div>
    </section>

    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="relative text-center space-y-3 pb-8">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center">Frequently Asked Questions</h2>
            </div>
            <FaqSection items={faqItems} />
        </div>
    </section>
    </>
  );
}
