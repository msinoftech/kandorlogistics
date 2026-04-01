import { contactInfo, socialLinks } from "@/lib/config";
import Link from "next/link";

export default function Topbar() {
  const { phone, email } = contactInfo;

  // Format phone for tel: link (remove spaces, parentheses, etc.)
  const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;
  const emailHref = `mailto:${email}`;

  return (
      <div className="text-white bg-gradient-to-r from-red-600 to-orange-400">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Left side - Phone & Email */}
          <div className="flex flex-wrap items-center justify-center text-center gap-0 lg:gap-4">
            <Link href={phoneHref} className="flex items-center gap-2 hover:text-white transition-all duration-200">
              <svg width="24px" height="24px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="#ffffff"></path> </g></svg>
              <span>{phone}</span>
            </Link>
            <Link href={emailHref} className="flex items-center gap-2 hover:text-white transition-all duration-200">
              <svg width="26px" height="26px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#ffffff"></path> </g></svg>
              <span>{email}</span>
            </Link>
          </div>

          {/* Right side - Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.ariaLabel}
                className="text-white"
                dangerouslySetInnerHTML={{ __html: item.icon }}
              />
            ))}
          </div>
        </div>
      </div>
  );
}