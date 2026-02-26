import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL } from "@/lib/config";
import BlogClient from "@/app/blog/BlogClient";

// Static metadata (server-only)
export const metadata: Metadata = {
  title: `Insights, News & Analysis | ${APP_NAME}`,
  description: "Updated transport market insights. Must reading for every professional managing freight, logistics, or dispatching services.",
  keywords: [ "logistics", "Kandor",],
  openGraph: {
    title: `Insights, News & Analysis | ${APP_NAME}`,
    description: "Updated transport market insights. Must reading for every professional managing freight, logistics, or dispatching services.",
    images: [
      {
        url: "${BASE_URL}/blog-og.jpg",
        width: 1200,
        height: 630,
        alt: `Blog | ${APP_NAME}`,
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
      "description": "Updated transport market insights. Must reading for every professional managing freight, logistics, or dispatching services.",
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
      "name": `Insights, News & Analysis | ${APP_NAME}`,
      "description": "Updated transport market insights. Must reading for every professional managing freight, logistics, or dispatching services.",
      "isPartOf": {
        "@type": "WebSite",
        "url": `${BASE_URL}`,
        "name": `${APP_NAME}`,
      },
      "inLanguage": "en-US",
    },
    {
      "@type": "Blog",
      "@id": `${BASE_URL}/blog#blog`,
      "mainEntityOfPage": `/blog`,
      "url": `${BASE_URL}/blog`,
      "name": `Kandor Logistics Blog`,
      "description": "Updated transport market insights. Must reading for every professional managing freight, logistics, or dispatching services.",
      "publisher": {
        "@type": "Organization",
        "name": `${APP_NAME}`,
        "url": `${BASE_URL}`,
        "logo": {
          "@type": "ImageObject",
          "url": `${BASE_URL}/logo.png`,
        },
        "sameAs": [
          "https://www.facebook.com/kandorlogistics",
          "https://www.linkedin.com/company/kandorlogistics",
          "https://twitter.com/KandorLogistics",
        ],
      },
    },
  ],
};

export default function BlogPage() {
  return <>
      {/* Add schema JSON-LD to <head> */}
      <Script id="blog-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchemaData) }}/>

      <BlogClient />
    </>;
}
