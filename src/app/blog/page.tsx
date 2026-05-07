import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL, contactInfo,  } from "@/lib/config";
import BlogClient from "@/app/blog/BlogClient";

const { logo } = contactInfo;

export const metadata: Metadata = {
  title: `Trucking Dispatch Blog — Tips, News & Insights | Kandor Logistics`,
  description: "Explore our blog for trucking dispatch tips, freight market insights, and owner-operator guides to grow your business on the road.",
  keywords: [ "logistics", "Kandor",],
  openGraph: {
    title: `Trucking Dispatch Blog — Tips, News & Insights | Kandor Logistics`,
    description: "Explore our blog for trucking dispatch tips, freight market insights, and owner-operator guides to grow your business on the road.",
    images: [
      {
        url: `${BASE_URL}/blog.jpg`,
        width: 1200,
        height: 630,
        alt: `Trucking Dispatch Blog — Tips, News & Insights`,
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
};

const blogSchemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "url": `${BASE_URL}`,
      "name": `${APP_NAME}`,
      "description": "Explore our blog for trucking dispatch tips, freight market insights, and owner-operator guides to grow your business on the road.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${BASE_URL}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
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
          "name": "Blog",
          "item": `${BASE_URL}/blog`,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog`,
      "url": `${BASE_URL}/blog`,
      "name": `Blog | Kandor Logistics`,
      "description": "Explore our blog for trucking dispatch tips, freight market insights, and owner-operator guides to grow your business on the road.",
      "isPartOf": {
        "@type": "WebSite",
        "url": `${BASE_URL}`,
        "name": `${APP_NAME}`,
      },
      "inLanguage": "en-US",
    },
    {
      "@type": "Blog",
      "@id": `${BASE_URL}/blog/#blog`,
      "mainEntityOfPage": `${BASE_URL}/blog`,
      "url": `${BASE_URL}/blog`,
      "name": `Blog | Kandor Logistics`,
      "description": "Explore our blog for trucking dispatch tips, freight market insights, and owner-operator guides to grow your business on the road.",
      "publisher": {
        "@type": "Organization",
        "name": `${APP_NAME}`,
        "url": `${BASE_URL}`,
        "logo": {
          "@type": "ImageObject",
          "url": `${BASE_URL}${logo}`,
        },
        "sameAs": [
          "https://www.facebook.com/kandorlogistics",
          "https://x.com/kandorlogistics",
          "https://www.instagram.com/kandorlogistics",
          "https://www.youtube.com/@KandorLogistics"
        ],
      },
    },
  ],
};

export default function BlogPage() {
  return (
    <>
      <Script id="blog-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchemaData) }}/>
      <BlogClient />
    </>
  )
}
