import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import { APP_NAME, BASE_URL, contactInfo } from "@/lib/config";
import AboutSection from "@/components/AboutSection";
import CounterSection from "@/components/CounterSection";
import WhoWeAre from "@/components/WhoWeAre";

export const metadata: Metadata = {
  title: "Kandoor Logistics - One-stop Dispatch Solution for owner-operators",
  description: "We are committed to simplifying trucking operations and increasing profitability for owner-operators and fleet companies",
  keywords: [ "logistics", "freight forwarding", "supply chain", "shipping", "customs brokerage", "cargo", "global transport", "Kandor",],
  openGraph: {
    title: "Kandoor Logistics - One-stop Dispatch Solution for owner-operators",
    description: "Meet the creators behind the fastest and most SEO-friendly web app platform.",
    images: [
      {
        url: `${BASE_URL}/about-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Kandoor Logistics - One-stop Dispatch Solution for owner-operators",
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
};

export default function about() {
  const { phone } = contactInfo;

  const aboutSchemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "url": `${BASE_URL}/about`,
        "name": "About Kandor Logistics",
        "inLanguage": "en-US",
        "description": "We are committed to simplifying trucking operations and increasing profitability for owner-operators and fleet companies",
        "isPartOf": {
          "@type": "WebSite",
          "url": `${BASE_URL}`,
          "name": `${APP_NAME}`,
        },
      },
      {
        "@type": "Organization",
        "name": `${APP_NAME}`,
        "url": `${BASE_URL}`,
        "logo": `${BASE_URL}/logo.png`,
        "foundingDate": "2019",
        "founder": {
          "@type": "Person",
          "name": "Kandor Logistics Team",
        },
        "description": "We are committed to simplifying trucking operations and increasing profitability for owner-operators and fleet companies",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": `${phone}`,
          "contactType": "Customer Support",
          "areaServed": "US",
          "availableLanguage": ["en", "es"],
        },
        "sameAs": [
          "https://www.facebook.com/kandorlogistics",
          "https://www.linkedin.com/company/kandorlogistics",
          "https://twitter.com/KandorLogistics",
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Houston, Texas",
          "addressRegion": "TX",
          "addressCountry": "US",
        },
      },
      {
        "@type": "AboutPage",
        "name": "About Kandor Logistics",
        "url": `${BASE_URL}/about`,
        "primaryImageOfPage": `${BASE_URL}/about-us1.1.webp`,
        "breadcrumb": {
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
              "name": "About",
              "item": `${BASE_URL}/about`,
            },
          ],
        },
      },
    ],
  };

  const counters = [
    {
      icon: "/delivery.svg",
      counter_value: "150+",
      caption: "Deliveries",
    },
    {
      icon: "/clients.svg",
      counter_value: "75+",
      caption: "Clients",
    },
    {
      icon: "/city-map.svg",
      counter_value: "30+",
      caption: "Cities Covered",
    },
    {
      icon: "/medal.svg",
      counter_value: "25+",
      caption: "Awards",
    },
  ];

  const workProcess = [
    {
      icon: "/documents.svg",
      title: "Request A Quote",
      content: "Contact us by calling or emailing directly for a personalized dispatching service tailored to your needs.",
    },
    {
      icon: "/call-back.svg",
      title: "We Reach Out",
      content: "Our team will call back from the office to discuss load preferences, routes, and essential required documents.",
    },
    {
      icon: "/boxes.svg",
      title: "Booking & Coordination",
      content: "Our office team finds the best-paying loads matching your criteria and confirms with you, while handling all communication with partners.",
    },
    {
      icon: "/delivery-box.svg",
      title: "Deliver Shipping",
      content: "We stay in touch and help to track your payment to ensure smooth delivery.",
    },
  ];

  return (
    <>
      {/* Schema added to the <head> */}
      <Script id="about-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchemaData) }}/>

      <div className="max-w-7xl mx-auto sm:pt-40 md:pt-40 lg:pt-40 pt-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h2 className="text-2xl text-gray-900 md:text-4xl font-bold">Meet Kandor Logistics: Your Trusted Dispatch Partner in the USA</h2>
          <p>At Kandor Logistics, we are proud to be the trusted backbone for owner-operators and fleet companies across the USA. Our goal is to simplify trucking operations so your business operates efficiently and profitably.</p>
        </div>
      </div>

      <section className="bg-white relative py-12">
        <AboutSection
          image="/about-us1.1.webp"
          title="About Kandor Logistics"
          content={`With over five years of experience, Kandor Logistics has evolved from a drayage dispatch provider at the Port of Texas to a comprehensive full-service dispatch and logistics partner. We now coordinate operations for owner-operators and fleets, and assist shippers and brokers nationwide.
          With over five years of experience, Kandor Logistics has evolved from a drayage dispatch provider at the Port of Texas to a comprehensive full-service dispatch and logistics partner. We serve owner-operators and fleets, and assist shippers and brokers nationwide.`}
          listTitle=""
          listItems={[]}
          showLink={false}
          contentStyle={{ backgroundColor: "#1e2939", color: "#fff", padding: "30px" }}
          titleClassName="text-3xl text-white md:text-4xl font-bold mb-4"
        />
      </section>

      <CounterSection
        counters={counters}
      />

      <section className="element-row section-process py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center space-y-3">
            <div className="text-2xl text-gray-900 md:text-4xl font-bold text-center">Our Work Process</div>
          </div>

          {/* Process Steps */}
          {workProcess.length > 0 && (
            <div className="mt-12 flow-root">
              <ol className="-mb-8">
                {workProcess.map((item, index) => {
                  const isLast = index === workProcess.length - 1;
                  return (
                    <li key={index} className="relative pb-8">
                      <div className="relative flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <span className="h-10 w-10 flex items-center justify-center rounded-full bg-indigo-50">
                            {item.icon && (
                              <Image
                                src={item.icon}
                                alt=""
                                width={20}
                                height={20}
                                className="h-5 w-5 object-contain"
                              />
                            )}
                          </span>
                        </div>
                        <div className="flex-1">
                          {item.title && (
                            <div className="font-semibold text-gray-900">{item.title}</div>
                          )}
                          {item.content && (
                            <p>{item.content}</p>
                          )}
                        </div>
                      </div>

                      {!isLast && (
                        <span className="absolute left-5 top-10 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                      )}
                    </li>
                  );
                })}
              </ol>
            </div>
          )}
        </div>
      </section>

      <WhoWeAre />
    </>
  );
}
