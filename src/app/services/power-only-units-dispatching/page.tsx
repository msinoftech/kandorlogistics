import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL, contactInfo } from "@/lib/config";
import ContactForm from "@/components/ContactForm";
import {FaqSection} from "@/components/FaqSection";

const { phone } = contactInfo;

export const metadata: Metadata = {
    title: "Power Only Dispatch Services | Owner-Operators & Fleets | Kandor Logistics",
    description: "Partner with Kandor Logistics' power-only dispatchers, serving single-unit operators and large fleets nationwide for logistics management, load sourcing, and back-office support",
    keywords: "dispatcher in California for owner operators, dispatcher in chicago for owner operators",
    alternates: {
        canonical: `${BASE_URL}/services/power-only-units-dispatching`,
    },
    openGraph: {
      title: "Power Only Dispatch Services | Owner-Operators & Fleets | Kandor Logistics",
      description: "Partner with Kandor Logistics' power-only dispatchers, serving single-unit operators and large fleets nationwide for logistics management, load sourcing, and back-office support",
      url: `${BASE_URL}/services/power-only-units-dispatching`,
      siteName: `${APP_NAME}`,
      images: [
        {
          url: `${BASE_URL}/power-only-units-dispatch.jpg`,
          width: 500,
          height: 500,
          alt: "Power Only Dispatch Services | Owner-Operators & Fleets",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Power Only Dispatch Services | Owner-Operators & Fleets | Kandor Logistics",
      description: "Partner with Kandor Logistics' power-only dispatchers, serving single-unit operators and large fleets nationwide for logistics management, load sourcing, and back-office support",
      images: `${BASE_URL}/power-only-units-dispatch.jpg`,
    }, 
};

const faqItems = [
    {
        title: "What does 'power only unit' mean in trucking?",
        content: `A power-only unit is a combination of a semi-truck tractor and driver. A shipper or third-party logistics company hires a carrier to haul their trailer. The carrier provides the truck and driver, who hook up and transport the preloaded trailer. This arrangement offers businesses flexibility and cost-efficiency, especially if they own trailers or need to move loads quickly using available trucking capacity.`,
    },
    {
        title: "What Do Power-Only Units Dispatchers Offer?",
        content: `Power-Only Units Dispatchers use advanced load sequencing to maximise weekly profitability by optimising partial and expedited shipments. They aim to reduce empty miles, increase net earnings per mile, and connect you with reliable partners.`,
    },
    {
        title: "What is the difference between power only and a trailer of your own?",
        content: `Power only when the trucking company provides a driver and a tractor to move pre-load trailers of shippers, brokers, or third parties. They own or lease that. This arrangement offers excellent flexibility, allowing tractors to be hired only when needed, reducing capital outlay and maintenance costs for trailers.​`,
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
        "@id": `${BASE_URL}/services/power-only-units-dispatching/#webpage`,
        "url": `${BASE_URL}/services/power-only-units-dispatching`,
        "name": "Power Only Units Dispatching",
        "isPartOf": {
            "@type": "WebSite",
            "url": `${BASE_URL}`,
            "name": `${APP_NAME}`
        },
        "description": "Partner with Kandor Logistics' power-only dispatchers, serving single-unit operators and large fleets nationwide for logistics management, load sourcing, and back-office support",
        "inLanguage": "en-US",
    },
    {
        "@type": "Organization",
        "name": `${APP_NAME}`,
        "url": `${BASE_URL}`,
        "primaryImageOfPage": `${BASE_URL}/power-only-units-dispatch.jpg`,
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
        "@id": `${BASE_URL}/services/power-only-units-dispatching/#breadcrumb`,
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
            "name": "Power Only Units Dispatching",
            "item": `${BASE_URL}/services/power-only-units-dispatching`
        }
        ]
    },
    {
        "@type": "Service",
        "serviceType": "Power Only Units Dispatch",
        "name": "Power Only Units Dispatching",
        "description": "Partner with Kandor Logistics' power-only dispatchers, serving single-unit operators and large fleets nationwide for logistics management, load sourcing, and back-office support",
        "url": `${BASE_URL}/services/power-only-units-dispatching`,
        "provider": {
            "@type": "ShippingCompany",
            "name": `${APP_NAME}`,
            "url": `${BASE_URL}`,
            "primaryImageOfPage": `${BASE_URL}/power-only-units-dispatch.jpg`
        },
        "areaServed": [
        {"@type": "State", "name": "Texas"},
        {"@type": "City", "name": "Chicago"},
        {"@type": "State", "name": "California"}
        ],
        "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Power Only Units Service Offerings",
        "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Urgent Freight Coordination"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Small Load Management"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Back-Office Paperwork and Compliance"}}
        ]
        }
    },
    {
        "@type": "FAQPage",
        "@id": `${BASE_URL}/services/power-only-units-dispatching/#faq`,
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

export default function PowerDispatchPage() {
  return (
    <>
    <Script id="power-only-units-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>
    
    <section className="bg-white relative sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-2xl text-gray-900 md:text-4xl font-bold mb-8">Power Only Units Dispatch</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1">
                    <Image src="/power-only-units-dispatch.jpg" alt="dispatcher in California for owner operators" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="flex-1 space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Maximise Your Fleet Efficiency with Power Only Units Dispatch Services</h2>
                    <p>Partnering with dedicated dispatching services enables owner-operators and fleet companies to concentrate on driving while reducing downtime and empty miles. Our expert team uses advanced load-matching systems to keep your trucks on the road, profitable, and compliant with industry standards nationwide.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 pt-6">
            {/* Heading Section */}
            <div className="max-w-4xl mx-auto text-center space-y-3 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Benefits for Truck Operators and Fleet Companies</h2>
                <p>To hire a dispatcher for your power-only units, you gain the advantages of expertise and technology to achieve your business goals.</p>
            </div>
            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* Left Image */}
                <div className="flex justify-center">
                    <Image src="/benefits-for-truck-operators-and-fleet-companies.jpg" alt="dispatcher in chicago for owner operators" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>

                {/* Right Content */}
                <div className="space-y-3">
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-full"></div>
                        <p>Receive 24/7 dedicated dispatch support, including real-time updates and trip tracking.</p>
                    </div>

                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-full"></div>
                        <p>Streamlined communication, Transparent pricing, and fast load assignment</p>
                    </div>
                    
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-full"></div>
                        <p>Save on costs related to trailer ownership, purchase, depreciation, and maintenance.</p>
                    </div>
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-full"></div>
                        <p>Focus on driving while compliance, scheduling, and support are managed for you.</p>
                    </div>
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-full"></div>
                        <p>Enjoy the flexibility to operate with a single tractor or a large fleet and maximise your earning potential.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-white relative py-12">
        <div className="max-w-7xl mx-auto px-6 space-y-18">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1 space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Why Choose a Dispatcher for Your Power-Only Units?</h2>
                    <p>With industry expertise, the Power Only Units Dispatcher matches your tractors to loads that require only a truck, not a trailer.</p>
                    <p>Our team streamlines your trip planning and ensures every asset works at its best, whether you have a single unit or an entire fleet. We secure top-paying loads, negotiate with brokers or shippers, and handle all the paperwork for you. This gives you the freedom to drive; don’t wait for freight.</p>
                </div>
                <div className="flex-1">
                    <Image src="/choose-a-dispatcher.jpg" alt="Why Choose a Power Dispatcher" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="order-2 md:order-1 flex-1">
                    <Image src="/comprehensive-power-only-units-dispatch.jpg" alt="Power Only Units Dispatch" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="order-1 md:order-2 flex-1 space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What is the Comprehensive Power-Only Units Dispatch Solution?</h2>
                    <p>Our dispatching solution offers comprehensive support for trucking companies and owner-operators using power-only units to haul trailers from shippers and brokers. We take care of every detail—from securing the right loads and mapping efficient routes to managing compliance and paperwork—so you can focus on the road ahead. You also benefit from flexible lane options and 24/7 support to minimise downtime, reduce empty miles, optimise fuel savings, and improve resource utilisation.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
            {/* Heading Section */}
            <div className="max-w-4xl mx-auto text-center space-y-3 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">How does our Power Only Units Dispatching service work?</h2>
                <p>We tackle the unique hurdles of this niche, turning the search for the perfect load into a smooth, hassle-free experience.</p>
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* Left Image */}
                <div className="flex justify-center">
                    <Image src="/power-only-units-dispatching-service-work.jpg" alt="Power Only Units Dispatching service work" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>

                {/* Right Content */}
                <div className="space-y-3">
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-full"></div>
                        <p>We review your equipment, preferred lanes, drivers’ schedules, and business goals.​</p>
                    </div>

                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-full"></div>
                        <p>We register your business and connect you to our load network based on your dispatch preferences.</p>
                    </div>
                    
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-full"></div>
                        <p>We find and match loads to your criteria, then coordinate scheduling with you.</p>
                    </div>
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-full"></div>
                        <p>We coordinate trailer, pickup, and delivery details once you accept the loads.</p>
                    </div>
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-full"></div>
                        <p>We provide administrative support, handle documentation, coordinate billing, and track compliance.</p>
                    </div>
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-full"></div>
                        <p>We also search for follow-up loads to minimise empty miles.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-3 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What Do Kandor Logistics Power-Only Units Dispatchers Offer?</h2>
                <p>We guide you through smart load sequencing so you can turn every week into a profitable one, making the most of partials and expedited drops. Our mission is to cut down empty miles, boost your net per mile, and link you with partners you can count on.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Item 1 */}
                <div className="bg-gray-100 rounded-2xl shadow p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-red-600 mb-2">Load sourcing & rate negotiation:</h3>
                    <p>We search for the right loads across multiple platforms and negotiate for the best rates, ensuring every mile is profitable.</p>
                </div>

                {/* Item 2 */}
                <div className="bg-gray-100 rounded-2xl shadow p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-red-600 mb-2">Paperwork & compliance management</h3>
                    <p>We handle all paperwork, including broker packets, rate confirmations, and invoices, to ensure prompt payment.</p>
                </div>

                {/* Item 3 */}
                <div className="bg-gray-100 rounded-2xl shadow p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-red-600 mb-2">Route planning & optimisation</h3>
                    <p>We book loads based on your preferred locations, truck type, and available hours, optimising routes to minimise empty miles and maximise profitability.</p>
                </div>

                {/* Item 4 */}
                <div className="bg-gray-100 rounded-2xl shadow p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-red-600 mb-2">Back Office support</h3>
                    <p>Our expertise and technology let you focus on driving and enjoy a smoother journey.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-white max-w-7xl mx-auto px-6 py-12">
        <div className="rounded-3xl bg-white drop-shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
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

    <section className="py-12 bg-gray-50">
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
