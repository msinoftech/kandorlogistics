import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/lib/types";

export default function BlogCard({ post }: { post: Blog }) {
  return (
      <div className="w-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition">
        <Link href={`/blog/${post.slug}`}>
            <Image src={post.image} alt={post.title} width={400} height={200} loading="lazy" className="w-full object-cover aspect-3/2 mb-4"/>
        </Link>
        <div className="p-5">
            <div className="mb-2 text-xl md: font-bold tracking-tight text-gray-900"><Link href={`/blog/${post.slug}`}>{post.title}</Link></div>
            <p className="mb-3 font-normal">{post.excerpt.slice(0, 100)}...</p>
            <Link href={`/blog/${post.slug}`} aria-label={post.title} className="inline-flex items-center gap-2 hover:text-red-600 hover:scale-105 transition">
                Read more →
            </Link>
        </div>
      </div>
  );
}
