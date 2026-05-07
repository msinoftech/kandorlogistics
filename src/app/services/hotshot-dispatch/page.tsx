import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL, contactInfo } from "@/lib/config";
import ContactForm from "@/components/ContactForm";
import {FaqSection} from "@/components/FaqSection";

const { phone, logo } = contactInfo;

export const metadata: Metadata = {
  title: "Nationwide Hotshot Dispatch Services for Owner-Operators | Kandor Logistics",
  description: "Work with a dedicated hotshot dispatcher at Kandor Logistics. We offer reliable services with 24/7 back-office support to CDL and non-CDL hotshot owner-operators nationwide.",
  keywords: "hotshot dispatch, hotshot dispatch services, find a hotshot dispatcher, dispatch services for hotshot in texas, hotshot trucking dispatch california, hotshot trucking dispatch services chicago, non cdl hotshot dispatch services",
  alternates: {
    canonical: `${BASE_URL}/services/hotshot-dispatch`,
  },
  openGraph: {
    title: "Nationwide Hotshot Dispatch Services for Owner-Operators | Kandor Logistics",
    description: "Work with a dedicated hotshot dispatcher at Kandor Logistics. We offer reliable services with 24/7 back-office support to CDL and non-CDL hotshot owner-operators nationwide.",
    url: `${BASE_URL}/services/hotshot-dispatch`,
    siteName: `${APP_NAME}`,
    images: [
      {
        url: `${BASE_URL}/hotshots.jpg`,
        width: 500,
        height: 500,
        alt: "Nationwide Hotshot Dispatch Services for Owner-Operators",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nationwide Hotshot Dispatch Services for Owner-Operators | Kandor Logistics",
    description: "Work with a dedicated hotshot dispatcher at Kandor Logistics. We offer reliable services with 24/7 back-office support to CDL and non-CDL hotshot owner-operators nationwide.",
    images: `${BASE_URL}${logo}`,
  },
  
};

const faqItems = [
    {
        title: "What is a hotshot dispatching, and how does it work?",
        content:`Hotshot dispatching handles urgent, smaller deliveries with small- or medium-duty trucks, often using flatbed trailers. It is ideal for industries needing fast, flexible transportation, such as construction and oil and gas. Hotshot dispatchers quickly find and assign loads to drivers, owner-operators, or small fleet owners. They also handle paperwork and provide back-office support to ensure timely deliveries.`,
    },
    {
        title: "What are the basic steps to find reliable hotshot dispatch services in the USA?",
        content: `Look for hotshot dispatchers with industry experience and knowledge of DOT regulations. Verify their MC numbers, check references, and review customer feedback on platforms like LinkedIn and Google. Reliable services also offer 24/7 support and transparent, reasonable pricing.`,
    },
    {
        title: "How is hotshot dispatching profitable for owner-operators?",
        content: `Hotshot dispatching is profitable for owner-operators because of lower startup costs, flexible load selection, and the ability to operate independently. Dispatchers handle logistics and reduce deadhead miles, allowing owner-operators to focus on driving and increasing revenue.`,
    },
    {
        title: "How does a hotshot dispatcher differ from a freight dispatcher?",
        content: `Freight dispatchers primarily manage larger commercial loads for long-haul or regional transport using dry vans, reefers, or tankers. Hotshot dispatchers handle urgent loads for small to medium-duty trucks, such as flatbed trailers, typically on shorter or local routes.`,
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
        "@id": `${BASE_URL}/services/hotshot-dispatch/#webpage`,
        "url": `${BASE_URL}/services/hotshot-dispatch`,
        "name": "Hotshot Dispatch Services",
        "isPartOf": {
            "@type": "WebSite",
            "url": `${BASE_URL}`,
            "name": `${APP_NAME}`
        },
        "description": "Work with a dedicated hotshot dispatcher at Kandor Logistics. We offer reliable services with 24/7 back-office support to CDL and non-CDL hotshot owner-operators nationwide.",
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
        "@id": `${BASE_URL}/services/hotshot-dispatch/#breadcrumb`,
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
            "name": "Hotshot Dispatch Service",
            "item": `${BASE_URL}/services/hotshot-dispatch`
        }
        ]
    },
    {
        "@type": "Service",
        "serviceType": "Hotshot Dispatch",
        "name": "Hotshot Dispatch Services",
        "description": "Work with a dedicated hotshot dispatcher at Kandor Logistics. We offer reliable services with 24/7 back-office support to CDL and non-CDL hotshot owner-operators nationwide.",
        "url": `${BASE_URL}/services/hotshot-dispatch`,
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
        "name": "Hotshot Dispatch Services",
        "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Urgent Freight Coordination"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Small Load Management"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Back-Office Paperwork and Compliance"}}
        ]
        }
    },
    {
        "@type": "FAQPage",
        "@id": `${BASE_URL}/services/hotshot-dispatch/#faq`,
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


export default function HotshotDispatchPage() {
  return (
    <>
    <Script id="hotshot-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

    <section className="bg-white relative sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl text-gray-900 md:text-4xl font-bold mb-8">Hotshot Dispatch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1">
                    <Image src="/hotshots.jpg" alt="hotshot dispatch services" width={600} height={350} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="flex-1 space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Hotshot Dispatch Services That Keep You Moving Forward</h2>
                    <p>Kandor Logistics provides reliable, time-sensitive hotshot dispatch services for owner-operators and small fleets. We provide 24/7 back-office support, intelligent routing, and tailored load matching to maximise your earnings and minimise empty miles.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
            {/* Heading Section */}
            <div className="max-w-4xl mx-auto text-center space-y-3 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Why Choose Us for Hotshot Trucking?</h2>
                <p>Hotshot trucking demands speed, precision, and strong cash flow. Our dispatchers represent you in negotiations, track your lane preferences and equipment, and secure loads that align with your schedule and revenue goals. We manage all back-office tasks with transparent terms and no forced dispatch so that you can stay focused on the road.</p>
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* Left Image */}
                <div className="flex justify-center">
                    <Image src="/why-choose-us-for-hotshot-trucking.jpg" alt="find a hotshot dispatcher" width={600} height={400} className="w-full rounded-2xl object-cover shadow-lg max-w-full h-auto"/>
                </div>

                {/* Right Content */}
                <div className="space-y-3">
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-full"></div>
                        <p>Load sourcing using top marketplaces and direct broker networks.​</p>
                    </div>

                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-full"></div>
                        <p>Negotiations that prioritise your net revenue</p>
                    </div>

                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-full"></div>
                        <p>Back-office support, including rate cons, packets, carrier setup, and status updates for hassle-free trips.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-white relative py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-18">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1 space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What Sets Us Apart as the Best Dispatcher for Hotshot Drivers?</h2>
                    <p>A top hotshot dispatcher is more than a load-finder; it is a business partner focused on your ROI, safety, and downtime. Our dispatchers monitor lane rates, broker credentials, and payment timelines to connect you with quality freight and reliable partners. We maintain consistent communication and plan routes that comply with Hours of Service and fuel efficiency requirements.</p>
                    <p>When technology and human expertise come together, it means more consistent work, better lanes, and fewer empty miles.​</p>
                </div>
                <div className="flex-1">
                    <Image src="/best-dispatcher-for-hotshot-drivers.jpg" alt="best dispatcher for hotshot drivers" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="order-2 md:order-1 flex-1">
                    <Image src="/hotshot-dispatch-companies.jpg" alt="hotshot dispatch companies for owner operators" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="order-1 md:order-2 flex-1 space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">How Do Hotshot Dispatch Companies Help Owner-Operators Scale?</h2>
                    <p>Owner-operators require predictable revenue, efficient operations, and control over their business. Kandor Logistics supports these needs by managing administrative tasks and paperwork to reduce idle time. We provide end-to-end support from tender to proof of delivery, consistently source suitable loads, and ensure transparent terms and clear communication.</p>
                </div>

            </div>
        </div>
    </section>

    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
            {/* Heading Section */}
            <div className="max-w-4xl mx-auto text-center space-y-3 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">CDL vs. Non‑CDL Hotshot Dispatch: Key Differences</h2>
                <p>Choosing between CDL and non‑CDL hotshot setups affects the types of loads you can book, insurance requirements, and earning potential. Non‑CDL operations typically use lighter equipment for short routes, offering greater agility and lower startup costs. CDL hotshot expands your freight options and can provide access to higher-paying lanes for heavier or specialised loads.</p>
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* Left Image */}
                <div className="flex-1 relative">
                    <Image src="/cdl-hotshot-dispatch.jpg" alt="non cdl hotshot dispatch" width={600} height={400} className="w-full rounded-2xl shadow-lg max-w-full h-auto"/>
                </div>

                {/* Right Content */}
                <div className="flex-1 relative space-y-3">
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-full"></div>
                        <p>Non‑CDL: Focus on faster, local, and regional loads, including selective partials and time-critical freight.​</p>
                    </div>

                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-full"></div>
                        <p>CDL: Provides access to heavier and specialised hotshot freight with higher rate potential.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-white relative py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-18">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1 space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What Should You Look for in a Hotshot Dispatcher?</h2>
                    <p>When selecting a hotshot dispatcher, consider more than just price. Evaluate their negotiation skills, broker network, fee transparency, and operational expertise. A professional dispatcher keeps accurate records of your equipment and lanes and communicates load options clearly.</p>
                    <h3 className="text-xl font-bold text-gray-900">Who Can Work With Us?</h3>
                    <p>Owner-operators,</p>
                    <p>Small Fleet Owners</p>
                    <p>Fleet Companies</p>
                    <p>Hotshot Drivers</p>
                </div>
                <div className="relative">
                    <Image src="/look-for-in-a-hotshot-dispatcher.jpg" alt="Hotshot Dispatch" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>
        </div>
    </section>

    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-3 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What Do Kandor Logistics&apos; Hotshot Dispatchers Offer?</h2>
                <p>Our team advises on load sequencing to help you build profitable weeks, optimising utilisation with partials and expedited drops. We work to reduce empty miles, increase your net per mile, and connect you with reliable partners.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Item 1 */}
                <div className="bg-gray-100 rounded-2xl shadow p-12 hover:shadow-lg transition">
                    <div className="text-xl font-semibold text-red-600 mb-2">Load sourcing & rate negotiation:</div>
                    <p>We search across multiple platforms to pick the right loads and negotiate the best rates, ensuring every mile is profitable.</p>
                </div>

                {/* Item 2 */}
                <div className="bg-gray-100 rounded-2xl shadow p-12 hover:shadow-lg transition">
                    <div className="text-xl font-semibold text-red-600 mb-2">Paperwork & compliance management</div>
                    <p>We handle all paperwork, including broker packets, rate confirmations, and invoices, to ensure prompt payment.</p>
                </div>

                {/* Item 3 */}
                <div className="bg-gray-100 rounded-2xl shadow p-12 hover:shadow-lg transition">
                    <div className="text-xl font-semibold text-red-600 mb-2">Route planning & optimisation</div>
                    <p>We book loads based on your preferred locations, truck type, and available hours, optimising routes to minimise empty miles and maximise profitability.</p>
                </div>

                {/* Item 4 */}
                <div className="bg-gray-100 rounded-2xl shadow p-12 hover:shadow-lg transition">
                    <div className="text-xl font-semibold text-red-600 mb-2">Back Office support</div>
                    <p>Our expertise and technology let you focus on driving and enjoy a smoother journey.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-white max-w-7xl relative mx-auto px-6 py-20">
        <div className="rounded-3xl bg-white drop-shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Left Content */}
                <div className="relative">
                    <div className="space-y-3">
                    <div className="text-2xl text-gray-900 md:text-3xl font-bold">Partner with Us to Scale Your Business</div>
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
