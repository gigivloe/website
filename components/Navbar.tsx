"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/lib/LanguageContext";
import type { Lang } from "@/lib/translations";
import { useState } from "react";

const LANGS: Lang[] = ["NL", "FR", "EN"];

export default function Navbar() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  const pages = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#F9FAFB]/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="g-container h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <img 
            src="/images/Large Logo Final Gradient.svg" 
            alt="Gradient Logo" 
            className="h-7 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0">
          {pages.map((page) => {
            const active = pathname === page.href;
            return (
              <Link key={page.href} href={page.href}
                className={`px-5 py-4 text-sm font-medium tracking-wide border-b-2 transition-all duration-150 ${
                  active
                    ? "text-black border-black"
                    : "text-gray-500 border-transparent hover:text-black hover:border-gray-200"
                }`}>
                {page.label}
              </Link>
            );
          })}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language switcher */}
          <div className="flex items-center border border-gray-200">
            {LANGS.map((l, i) => (
              <button key={l} onClick={() => setLang(l)}
                className={`px-2.5 py-1.5 text-xs font-mono font-medium transition-all duration-150 border-r border-gray-200 last:border-r-0 ${
                  lang === l ? "bg-black text-white" : "text-gray-500 hover:text-black hover:bg-gray-100"
                }`}>
                {l}
              </button>
            ))}
          </div>

          <Link href="/contact" id="nav-cta-button" className="btn-primary text-xs px-5 py-2.5 tracking-wide">
            {t.nav.cta}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-black p-2" onClick={() => setMenuOpen(o => !o)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-1 shadow-sm">
          {pages.map((p) => (
            <Link key={p.href} href={p.href} onClick={() => setMenuOpen(false)}
              className={`py-3 text-sm font-medium border-b border-gray-200 last:border-0 ${pathname === p.href ? "text-black" : "text-gray-500"}`}>
              {p.label}
            </Link>
          ))}
          <div className="flex items-center gap-1 pt-3">
            {LANGS.map((l) => (
              <button key={l} onClick={() => setLang(l)}
                className={`px-3 py-1.5 text-xs font-mono border border-gray-200 transition-all ${lang === l ? "bg-black text-white border-black" : "text-gray-500 hover:text-black"}`}>
                {l}
              </button>
            ))}
          </div>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn-primary mt-3 text-xs justify-center py-3">
            {t.nav.cta}
          </Link>
        </div>
      )}
    </header>
  );
}
