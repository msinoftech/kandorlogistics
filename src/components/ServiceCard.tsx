import Link from "next/link";

type ServiceCardProps = {
  title: string;
  excerpt: string;
  link: string;
};

export default function ServiceCard({ title, excerpt, link }: ServiceCardProps) {
  return (
    <div className="group relative bg-white/80 rounded-2xl shadow-lg hover:shadow-2xl scale-103 hover:scale-100 transition-all duration-500 p-6 overflow-hidden">
      <Link href={link} aria-label={`Explore ${title} service details`} className="block">
        <div className="absolute -top-10 -right-10 h-22 w-22 rounded-full bg-gradient-to-br from-red-400 to-orange-300 opacity-30 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-transparent to-orange-100 opacity-60 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

        <div className="relative z-10 space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-red-700">{title}</h3>
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
      </Link>
    </div>
  );
}
