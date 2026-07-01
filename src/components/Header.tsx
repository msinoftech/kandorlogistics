"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BASE_URL, contactInfo, socialLinks } from "@/lib/config";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Topbar from "@/components/TopBar";

const NAV = [
  { name: "Home", href: `${BASE_URL}` },
  { name: "About", href: `${BASE_URL}/about` },
  { name: "Services", href: `${BASE_URL}/services` },
  { name: "Blog", href: `${BASE_URL}/blog` },
  { name: "Contact", href: `${BASE_URL}/contact` },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const { logo, schedule } = contactInfo;

  const pathname = usePathname();
  const isHome = pathname === "/";

  // Detect scroll to toggle sticky header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isNavActive = (href: string) => {
    const path = new URL(href, "http://localhost").pathname;
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <header ref={headerRef} className={`w-full absolute top-0 left-0 z-[1000] ${
        isHome ? "" : "border-b border-gray-900/5"
      }`}>
      <Topbar />

      {/* Sticky Header */}
      <div ref={stickyRef} className={`transition-all duration-300 ${ scrolled ? "fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md py-3 z-[1000]" : "relative bg-transparent py-3"}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative flex items-center justify-between">
            {/* Logo */}
            <Link href={`${BASE_URL}`} className="flex items-center">
              <div className="relative w-[100px] h-10">
                <Image src={logo} alt="Kandor Logistics" fill sizes="(max-width: 768px) 100px, 120px" className="object-contain transition-transform hover:scale-105"/>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 mx-auto" aria-label="Main navigation" role="navigation">
              {NAV.map((item) => {
                const active = isNavActive(item.href);
                return (
                  <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={`text-sm font-medium transition-all duration-200 relative group ${active ? "text-red-600" : "hover:text-red-600"}`}>
                    {item.name}
                    <span className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-red-500 to-orange-400 transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
                  </Link>
                );
              })}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link href={schedule} target="_blank" aria-label="schedule_a_call" role="button" className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-md text-sm font-semibold bg-gradient-to-r from-red-600 to-orange-500 text-white shadow">
                Schedule a Call
                <svg className="w-4 h-4 -mr-1" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="rgba(255,255,255,0.95)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              {/* Mobile Toggle */}
              <button onClick={() => setOpen(!open)} role="button" className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-red-600 hover:bg-white/10 focus:ring-2 focus:ring-red-400" aria-label="Toggle menu">
                {open ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[999] bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[88%] max-w-sm z-[1001] bg-white flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <Link href={`${BASE_URL}`} onClick={() => setOpen(false)} className="flex items-center">
            <div className="relative w-[100px] h-10">
              <Image
                src={logo}
                alt="Kandor Logistics"
                fill
                sizes="100px"
                className="object-contain"
              />
            </div>
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center p-1 text-slate-700 hover:text-red-600 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto" aria-label="Mobile navigation" role="navigation">
          {NAV.map((item) => {
            const active = isNavActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`relative flex items-center justify-between px-5 py-4 border-b border-gray-100 font-medium transition-colors ${
                  active ? "text-red-600" : "text-slate-800 hover:text-red-600"
                }`}
              >
                {active && (
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-red-600" aria-hidden="true" />
                )}
                <span>{item.name}</span>
                <svg
                  className="w-4 h-4 text-gray-300 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            );
          })}

          {/* Social Section */}
          <div className="px-5 pt-6 pb-4">
            <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-4">
              Follow Us
            </p>
            <div className="flex items-center gap-5">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.ariaLabel}
                  className="text-slate-700 hover:text-red-600 transition-colors [&_svg]:w-5 [&_svg]:h-5"
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                />
              ))}
            </div>
          </div>
        </nav>

        {/* Drawer Footer CTA */}
        <div className="border-t border-gray-200 p-5">
          <Link
            href={schedule}
            target="_blank"
            aria-label="schedule_a_call_mobile"
            role="button"
            onClick={() => setOpen(false)}
            className="block w-full text-center py-3.5 rounded-lg bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold shadow transition-opacity hover:opacity-90"
          >
            Schedule a Call
          </Link>
        </div>
      </div>
    </header>
  );
}
