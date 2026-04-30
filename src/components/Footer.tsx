"use client";
import Link from "next/link";
import Image from "next/image";
import { BASE_URL, contactInfo, socialLinks } from "@/lib/config";
import ContactActions from "./ContactActions";

export default function Footer() {
  const { phone, email, logo } = contactInfo;

  // Format phone for tel: link (remove spaces, parentheses, etc.)
  const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;
  const emailHref = `mailto:${email}`;

  // Common data
  const companyInfo = {
    description: "Kandor Logistics is your strategic partner, providing a comprehensive solution for trucking dispatch services. We offer full back-office support, secure high-paying loads, and manage logistics efficiently.",
    copyright: `2025 © all reserved to <a className="text-red-600" href="https://miraculoussoft.com/">Miraculoussoft Solution</a>.`,
  };

  const usefulLinks = [
    { name: "Home", href: `${BASE_URL}` },
    { name: "About", href: `${BASE_URL}/about` },
    { name: "Services", href: `${BASE_URL}/services` },
    { name: "Blog", href: `${BASE_URL}/blog` },
    { name: "Contact", href: `${BASE_URL}/contact` },
  ];

  const servicesLinks = [
    { name: "Hotshot Dispatch", href: `${BASE_URL}/services/hotshot-dispatch` },
    { name: "Flatbeds/Step Deck Dispatch", href: `${BASE_URL}/services/flatbeds-step-deck-dispatch` },
    { name: "Power Only Units Dispatch", href: `${BASE_URL}/services/power-only-units-dispatching` },
    { name: "Low Boy Dispatch", href: `${BASE_URL}/services/low-boy-dispatching` },
    { name: "Box Truck Dispatch", href: `${BASE_URL}/services/box-truck-dispatching` },
  ];



  return (
    <footer className="bg-gray-100 pt-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10">
          <div>
            <div>
              <div className="mb-4">
                <Link href={`${BASE_URL}`} className="inline-block">
                  <Image src={logo} width={150} height={50} alt="Kandor Logistics" className="object-contain"/>
                </Link>
              </div>
              <p className="text-md mb-6">{companyInfo.description}</p>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <div>
              <div className="text-lg font-semibold mb-4 text-gray-800">Useful Links</div>
              <ul className="space-y-2">
                {usefulLinks.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="hover:text-red-600 transition">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services */}
          <div>
            <div>
              <div className="text-lg font-semibold mb-4 text-gray-800">Services</div>
              <ul className="space-y-2">
                {servicesLinks.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="hover:text-red-600 transition">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div>
              <div className="text-lg font-semibold mb-4 text-gray-800">Get in Touch</div>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-center">
                  {/* Phone Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.2l-2.3 1.1a11 11 0 005.5 5.5l1.1-2.3a1 1 0 011.2-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.7 21 3 14.3 3 6V5z"/>
                  </svg>
                  <a href={phoneHref} className="hover:text-red-600 transition">{phone}</a>
                </li>
                <li className="flex items-center">
                  {/* Email Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <a href={emailHref} className="hover:text-red-600 transition">{email}</a>
                </li>
              </ul>
              <div className="flex items-center space-x-4 mt-5">
                {socialLinks.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.ariaLabel}
                    className="text-gray-900 hover:text-red-600"
                    dangerouslySetInnerHTML={{ __html: item.icon }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 py-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-3">
            <p className="text-sm" dangerouslySetInnerHTML={{ __html: companyInfo.copyright }} />
          </div>
        </div>
      </div>

      <ContactActions />
    </footer>
  );
}
