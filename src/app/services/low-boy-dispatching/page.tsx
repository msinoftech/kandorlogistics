import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL, contactInfo } from "@/lib/config";
import ContactForm from "@/components/ContactForm";
import {FaqSection} from "@/components/FaqSection";

const { phone, logo } = contactInfo;

export const metadata: Metadata = {
    title: "Lowboy Dispatch Services for Heavy Hauling | Kandor Logistics",
    description: "Get reliable lowboy dispatch services for heavy haul and oversized loads — load sourcing, permit management, route planning & 24/7 back-office support for owner-operators.",
    keywords: "low boy dispatch services",
    alternates: {
        canonical: `${BASE_URL}/services/low-boy-dispatching`,
    },
    openGraph: {
      title: "Lowboy Dispatch Services for Heavy Hauling | Kandor Logistics",
      description: "Get reliable lowboy dispatch services for heavy haul and oversized loads — load sourcing, permit management, route planning & 24/7 back-office support for owner-operators.",
      url: `${BASE_URL}/services/low-boy-dispatching`,
      siteName: `${APP_NAME}`,
      images: [
        {
          url: `${BASE_URL}/lowboy-dispatch-services-for-oversized-load.jpg`,
          width: 500,
          height: 500,
          alt: "Lowboy Dispatch Services for Heavy Hauling",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Lowboy Dispatch Services for Heavy Hauling | Kandor Logistics",
      description: "Get reliable lowboy dispatch services for heavy haul and oversized loads — load sourcing, permit management, route planning & 24/7 back-office support for owner-operators.",
      images: `${BASE_URL}${logo}`,
    },
};

const faqItems = [
    {
        title: "What do lowboy dispatchers for a trucking company do?",
        content:`Lowboy Dispatchers specialise in handling every aspect of heavy-haul transportation, including construction machinery, oversized freight, and special equipment. They plan loads efficiently, make sure everything meets regulations, and coordinate each move carefully. Also, they are dedicated to maximising your earnings and maintaining efficient, stress-free operations.`,
    },
    {
        title: "Why choose Lowboy Truck Dispatcher?",
        content: `Lowboy truck dispatchers manage logistics to increase efficiency and profitability. They handle load searches, paperwork, permits, and communication, while seeking better freight opportunities, negotiating rates, optimizing fuel use, and minimizing downtime to boost revenue. Their support also helps drivers stay compliant, safe, and focused on driving.`,
    },
    {
        title: "How to Find Reliable Dispatchers for a Lowboy Trailer?",
        content: `A simple way is to go online and search for “lowboy dispatcher near me” to find local service listings, industry directories, and dispatcher networks. Select dispatchers or companies based on their experience, transparent pricing, and positive driver reviews. Also, check how well they use technology, how they find loads, and how they communicate about the lowboy trailer. Then sign the contract with the one who fits your needs.`,
    }
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
        "@id": `${BASE_URL}/services/low-boy-dispatching/#webpage`,
        "url": `${BASE_URL}/services/low-boy-dispatching`,
        "name": "Low Boy Dispatch Services",
        "isPartOf": {
            "@type": "WebSite",
            "url": `${BASE_URL}`,
            "name": `${APP_NAME}`
        },
        "description": "Get reliable lowboy dispatch services for heavy haul and oversized loads — load sourcing, permit management, route planning & 24/7 back-office support for owner-operators.",
        "inLanguage": "en-US",
    },
    {
        "@type": "Organization",
        "name": `${APP_NAME}`,
        "url": `${BASE_URL}`,
        "logo": `${BASE_URL}${logo}`,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": `${phone}`,
          "contactType": "customer service",
          "areaServed": "Global",
          "availableLanguage": ["en","es","zh"]
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
        "@id": `${BASE_URL}/services/low-boy-dispatching/#breadcrumb`,
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
            "name": "Low Boy Dispatch Services",
            "item": `${BASE_URL}/services/low-boy-dispatching`
        }
        ]
    },
    {
        "@type": "Service",
        "serviceType": "Low Boy Dispatch",
        "name": "Low Boy Dispatch Services",
        "description": "Get reliable lowboy dispatch services for heavy haul and oversized loads — load sourcing, permit management, route planning & 24/7 back-office support for owner-operators.",
        "url": `${BASE_URL}/services/low-boy-dispatching`,
        "provider": {
        "@type": "ShippingCompany",
        "name": `${APP_NAME}`,
        "url": `${BASE_URL}`,
        "logo": `${BASE_URL}${logo}`
        },
        "areaServed": [
        {"@type": "State", "name": "Texas"},
        {"@type": "City", "name": "Chicago"},
        {"@type": "State", "name": "California"}
        ],
        "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Low Boy Service Offerings",
        "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Urgent Freight Coordination"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Small Load Management"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Back-Office Paperwork and Compliance"}}
        ]
        }
    },
    {
        "@type": "FAQPage",
        "@id": `${BASE_URL}/services/low-boy-dispatching/#faq`,
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

export default function LowBoyDispatchPage() {
  return (
    <>
    {/* Schema Markup */}
    <Script id="low-boy-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

    <section className="bg-white relative sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl text-gray-900 md:text-4xl font-bold mb-8">Lowboy Dispatch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1">
                    <Image src="/lowboy-dispatch-services-for-oversized-load.jpg" alt="low boy dispatch services" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="flex-1 space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Lowboy Dispatch Services for Oversized Load Transport</h2>
                    <p>Kandor Logistics offers reliable Lowboy Dispatch Services for owner-operators and fleets to make Heavy Haul Operations easier nationwide. Let our skilled team handle every detail with expert care so that you can keep your eyes on the road.</p>
                </div>
            </div>
        </div>
    </section>

     <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
            {/* Heading Section */}
            <div className="max-w-4xl mx-auto text-center space-y-3 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">How Our Lowboy Dispatchers Support Owner-Operators and Fleet Companies</h2>
                <p>At Kandor Logistics, we partner with owner-operators and fleet companies, managing all the behind-the-scenes tasks so you can focus on safe, timely hauling.</p>
                <p>Our Lowboy dispatchers support your business in the following ways:</p>
            </div>
            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* Left Image */}
                <div className="flex justify-center">
                    <Image src="/lowboy-dispatchers-support-owner-operators.jpg" alt="Lowboy Dispatchers Support Owner-Operators" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                {/* Right Content */}
                <div className="space-y-3">
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-full"></div>
                        <p>Manage load boards to find suitable loads for your Lowboy trailer.</p>
                    </div>
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-full"></div>
                        <p>Negotiate with brokers and shippers to secure high-paying freight.</p>
                    </div>
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-full"></div>
                        <p>Handle rate confirmations, BOLs, and other documentation to maintain smooth operations.</p>
                    </div>
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-full"></div>
                        <p>Coordinate communication among drivers, brokers, and shippers.</p>
                    </div>
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-full"></div>
                        <p>Monitor dispatch performance and load efficiency to provide insights that improve profitability over time.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-white relative py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-18">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1 space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Why Choose a Dispatcher for a Lowboy Trailer?</h2>
                    <p>When you have a professional Lowboy dispatcher on your side, you unlock your full earning potential. Their 24/7 support includes securing high-paying loads, streamlining your routes, and handling the paperwork. By this, you spend more time on the road, keep your truck rolling, cut down on empty miles and fuel expenses, and ultimately boost your revenue.</p>
                </div>
                <div className="flex-1">
                    <Image src="/choose-a-dispatcher-for-a-lowboy-trailer.jpg" alt="Why Choose a Dispatcher for a Lowboy Trailer" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="order-2 md:order-1 flex-1">
                    <Image src="/customised-lowboy-dispatch-solution.jpg" alt="Customised Lowboy Dispatch" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="order-1 md:order-2 flex-1 space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What is the Customised Lowboy Dispatch Solution?</h2>
                    <p>Whether you own a fleet or drive on your own, the best customised Lowboy Dispatch Solution fits your specific transportation needs. Our dispatch experts create plans just for you based on your load, route, and schedule so you can handle challenges, grow your business, and reach your goals.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1 space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Benefits of Working with Lowboy Truck Dispatcher</h2>
                    <p>Partnering with Lowboy Truck Dispatchers helps you improve efficiency and profitability. Dispatchers manage load searches, paperwork, permits, and communication, and they negotiate the best rates. Also, their expertise increases earnings by unlocking better freight opportunities, optimising fuel use, and reducing downtime. In addition, their support helps drivers remain compliant, safe, and focused on higher earnings.</p>
                </div>
                <div className="flex-1">
                    <Image src="/benefits-of-working-with-lowboy-truck.jpg" alt="Benefits of Working with Lowboy Trailer" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>
        </div>
    </section>
    
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-3 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What Do Kandor Logistics Lowboy Dispatchers Offer?</h2>
                <p>Our Lowboy Truck Dispatchers manage every step of the process to ensure a seamless, efficient, and transparent dispatch experience.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Item 1 */}
                <div className="bg-gray-100 rounded-2xl shadow p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-red-600 mb-2">Load Sourcing & Rate Negotiation</h3>
                    <p>Source high-paying loads, negotiate competitive rates, and align with your schedule and equipment capacity.</p>
                </div>

                {/* Item 2 */}
                <div className="bg-gray-100 rounded-2xl shadow p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-red-600 mb-2">Paperwork & Compliance Management</h3>
                    <p>Handling complex documentation for oversized loads, including permits, rate confirmations, and invoicing.</p>
                </div>

                {/* Item 3 */}
                <div className="bg-gray-100 rounded-2xl shadow p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-red-600 mb-2">Route Planning & Optimising</h3>
                    <p>Plan the most efficient routes for heavy and oversized cargo, accounting for height, weight limits, and regional restrictions.</p>
                </div>

                {/* Item 4 */}
                <div className="bg-gray-100 rounded-2xl shadow p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-red-600 mb-2">Back-Office Support</h3>
                    <p>Provide comprehensive back-office support for communication, scheduling, updates, and issue resolution using advanced technology.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-white max-w-7xl relative mx-auto px-6 py-20">
        <div className="rounded-3xl bg-white drop-shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Left Content */}
                <div className="relative space-y-3">
                    <div className="text-2xl md:text-3xl text-gray-900 font-bold">Partner with Us to Scale Your Business</div>
                    <p>Contact us for a customised dispatch plan tailored to your equipment, lanes, and rate goals so that you can drive with confidence</p>
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
