import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { blogs } from "@/lib/data";
import { APP_NAME, BASE_URL } from "@/lib/config";
import BlogDetails from "./BlogDetails";

// Define page props for this dynamic route
type PageProps = { params: Promise<{ slug: string }> };

// Metadata generation
export async function generateMetadata( { params }: PageProps ): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return {
      title: `Post Not Found | ${APP_NAME}`,
      description: "Sorry, the post you’re looking for does not exist.",
    };
  }

  const url = `${BASE_URL}/blog/${slug}`;
  const ogImageSource = post.image || "/default-image.jpg";
  const ogImage = ogImageSource.startsWith("http") ? ogImageSource : `${BASE_URL}/${ogImageSource}`;
  const description = post.content?.slice(0, 150) || "";

  return {
    title: `${post.title} | ${APP_NAME}`,
    description,
    keywords: [ "logistics", "Kandor"],
    alternates: { 
      canonical: url, 
    },
    openGraph: {
      title: post.title,
      description,
      url,
      siteName: APP_NAME,
      images: [{ url: ogImage, width: 500, height: 500, alt: post.title }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: `${BASE_URL}${ogImageSource}`,
    },
  };
}

// Page component
export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) notFound();

  const url = `${BASE_URL}/blog/${slug}`;
  const imageUrl = post.image?.startsWith("http") ? post.image : `${BASE_URL}${post.image || "/default-image.jpg"}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `/#website`,
        "url": `${BASE_URL}`,
        "name": `${APP_NAME}`,
      },
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        "url": url,
        "name": post.title,
        "isPartOf": { 
          "@id": `${BASE_URL}/#website`,
          "name": `${APP_NAME}`,
        },
        "description": post.content?.slice(0, 160) || "",
        "inLanguage": "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}/#breadcrumb`,
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
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": url,
          },
        ],
      },
      {
        "@type": "BlogPosting",
        "@id": `${url}/#blogposting`,
        "headline": post.title,
        "description": post.content?.slice(0, 160) || "",
        "articleBody": post.content || "",
        "url": url,
        "mainEntityOfPage": { "@id": `${url}/#webpage` },
        "image": {
          "@type": "ImageObject",
          "url": imageUrl,
        },
        "datePublished": post.published_at || "2024-01-01",
        "dateModified": post.updated_at || post.published_at || "2024-01-01",
        "author": {
          "@type": "Person",
          "name": post.author || `${APP_NAME}`,
        },
        "publisher": {
          "@type": "Organization",
          "name": `${APP_NAME}`,
          "url": `${BASE_URL}`,
          "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": imageUrl,
          },
        },
      },
    ],
  };

  return <>
      <Script id="blogpost-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

      <BlogDetails post={post} blogs={blogs} />
    </>;
}

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}
