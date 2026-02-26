import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL } from "@/lib/config";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
    title: "Best Paying Reefer Trucking Dispatch Services for Owner-Operators",
    description: "Work with top-paying reefer dispatch companies. Our experienced refrigerated truck dispatchers provide reliable loads, 24/7 support, and complete logistics management for owner-operators.",
    keywords: "reefer dispatcher, reefer transport companies, reefer refrigerated truck dispatcher for owner operator, reefer dispatcher in Texas, reefer dispatcher California, reefer dispatcher in chicago",
    openGraph: {
      title: "Best Paying Reefer Trucking Dispatch Services for Owner-Operators",
      description: "Work with top-paying reefer dispatch companies. Our experienced refrigerated truck dispatchers provide reliable loads, 24/7 support, and complete logistics management for owner-operators.",
      url: `${BASE_URL}/services/reefer-dispatching`,
      siteName: `${APP_NAME}`,
      images: [
        {
          url: `${BASE_URL}/reefers-dispatch.jpg`,
          width: 1200,
          height: 630,
          alt: "Best Paying Reefer Trucking Dispatch Services for Owner-Operators",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Paying Reefer Trucking Dispatch Services for Owner-Operators",
      description: "Work with top-paying reefer dispatch companies. Our experienced refrigerated truck dispatchers provide reliable loads, 24/7 support, and complete logistics management for owner-operators.",
      images: [`${BASE_URL}/reefers-dispatch.jpg`],
    },
    alternates: {
      canonical: `${BASE_URL}/services/reefer-dispatching`,
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
        "@id": `${BASE_URL}/services/reefer-dispatching/#webpage`,
        "url": `${BASE_URL}/services/reefer-dispatching/`,
        "name": "Best Paying Reefer Trucking Dispatch Services for Owner-Operators",
        "isPartOf": {"@id": `${BASE_URL}/#website`},
        "description": "Work with top-paying reefer dispatch companies. Our experienced refrigerated truck dispatchers provide reliable loads, 24/7 support, and complete logistics management for owner-operators.",
        "inLanguage": "en-US",
        "breadcrumb": {"@id": `${BASE_URL}/services/reefer-dispatching/#breadcrumb`}
    },
    {
        // 3. Breadcrumb List
        "@type": "BreadcrumbList",
        "@id": `${BASE_URL}/services/reefer-dispatching/#breadcrumb`,
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
            "name": "Reefer Dispatch Service"
        }
        ]
    },
    {
        // 4. Specific Service Definition (Reefer Dispatch)
        "@type": "Service",
        "serviceType": "Reefer Dispatch",
        "name": "Best Paying Reefer Trucking Dispatch Services for Owner-Operators",
        "description": "Work with top-paying reefer dispatch companies. Our experienced refrigerated truck dispatchers provide reliable loads, 24/7 support, and complete logistics management for owner-operators.",
        "url": `${BASE_URL}/services/reefer-dispatching/`,
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
        "name": "Reefer Service Offerings",
        "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Urgent Freight Coordination"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Small Load Management"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Back-Office Paperwork and Compliance"}}
        ]
        }
    }
    ]
};

export default function ReeferDispatchPage() {
  return (
    <>
    {/* Schema Markup */}
    <Script id="reefer-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

    <section className="bg-white relative sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-12">
        <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-3xl md:text-4xl font-bold pb-12 text-gray-900">Reefer Dispatch</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1">
                    <Image src="/Reefer-Dispatch-Support-for-Trucking.jpg" alt="reefer dispatcher" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold pb-6 text-gray-900">24/7 Reefer Dispatch Support for Trucking Companies</h2>
                    <p className="text-gray-700 leading-relaxed">At Kandor Logistics, you get full dispatch support. Our team prioritises temperature-controlled freight and operates 24/7 to keep your refrigerated loads on schedule. We monitor every mile, maintain constant communication, and ensure your trucks deliver high-value reefer loads efficiently.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
            {/* Heading Section */}
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Benefits of Partnering with a Dedicated Reefer Dispatch Company</h2>
                <p className="text-gray-600">Working with a dedicated reefer dispatch team like Kandor Logistics makes things run more smoothly for owner-operators and fleet owners,  helping them succeed in the temperature-controlled transport business.</p>
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* Left Image */}
                <div className="flex justify-center">
                    <Image src="/Reefer-Dispatch-Company.jpg" alt="reefer transport companies" width={600} height={400} className="w-full object-cover rounded-2xl shadow-lg max-w-full h-auto"/>
                </div>

                {/* Right Content */}
                <div className="space-y-4">
                    <p className="text-gray-700">Key benefits include:</p>
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-3 h-3 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-gray-700">Nationwide access to temperature-controlled freight loads</p>
                    </div>

                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-3 h-3 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-gray-700">Real-time 24/7 communication and load monitoring</p>
                    </div>

                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-3 h-3 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-gray-700">Reduced empty miles and fuel costs</p>
                    </div>
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-3 h-3 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-gray-700">Transparent rate negotiation</p>
                    </div>
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-3 h-3 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-gray-700">Expert management of time-sensitive freight and documentation</p>
                    </div>
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-3 h-3 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-gray-700">Profit-focused services tailored to your refrigerated freight business</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-white relative py-12">
        <div className="max-w-7xl mx-auto px-6 space-y-18">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Reliable Reefer Dispatch Solutions for Refrigerated Freight</h2>
                    <p className="text-gray-700 leading-relaxed">Reefer dispatching is designed to handle he transportation of temperature‑sensitive freight, such as fresh produce, dairy, and pharmaceuticals, with precision and efficiency.  We manage everything from load booking to temperature compliance and paperwork, as well as route optimisation and tracking with our advanced tracking systems.​</p>
                </div>
                <div className="flex-1">
                    <Image src="/reefer-dispatch-solutions.jpg" alt="reefer refrigerated truck dispatcher for owner operator" width={600} height={400} className="rounded-xl shadow-md object-cover"/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="order-2 md:order-1 flex-1">
                    <Image src="/why-choose-professional-reefer-dispatch.jpg" alt="reefer dispatcher in Texas" width={600} height={400} className="rounded-xl shadow-md object-cover"/>
                </div>
                <div className="order-1 md:order-2 flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Why Choose Professional Reefer Dispatch Services?</h2>
                    <p className="text-gray-700 leading-relaxed">With refrigerated freight demand on the rise, professional dispatch services for reefer trucks help you secure consistent, profitable loads and maintain delivery integrity.  You can keep your attention on the road while dispatch experts handle the paperwork, plan your routes, match you with the best loads, and solve problems as they happen. This support helps your trucking business remain competitive and scalable in a changing logistics market.</p>
                </div>

            </div>
        </div>
    </section>

    <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* Left Image */}
                <div className="flex justify-center">
                    <Image src="/reefer-dispatchers-work-for-small-large.jpg" alt="reefer dispatcher California" width={600} height={400} className="w-full bject-cover rounded-2xl shadow-lg max-w-full h-auto"/>
                </div>

                {/* Right Content */}
                <div className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">How Our Reefer Dispatchers Work for Small & Large Fleets</h2>
                    <p className="text-gray-600">Our dispatch process is flexible and adapts to both single-truck owner-operators and growing refrigerated fleets. We customise solutions to align with your capacity, preferred routes, and delivery objectives. Using the latest logistics tools, we organise load schedules, handle carrier paperwork, and work out rates to help you stay on the road and earn more, using up-to-date information.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-white relative py-12">
        <div className="max-w-7xl mx-auto px-6 space-y-18">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">What Do Kandor Logistics’ Reefer Truck Dispatchers Offer?</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">Let us handle every detail of your reefer dispatch—from seamless back-office management to connecting you with the most profitable loads—so your business stays on track and thriving.</p>
                </div>
                <div className="flex-1">
                    <Image src="/kandor-logistics-reefer-truck-dispatchers-offer.jpg" alt="reefer dispatcher in chicago" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
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
              title="What is the role of Reefer Truck Dispatchers?"
              content={`They handle every detail of your reefer dispatch—from seamless back-office management to connecting you with the most profitable loads—so your business stays on track and thriving.`}
            />
            <FaqSection
              title="Why choose a Professional Dispatcher for your Reefer truck?"
              content={`Reefer trucks transport sensitive, temperature-controlled freight and require a dispatch expert to monitor each mile, maintain communication, and keep loads on schedule. Reefer truck dispatchers also identify high-value loads, match them to your equipment, plan routes, and manage paperwork. Their expertise helps your reefer truck stay competitive and maximise earnings.`}
            />           
            <FaqSection
              title="How can owner-operators find the highest-paying reefer loads?"
              content={`Owner-operators can target the temperature-sensitive freight markets where the opportunities are consistently strong. Specialised load boards, freight brokers, and direct contracts with shippers are key to consistently securing the highest-paying reefer loads and, alternatively, partnering with a dedicated reefer dispatcher who has the industry experience of using technology in searching for and securing reefer-specific loads, negotiating, and managing paperwork.​`}
            />                     
        </div>
    </section>
    </>
  );
}
