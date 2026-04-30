import Link from "next/link";
import { useId } from "react";

type ServicesCardLayoutProps = {
  title: string;
  excerpt: string;
  link: string;
};

export default function ServicesCardLayout({
  title,
  excerpt,
  link,
}: ServicesCardLayoutProps) {
  const gradientId = `waveGradient-${useId().replace(/:/g, "")}`;

  return (
    <div className="relative group bg-gradient-to-br from-white via-red-50 to-orange-50 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl scale-103 hover:scale-100 transition-all duration-300">
      <Link href={link}>
        <div className="relative md:items-stretch z-10 mb-6">
            <div className="p-6 pb-8 space-y-3">
            <div className="text-xl font-bold text-gray-900 group-hover:text-red-600">{title}</div>
            <p>{excerpt}</p>
            <div className="flex justify-end">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-red-500 to-orange-400 text-white shadow-md transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:shadow-lg">
                <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                    <path d="M6 18L18 6M18 6H9M18 6V15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                    </g>
                </svg>
                </span>
            </div>
            </div>
        </div>
        <div className="absolute bottom-0 w-full -z-0">
            <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-40 group-hover:opacity-60 transition-all duration-300">
            <path fill={`url(#${gradientId})`} d="M0,224L30,192C60,160,120,96,180,74.7C240,53,300,75,360,101.3C420,128,480,160,540,176C600,192,660,192,720,170.7C780,149,840,107,900,96C960,85,1020,107,1080,138.7C1140,171,1200,213,1260,213.3C1320,213,1380,171,1410,149.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
            <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f87171" />
                <stop offset="100%" stopColor="#fb923c" />
                </linearGradient>
            </defs>
            </svg>
        </div>
      </Link>
    </div>
  );
}
