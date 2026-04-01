import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL } from "@/lib/config";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
    title: "Trusted Box Truck Dispatcher for owner operators",
    description: "Our expertise in box truck dispatch services for owner-operators and fleet companies provides route optimization, real-time tracking, and smooth operations to ensure maximum earning potential.",
    keywords: "dispatcher for box trucks, box truck dispatcher, box truck dispatcher in texas, box truck dispatcher calofornia, box truck dispatcher chicago, trucking dispatch companies, best local trucking companies for owner operators, best paying trucking companies for owner operators, best trucking dispatch companies, trucking dispatcher in texas, trucking dispatcher in california, trucking dispatcher chicago",
    openGraph: {
      title: "Trusted Box Truck Dispatcher for owner operators",
      description: "Our expertise in box truck dispatch services for owner-operators and fleet companies provides route optimization, real-time tracking, and smooth operations to ensure maximum earning potential.",
      url: `${BASE_URL}/services/box-truck-dispatching`,
      siteName: `${APP_NAME}`,
      images: [ 
        {
          url: `${BASE_URL}/box-trucks.jpg`,
          width: 1200,
          height: 630,
          alt: "Trusted Box Truck Dispatcher for owner operators",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Trusted Box Truck Dispatcher for owner operators",
      description: "Our expertise in box truck dispatch services for owner-operators and fleet companies provides route optimization, real-time tracking, and smooth operations to ensure maximum earning potential.",
      images: [`${BASE_URL}/box-trucks.jpg`],
    },
    alternates: {
      canonical: `${BASE_URL}/services/box-truck-dispatching`,
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
          "@id": `${BASE_URL}/services/box-truck-dispatching/#webpage`,
          "url": `${BASE_URL}/services/box-truck-dispatching/`,
          "name": "Box Truck Dispatch Services for Urgent Freight",
          "isPartOf": {"@id": `${BASE_URL}/#website`},
          "description": "Specialized box truck dispatching for urgent freight, small loads, and time-sensitive deliveries across key US areas.",
          "inLanguage": "en-US",
          "breadcrumb": {"@id": `${BASE_URL}/services/box-truck-dispatching/#breadcrumb`}
      },
      {
          // 3. Breadcrumb List
          "@type": "BreadcrumbList",
          "@id": `${BASE_URL}/services/box-truck-dispatching/#breadcrumb`,
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
              "name": "Box Truck Dispatch Service"
          }
          ]
      },
      {
          // 4. Specific Service Definition (Hotshot Dispatch)
          "@type": "Service",
          "serviceType": "Box Truck Dispatch",
          "name": "Box Truck Dispatch Services",
          "description": "Managing and coordinating smaller and urgent deliveries using small to medium-duty trucks (often pulling flatbed trailers). Ideal for time-sensitive deliveries in construction, oil fields, and local freight needs.",
          "url": `${BASE_URL}/services/box-truck-dispatching/`,
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
          "name": "Box Truck Service Offerings",
          "itemListElement": [
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Urgent Freight Coordination"}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Small Load Management"}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Back-Office Paperwork and Compliance"}}
          ]
          }
      }
      ]
};

export default function BoxTruckDispatchPage() {
  return (
    <>
    {/* Schema Markup */}
    <Script id="box-truck-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>
    
    <section className="bg-white relative sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-gray-900 md:text-4xl font-bold mb-8">Box Truck Dispatch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div className="flex-1">
                    <Image src="/box-truck-dispatch-support-for-trucking.jpg" alt="dispatcher for box trucks" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="flex-1 space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">24/7 Box Truck Dispatch Support for Trucking Companies and Independent Drivers</h2>
                    <p>Our 24/7 support enables trucking companies and independent operators to secure every load and opportunity. Box Truck Dispatching Services encompass profitable load identification, paperwork management, and communication facilitation during transit. Let our team help maintain operational efficiency and support business growth.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
            {/* Heading Section */}
            <div className="max-w-4xl mx-auto text-center space-y-3 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">How a Professional Box Truck Dispatch Company Streamlines Operations and Increases Earnings</h2>
                <p>Partnering with a professional dispatching firm gives your business access to logistics expertise, advanced tools, and reliable operational support.</p>
                <p>How can a skilled dispatcher benefit your trucking business?</p>
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* Left Image */}
                <div className="flex justify-center">
                    <Image src="/Professional-Box-Truck-Dispatch-Company.jpg" alt="box truck dispatcher" width={600} height={400} className="w-full rounded-2xl object-cover shadow-lg max-w-full h-auto"/>
                </div>

                {/* Right Content */}
                <div className="space-y-3">
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Optimise routes and schedule loads efficiently.​</p>
                    </div>

                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Negotiate effectively with trusted brokers and shippers.</p>
                    </div>
                    
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Provide real-time communication and load tracking.</p>
                    </div>
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Plan routes to reduce fuel costs and prevent delays.</p>
                    </div>
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Ensure timely updates and load visibility.</p>
                    </div>
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Maximise truck utilisation to increase earnings.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-white relative py-12">
        <div className="max-w-7xl mx-auto px-6 space-y-18">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1 space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Dedicated Dispatchers for Your Box Truck Fleet</h2>
                    <p>Having a dedicated dispatcher for your box trucks means you always have someone to handle everything: negotiating top-paying loads, monitoring routes, coordinating shipments, and managing communication. This role also enables innovative load planning, reduces downtime, and improves delivery efficiency, resulting in higher margins and greater operational consistency.</p>
                </div>
                <div className="flex-1">
                    <Image src="/Dispatchers-for-Your-Box-Truck-Fleet.jpg" alt="best paying trucking companies for owner operators" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="order-2 md:order-1 flex-1">
                    <Image src="/Operations-with-Our-Expert-Box-Truck-Dispatch-Team.jpg" alt="best trucking dispatch companies" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="order-1 md:order-2 flex-1 space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Simplify Operations with Our Expert Box Truck Dispatch Team</h2>
                    <p>Managing daily routes, paperwork, and load tracking can complicate your operations as your business grows. To support your fleet’s expansion, we also scale our dispatching support with modern tools, load boards, and industry insights. Our expert team works to simplify your workflow, reduce empty miles, and keep your business growing.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1 space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Why Growing Trucking Companies Prefer Box Truck Dispatch Service?</h2>
                    <p>Time is money in every business. That is why savvy turn to professional Box Truck Dispatch Services to handle load booking, negotiations, and compliance. This lets them focus on growing their fleet.  The result is steady cash flow, higher productivity, and a clear road to expansion.</p>
                </div>
                <div className="flex-1">
                    <Image src="/Why-Growing-Trucking-Companies-Prefer-Box-Truck-Dispatch.jpg" alt="trucking dispatch companies" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>

        </div>
    </section>

    <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">            

            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* Left Image */}
                <div className="flex justify-center">
                    <Image src="/Kandor-Logistics'-Box-Truck-Dispatchers.jpg" alt="trucking dispatcher in texas" width={600} height={400} className="w-full rounded-2xl object-cover shadow-lg max-w-full h-auto"/>
                </div>

                {/* Right Content */}
                <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What Do Kandor Logistics Box Truck Dispatchers Offer?</h2>
                    <p>At Kandor Logistics, our skilled box truck dispatch team provides 24/7 support, helping drivers and fleet operators achieve maximum efficiency and consistent revenue through professional dispatch management.
                    </p>
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
                    <div className="text-2xl md:text-3xl text-gray-900 md:text-4xl font-bold">Partner with Us to Scale Your Business</div>
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

            <FaqSection
              title="What does a box truck dispatcher do?"
              content={`A dedicated dispatcher oversees daily routes, paperwork, and load tracking to streamline your workflow. They apply industry expertise and use modern tools and load boards to ensure efficiency.`}
            />
            <FaqSection
              title="How to find the best box truck dispatcher?"
              content={`A simple way is to go online and search for “box truck dispatcher near me” to access local service listings, industry directories, and dispatcher networks. Prioritise dispatchers or companies with box truck experience, transparent pricing, and positive driver reviews. Additionally, assess their technology expertise, load-sourcing strategies, and communication methods.`}
            />
            <FaqSection
              title="How to make a box truck profitable?"
              content={`Operating a profitable box truck business as a single owner requires prioritising high-paying, consistent loads from sources such as load boards, local delivery contracts, and dispatchers. Efficient route planning is essential to minimise empty miles and fuel costs, while regular truck maintenance helps prevent costly breakdowns. Partnering with a dedicated dispatcher can facilitate the expansion of specialised services, including expedited deliveries, moving assistance, niche cargo, and back-office logistics management. Monitoring expenses closely and combining partial loads when feasible can further maximise revenue per trip.`}
            />
           
        </div>
    </section>
    </>
  );
}
