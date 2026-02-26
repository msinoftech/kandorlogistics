"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { contactInfo } from "@/lib/config";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Topbar from "@/components/TopBar";

const NAV = [
  { name: "Home", href: "/" },
  { name: "About", href: `/about` },
  { name: "Services", href: `/services` },
  { name: "Blog", href: `/blog` },
  { name: "Contact", href: `/contact` },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
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

  // Dynamically calculate total header height (including sticky section)
  useEffect(() => {
    const calcHeight = () => {
      const headerH = headerRef.current?.offsetHeight || 0;
      const stickyH = stickyRef.current?.offsetHeight || 0;
      setHeaderHeight(scrolled ? stickyH : headerH);
    };

    calcHeight();
    const resizeObserver = new ResizeObserver(calcHeight);
    if (headerRef.current) resizeObserver.observe(headerRef.current);
    if (stickyRef.current) resizeObserver.observe(stickyRef.current);

    window.addEventListener("resize", calcHeight);
    window.addEventListener("scroll", calcHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", calcHeight);
      window.removeEventListener("scroll", calcHeight);
    };
  }, [scrolled]);

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
            <Link href="/" className="flex items-center">
              <div className="relative w-[100px] h-10">
                <Image src={logo} alt="Kandor Logistics" fill sizes="(max-width: 768px) 100px, 120px" className="object-contain transition-transform hover:scale-105"/>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 mx-auto">
              {NAV.map((item) => (
                <Link key={item.href} href={item.href} className="relative group px-1 py-2 text-sm font-medium text-gray-800 hover:text-red-600">
                  {item.name}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-red-500 to-orange-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a href={schedule} target="_blank" id="schedule_a_call" role="button" className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-md text-sm font-semibold bg-gradient-to-r from-red-600 to-orange-500 text-white shadow">
                Schedule a Call
                <svg className="w-4 h-4 -mr-1" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="rgba(255,255,255,0.95)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

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

      {/* Mobile Dropdown */}
      <div style={{ top: `${headerHeight}px` }} className={`md:hidden fixed left-0 w-full z-[999] bg-white/95 backdrop-blur-md border-t border-gray-200 transition-all duration-300 ${ open
            ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none"}`}>
        <div className="p-4 shadow-lg">
          <nav className="flex flex-col gap-3">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-slate-900 font-medium hover:text-red-600">
                {item.name}
              </Link>
            ))}
            <a href={schedule} target="_blank" id="schedule_a_call_mobile" role="button" className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold shadow">Schedule a Call</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
