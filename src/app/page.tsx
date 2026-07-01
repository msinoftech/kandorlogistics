import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL, contactInfo } from "@/lib/config";
import Link from "next/link";

import { blogs } from "@/lib/data";
import { testimonials } from "@/lib/testimonials";
import { whyhireus } from "@/lib/whyhireus";

import BlogCard from "@/components/BlogCard";
import ContactForm from "@/components/ContactForm";
import ContactSection from "@/components/ContactSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import WhyHireSection from "@/components/WhyhireSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import {FaqSection} from "@/components/FaqSection";
import HeroLayout from "@/components/HeroLayout";
import ServiceCard from "@/components/ServiceCard";

const { phone } = contactInfo;

export const metadata: Metadata = {
  title: `Trucking Dispatch Company in Texas | Kandor Logistics`,
  description: "Kandor Logistics, a dedicated team of truck dispatchers, provides 24/7 back-office support for owner-operators and fleets. Get a free quote today!",
  keywords: [ "logistics", "freight forwarding", "supply chain", "shipping", "customs brokerage", "cargo", "global transport", "Kandor",],
  alternates: {
    canonical: `${BASE_URL}`,
  },
  openGraph: {
    title: `Trucking Dispatch Company in Texas | Kandor Logistics`,
    description: "Kandor Logistics, a dedicated team of truck dispatchers, provides 24/7 back-office support for owner-operators and fleets. Get a free quote today!",
    url: `${BASE_URL}`,
    type: "website",
    siteName: `${APP_NAME}`,
    locale: "en_US",
    images: [
      {
        url: `${BASE_URL}/about-us1.1.jpg`,
        width: 500,
        height: 500,
        alt: "A large cargo ship being loaded at a bustling port.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@KandorLogistics",
    creator: "@KandorLogistics",
    title: "Trucking Dispatch Company in Texas | Kandor Logistics",
    description: "Kandor Logistics, a dedicated team of truck dispatchers, provides 24/7 back-office support for owner-operators and fleets. Get a free quote today!",
    images: `${BASE_URL}/about-us1.1.jpg`,
  },
};

const faqItems = [
  {
    title:"Why Outsource the Dispatch?",
    content:`Outsourcing trucking dispatch services offers several advantages:
      <ul>
        <li>1. It is cost-efficient to hire cheaper labor from overseas countries.</li>
        <li>2. Professional dispatch availability for 24/7, ensuring better load management.</li>
        <li>3. Accessibility to experienced dispatchers, who can do load negotiations, route optimization, and compliance management in a professional way.</li>
        <li>4. Trucking companies can focus on their core operations while dispatch work can be handled by professional dispatchers offshore.</li>
      </ul>`,
  },
  {
    title:"What Security Protocols Are Followed While Dispatching?",
    content:`For the security and safety of operations, dispatch follows strict protocols:
      <ul>
        <li>1 . Secure servers and encrypted communication channels are used for data protection.</li>
        <li>2. To ensure all the drivers follow FMCSA and DOT transport regulations</li>
        <li>3. Regular checks to ensure driver’s license, truck insurance and licenses are up to date in the system.</li>
        <li>4. Verification of brokers to prevent fraud or late payments.</li>
        <li>5. GPS tracking and ELD integration to monitor driver tracking and their driving records.</li>
      </ul>`,
  },
  {
    title:"How to Ensure a Smooth Transition?",
    content:`Proper planning is required to ensure a smooth transition.
      <ul>
        <li>1. Start with partial outsourcing and proper training before full transition of dispatch operations</li>
        <li>2. The driver and in-house team should be informed about the new dispatch.</li>
        <li>3. Access to TMS, tracking software, and other required tools should be integrated with the remote Team.</li>
        <li>4. Provide proper training & support to start a smooth transition with the new dispatch processes.</li>
      </ul>`,
  },
  {
    title:"Understanding of dispatching process",
    content:`Knowing how to assign loads to drivers, considering factors like route optimization, driver availability, and delivery deadlines.`,
  },
];

export default function HomePage() {

  const homeschemaData = {
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
        }
      },
      {
        "@type": "WebPage",
        "url": `${BASE_URL}`,
        "name": "Global Freight & Supply Chain Management - Home",
        "inLanguage": "en-US",
        "description": "Kandor Logistics, a dedicated team of truck dispatchers, provides 24/7 back-office support for owner-operators and fleets. Get a free quote today!"
      },
      {
        "@type": "Organization",
        "name": `${APP_NAME}`,
        "url": `${BASE_URL}`,
        "primaryImageOfPage": `${BASE_URL}/about-us1.1.jpg`,
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
        "@type": "LocalBusiness",
        "name": `${APP_NAME} - Texas Hub`,
        "url": `${BASE_URL}/locations/texas`,
        "telephone": `${phone}`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Houston",
          "addressRegion": "TX",
          "addressCountry": "US"
        },
        "serviceType": "Freight Forwarding and Logistics"
      },
      {
        "@type": "LocalBusiness",
        "name": `${APP_NAME} - Chicago Hub`,
        "url": `${BASE_URL}/locations/chicago`,
        "telephone": `${phone}`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chicago",
          "addressRegion": "IL",
          "addressCountry": "US"
        },
        "serviceType": "Freight Forwarding and Logistics"
      },
      {
        "@type": "LocalBusiness",
        "name": `${APP_NAME} - California Hub`,
        "url": `${BASE_URL}/locations/california`,
        "telephone": `${phone}`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Los Angeles",
          "addressRegion": "CA",
          "addressCountry": "US"
        },
        "serviceType": "Freight Forwarding and Logistics"
      },
      {
        "@type": "FAQPage",
        "@id": `${BASE_URL}/#faq`,
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

  return (
      <>
      {/* Add Structured Data for Home Page */}
      <Script id="homepage-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeschemaData, null, 2),}}/>

      <HeroLayout />

      <StatsSection />

      <section className="relative overflow-hidden py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl text-gray-900 md:text-4xl font-bold text-center">Our Best Trucking Dispatching Services</h2>
            <p>We are one of the best-paying trucking dispatch companies for owner-operators, providing dedicated 24/7 personalized support to help reduce your workload and allow you to focus solely on the road.  While knowing and managing logistics expertly locally, our team of professional truck dispatchers deals.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
              <ServiceCard
                title="Hotshot Dispatch"
                excerpt="Kandor Logistics streamlines your business with expert hotshot dispatch services, managing bookings and back-office tasks to boost efficiency and growth."
                link={`${BASE_URL}/services/hotshot-dispatch`}
              />
              <ServiceCard
                title="Flatbeds/Step Deck Dispatch"
                excerpt="Kandor Logistics connects flatbed carriers with profitable long and short-haul loads, ensuring steady work, fair earnings, and efficient logistics management."
                link={`${BASE_URL}/services/flatbeds-step-deck-dispatch`}
              />
              <ServiceCard
                title="Power Only Units Dispatch"
                excerpt="Kandor Logistics supports power-only truckers with reliable dispatch services, load sourcing, and affordable trailer rentals to keep operations running smoothly."
                link={`${BASE_URL}/services/power-only-units-dispatching`}
              />
              <ServiceCard
                title="Low Boy Dispatch"
                excerpt="Kandor Logistics connects lowboy carriers with bulk shipment projects, ensuring steady loads, efficient dispatching, and helping increase carrier revenue by 25%."
                link={`${BASE_URL}/services/low-boy-dispatching`}
              />
              <ServiceCard
                title="Box Truck Dispatch"
                excerpt="Kandor Logistics provides steady box truck loads daily, ensuring your truck stays profitable and productive while we handle all dispatching needs."
                link={`${BASE_URL}/services/box-truck-dispatching`}
              />
              <ServiceCard
                title="Dry Van Dispatch"
                excerpt="Kandor Logistics specializes in dry van dispatch, optimizing routes, reducing fuel costs, and ensuring smooth, hassle-free pickups and deliveries for drivers."
                link={`${BASE_URL}/services/dry-van-dispatching`}
              />
          </div>

          <div className="text-center mt-12">
            <Link href={`${BASE_URL}/services`} role="button" id="all_services_link" className="inline-flex items-center gap-2 hover:text-red-600 hover:scale-105 transition-transform duration-300 font-medium">View All Services →</Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <AboutSection
            image="/about-us.svg"
            title="Your Local Trucking Dispatch Company for Sustainable Transport and Logistics Solutions"
            content={`Kandor Logistics leads the industry with certified freight services across major U.S. corridors. Over the past decade, we have consistently increased carrier profitability for owner-operators and fleets, with gains up to 20 percent. Our expert truck dispatchers handle 75 units, including dry van, reefer, flatbed, and other specialized trailers. Responding to demand, we expanded dispatch service from drayage at the Port of Houston to Chicago and California. Our professional team delivers local expertise for clear communication, efficient routing, and safe deliveries.`}
            listTitle="Your Truck dispatchers do all of the back-office work, including."
            listItems={[
              "Finding ideal loads",
              "Negotiate To Brokers for the Best Rates",
              "Booking and Assigning Loads",
              "Managing motor carrier compliance",
              "Billing and Collections",
              "Share of PODs and BOLs, etc.",
            ]}
            linkText="About us"
            linkUrl={`${BASE_URL}/about`}
            imageClassName="rounded-2xl overflow-hidden shadow-2xl"
          />

      </section>

      <ProcessSection />

      <WhyHireSection
        subheading=""
        heading="Why hire a Truck Dispatcher?"
        description=""
        items={whyhireus}
      />

      <section className="relative bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="max-w-4xl mx-auto text-center space-y-3 mb-12">
            <h2 className="text-2xl text-gray-900 md:text-4xl font-bold text-center">Trucking Dispatching Insights, News & Analysis</h2>
            <p>In addition to our dedicated service, we monitor marketing trends to make informed decisions and support the growth of our business partners, including shippers, brokers, and owner-operators.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...blogs]
              .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
              .slice(0, 3)
              .map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
          </div>
          <div className="text-center mt-6">
            <Link href={`${BASE_URL}/blog`} role="button" id="all_blog_link" className="inline-flex items-center gap-2 text-gray-600 hover:text-red-600 hover:scale-105 transition">View All Blogs →</Link>
          </div>
        </div>
      </section>

      <section className="bg-white max-w-7xl mx-auto px-6 pb-20">
          <div className="rounded-3xl bg-white drop-shadow-lg p-8">
            <div className="relative text-center pb-8 space-y-3">
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
                <ContactForm submitRole="button" submitAriaLabel="Request a quote from above the footer" />
              </div>
            </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
            <div className="relative text-center pb-8 space-y-3">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center">Frequently Asked Questions</h2>
            </div>
            <FaqSection items={faqItems} />
        </div>
      </section>

      <TestimonialsSection
        subheading=""
        heading="What Our Clients Say"
        testimonials={testimonials}
      />
      
      </>
  );
}
