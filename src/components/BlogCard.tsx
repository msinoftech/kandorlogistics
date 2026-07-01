import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/lib/types";
import { BASE_URL } from "@/lib/config";

export default function BlogCard({ post }: { post: Blog }) {
  const postUrl = `${BASE_URL}/blog/${post.slug}`;
  const formattedDate = new Date(post.published_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <Link href={postUrl} className="relative block overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={400}
          height={200}
          loading="lazy"
          className="aspect-3/2 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {post.category && (
          <span className="absolute left-4 top-4 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm">
            {post.category}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-2 text-xs text-gray-500">
          <time dateTime={post.published_at}>{formattedDate}</time>
          {post.author && (
            <>
              <span className="h-1 w-1 rounded-full bg-gray-300" />
              <span>{post.author}</span>
            </>
          )}
        </div>

        <h3 className="text-xl font-bold leading-snug tracking-tight text-gray-900 transition group-hover:text-red-600">
          <Link href={postUrl}>{post.title}</Link>
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          {post.excerpt.slice(0, 100)}...
        </p>

        <Link
          href={postUrl}
          aria-label={post.title}
          className="mt-4 inline-flex items-center gap-2 self-start text-sm font-semibold text-red-600 transition group-hover:gap-3"
        >
          Read more
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
