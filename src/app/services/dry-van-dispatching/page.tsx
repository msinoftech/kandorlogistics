import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL } from "@/lib/config";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
    title: "Get Professional Dry Van Dispatch Services In Your City ",
    description: "Our Dry Van service provides 24/7 support, streamlined paperwork management, and reliable load booking to help your business thrive.",
    keywords: "dry van dispatcher, dry van dispatch service",
    openGraph: {
      title: "Get Professional Dry Van Dispatch Services In Your City ",
      description: "Our Dry Van service provides 24/7 support, streamlined paperwork management, and reliable load booking to help your business thrive.",
      url: `${BASE_URL}/services/dry-van-dispatching`,
      siteName: `${APP_NAME}`,
      images: [
        {
          url: `${BASE_URL}/dry-vans.jpg`,
          width: 1200,
          height: 630,
          alt: "Get Professional Dry Van Dispatch Services In Your City ",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Get Professional Dry Van Dispatch Services In Your City ",
      description: "Our Dry Van service provides 24/7 support, streamlined paperwork management, and reliable load booking to help your business thrive.",
      images: [`${BASE_URL}/dry-vans.jpg`],
    },
    alternates: {
      canonical: `${BASE_URL}/services/dry-van-dispatching`,
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
    {
        // 1. WebSite Definition
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        "url": `${BASE_URL}`,
        "name": `${APP_NAME}`
    },
    {
        // 2. WebPage Definition for the Subpage
        "@type": "WebPage",
        "@id": `${BASE_URL}/services/dry-van-dispatching/#webpage`,
        "url": `${BASE_URL}/services/dry-van-dispatching/`,
        "name": "Dry Van Dispatch Services for Urgent Freight",
        "isPartOf": {"@id": `${BASE_URL}/#website`},
        "description": "Specialized dry van dispatching for urgent freight, small loads, and time-sensitive deliveries across key US areas.",
        "inLanguage": "en-US",
        "breadcrumb": {"@id": `${BASE_URL}/services/dry-van-dispatching/#breadcrumb`}
    },
    {
        // 3. Breadcrumb List
        "@type": "BreadcrumbList",
        "@id": `${BASE_URL}/services/dry-van-dispatching/#breadcrumb`,
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
            "item": `${BASE_URL}/services/`
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "Dry Van Dispatch Service"
        }
        ]
    },
    {
        // 4. Specific Service Definition (Hotshot Dispatch)
        "@type": "Service",
        "serviceType": "Dry Van Dispatch",
        "name": "Dry Van Dispatch Services",
        "description": "Managing and coordinating smaller and urgent deliveries using small to medium-duty trucks (often pulling flatbed trailers). Ideal for time-sensitive deliveries in construction, oil fields, and local freight needs.",
        "url": `${BASE_URL}/services/dry-van-dispatching/`,
        "provider": {
        "@type": "ShippingCompany",
        "name": `${APP_NAME}`,
        "url": `${BASE_URL}`,
        "logo": `${BASE_URL}/logo.png`
        },
        "areaServed": [
        {"@type": "State", "name": "Texas"},
        {"@type": "City", "name": "Chicago"},
        {"@type": "State", "name": "California"}
        ],
        "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Dry Van Service Offerings",
        "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Urgent Freight Coordination"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Small Load Management"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Back-Office Paperwork and Compliance"}}
        ]
        }
    }
    ]
};

export default function DryVanDispatchPage() {
  return (
    <>
    {/* Schema Markup */}
    <Script id="dry-van-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

    <section className="bg-white relative sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-12">
        <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-3xl md:text-4xl font-bold pb-12 text-gray-900">Dry Van Dispatch</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1">
                    <Image src="/Dry-Van-Dispatch.jpg" alt="dry van dispatcher" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold pb-6 text-gray-900">24/7 Dry Van Dispatch Support for Owner‑Operators & Fleet Companies</h2>
                    <p className="text-gray-700 leading-relaxed">At Kandor Logistics, our skilled Dry Van Dispatchers work 24/7 to secure high-paying loads, manage schedules, and handle paperwork efficiently for owner-operators and growing fleets. Let us manage the details so you can focus on driving.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
            {/* Heading Section */}
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">How Our Dry Van Dispatchers Simplify Your Trucking Operations</h2>
                <p className="text-gray-600">Trust our dedicated team to expertly manage your logistics every step of the way, freeing you to keep your eyes on the road rather than on paperwork.</p>
                <p className="text-gray-600">Benefits include:</p>
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* Left Image */}
                <div className="flex justify-center">
                    <Image src="/Dry-Van-Dispatchers-Simplify-Your-Trucking.jpg" alt="dry van dispatch service" width={600} height={400} className="w-full rounded-2xl shadow-lg max-w-full object-cover h-auto"/>
                </div>

                {/* Right Content */}
                <div className="space-y-4">
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-3 h-3 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-gray-700">Accurate and timely load scheduling</p>
                    </div>

                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-3 h-3 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-gray-700">Negotiating better rates</p>
                    </div>

                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-3 h-3 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-gray-700">Securing high-paying freight</p>
                    </div>

                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-3 h-3 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-gray-700">Handling all your paperwork and bills</p>
                    </div>
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-3 h-3 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-gray-700">24/7 support for assistance on the road</p>
                    </div>
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-3 h-3 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-gray-700">Making sure you meet all safety and delivery rules</p>
                    </div>
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-3 h-3 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-gray-700">Optimising dispatch routes to reduce empty miles and fuel costs</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-white relative py-12">
        <div className="max-w-7xl mx-auto px-6 space-y-18">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Trusted Dry Van Dispatching Solutions for Every Haul</h2>
                    <p className="text-gray-700 leading-relaxed">Our Dry Van Dispatch Solution is built to manage every type of load with accuracy, consistency, and care. We facilitate seamless communication among drivers, brokers, and shippers.  Our team handles every aspect, including route optimisation, improved turnaround times, and increased profitability. As the driving force behind successful trucking, we are dedicated to keeping your trucks rolling, loaded, and profitable.​</p>
                </div>
                <div className="flex-1">
                    <Image src="/Low-angle-delivery-man-with-package-list.jpg" alt="Trusted Dry Van Dispatching Solutions" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="order-2 md:order-1 flex-1">
                    <Image src="/Dry-Van-Dispatchers-Ensure-Maximum-Load.jpg" alt="Dry Van Dispatchers Ensure Maximum Load" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="order-1 md:order-2 flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">How Do Our Dry Van Dispatchers Ensure Maximum Load Efficiency?</h2>
                    <p className="text-gray-700 leading-relaxed">If profitability is your priority, efficiency is crucial to maximising every mile. You need dispatchers skilled in advanced logistics tools who can maintain your competitive edge through load-matching systems, real-time tracking, and data-driven insights. Our expert team ensures your operations run smoothly and profitably.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Custom Dispatch Strategies for Dry Van Trucking Companies</h2>
                    <p className="text-gray-700 leading-relaxed">Every trucking company has its own goals, and your dispatch strategy should reflect that. Kandor Logistics provides customised Dry Van Dispatch Solutions that fit your routes, equipment, and schedule. Whether you own one truck or a fleet, we align our dispatching approach with your capacity, preferences, and growth objectives. Our goal is simple: help you work smarter, make more money, and deliver on time, every time.</p>
                </div>
                <div className="flex-1">
                    <Image src="/Dispatch-Strategies-for-Dry-Van-Trucking-Companies.jpg" alt="Dispatch Strategies for Dry Van Trucking Companies" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>
        </div>
    </section>

    <section className="relative py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-18">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1">
                    <Image src="/Kandor-Logistics-Dry-Van-Dispatchers-Offer.jpg" alt="Kandor Logistics’ Dry Van Dispatchers Offer" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">What Do Kandor Logistics’ Dry Van Dispatchers Offer?</h2>
                    <p className="text-gray-700 leading-relaxed">With over a decade of industry experience, our Dry Van dispatching team brings a perfect blend of expertise, technology, and care to elevate your trucking operations.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" className="bg-white max-w-7xl mx-auto px-6 py-12">
        <div className="rounded-3xl bg-white drop-shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Left Content */}
                <div className="relative">
                    <div className="mt-6">
                        <div className="text-2xl md:text-3xl text-gray-900 font-bold">Partner with Us to Scale Your Business</div>
                        <p className="mt-3">Contact us for a customised dispatch plan tailored to your equipment, lanes, and rate goals so that you can drive with confidence</p>
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
          <div className="relative text-center pb-8">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
            </div>

            <FaqSection
              title="What Do Dry Van Dispatchers do?"
              content={`Dry Van Dispatchers combine industry expertise with technology to efficiently manage logistics. They secure high-paying loads, coordinate schedules, and handle documentation, allowing you to focus on driving and improving your business operations.`}
            />
            <FaqSection
              title="What should you look for in a dry van dispatch service?"
              content={`Is the dry van dispatch company meeting the requirements you expect from them? Means they have enough experience to secure high-paying freight, handle load scheduling, negotiate, and manage paperwork and bills, with 24/7 support on the road.`}
            />           
        </div>
    </section>

    </>
  );
}
