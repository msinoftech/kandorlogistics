import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/lib/types";
import { BASE_URL } from "@/lib/config";

export default function BlogCard({ post }: { post: Blog }) {
  return (
      <div className="w-full bg-white rounded-2xl overflow-hidden shadow-sm space-y-3 hover:shadow-2xl transition">
        <Link href={`${BASE_URL}/blog/${post.slug}`}>
            <Image src={post.image} alt={post.title} width={400} height={200} loading="lazy" className="w-full object-cover aspect-3/2"/>
        </Link>
        <div className="p-5 space-y-3">
            <div className="text-xl md: font-bold tracking-tight text-gray-900"><Link href={`${BASE_URL}/blog/${post.slug}`}>{post.title}</Link></div>
            <p>{post.excerpt.slice(0, 100)}...</p>
            <Link href={`${BASE_URL}/blog/${post.slug}`} aria-label={post.title} className="inline-flex items-center gap-2 hover:text-red-600 hover:scale-105 transition">Read more →</Link>
        </div>
      </div>
  );
}
