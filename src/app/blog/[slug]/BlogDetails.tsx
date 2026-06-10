"use client";
import Image from "next/image";
import Link from "next/link";
import type { Blog } from "@/lib/types";
import { APP_NAME } from "@/lib/config";

interface BlogDetailsProps {
  post: Blog;
  blogs: Blog[];
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getReadTime(content: string) {
  const words = content.replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export default function BlogDetails({ post, blogs }: BlogDetailsProps) {
  const recentBlogs = [...blogs]
    .filter((b) => b.slug !== post.slug)
    .sort((a, b) => {
      const dateDiff = new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
      return dateDiff !== 0 ? dateDiff : b.id - a.id;
    })
    .slice(0, 5);
  const readTime = getReadTime(post.content);
  const authorName = post.author === "kandorlogistics" ? APP_NAME : post.author;
  const showUpdated = post.updated_at && post.updated_at !== post.published_at;

  return (
    <section className="bg-white details-page max-w-7xl px-6 mx-auto pt-40 pb-12">
      <header className="mb-8 space-y-4">
        {post.category && (
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full">
            {post.category}
          </span>
        )}

        <h1 className="text-2xl text-gray-900 md:text-4xl font-bold">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500 pt-1 border-t border-gray-100">
          <span className="inline-flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>By <strong className="text-gray-700 font-medium">{authorName}</strong></span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <time dateTime={post.published_at}>{formatDate(post.published_at)}</time>
          </span>
          {showUpdated && (
            <span className="inline-flex items-center gap-1.5">
              <span>Updated <time dateTime={post.updated_at}>{formatDate(post.updated_at)}</time></span>
            </span>
          )}
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT SIDE - Blog Details */}
        <div className="lg:col-span-2 space-y-3">
          <Image src={post.image} alt={post.title} width={900} height={500} className="rounded-xl aspect-[16/8] object-cover"/>
          <div className="post-content space-y-3" dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>

        {/* RIGHT SIDE - Other Blogs */}
        <aside className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-fit sticky top-20">
          <div className="text-xl font-semibold text-gray-900 mb-4">Recent Posts</div>
          <ul className="space-y-3">
            {recentBlogs.map((item) => (
              <li key={item.slug}>
                <Link href={`/blog/${item.slug}`} className="flex items-center space-x-3 group">
                  <div className="w-16 h-16 flex-shrink-0">
                    <Image src={item.image} alt={item.title} width={80} height={80} className="rounded-lg object-cover w-full h-full"/>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-medium text-gray-800 group-hover:text-red-600 transition">{item.title}</h3>
                    <time dateTime={item.published_at} className="text-xs text-gray-400">
                      {formatDate(item.published_at)}
                    </time>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
