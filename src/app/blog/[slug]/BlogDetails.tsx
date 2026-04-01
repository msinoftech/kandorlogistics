"use client";
import Image from "next/image";
import Link from "next/link";
import type { Blog } from "@/lib/types";
interface BlogDetailsProps {
  post: Blog;
  blogs: Blog[];
}

export default function BlogDetails({ post, blogs }: BlogDetailsProps) {
  const otherBlogs = blogs.filter((b) => b.slug !== post.slug);
  return (
    <section className="bg-white details-page max-w-7xl px-6 mx-auto pt-40 pb-12">
      <h1 className="text-2xl text-gray-900 md:text-4xl font-bold mb-8">{post.title}</h1>

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
            {otherBlogs.map((item) => (
              <li key={item.slug}>
                <Link href={`/blog/${item.slug}`} className="flex items-center space-x-3 group">
                  <div className="w-16 h-16 flex-shrink-0">
                    <Image src={item.image} alt={item.title} width={80} height={80} className="rounded-lg object-cover w-full h-full"/>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-800 group-hover:text-red-600 transition">{item.title}</h3>
                    <p className="text-sm line-clamp-2">{item.excerpt}</p>
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
