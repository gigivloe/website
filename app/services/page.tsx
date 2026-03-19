"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import AIChatWidget from "@/components/AIChatWidget";
import { useLang } from "@/lib/LanguageContext";
import { servicesContent } from "@/lib/servicesTranslations";

function ServiceIcon({ type }: { type: string }) {
  // Palantir-inspired minimalist geometric SVGs
  switch (type) {
    case "chat":
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="6" y="8" width="28" height="20" />
          <path d="M12 28L6 34V28H12Z" fill="currentColor" />
          <line x1="12" y1="14" x2="28" y2="14" />
          <line x1="12" y1="20" x2="22" y2="20" />
        </svg>
      );
    case "voice":
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="10" y1="16" x2="10" y2="24" />
          <line x1="15" y1="10" x2="15" y2="30" />
          <line x1="20" y1="6" x2="20" y2="34" />
          <line x1="25" y1="12" x2="25" y2="28" />
          <line x1="30" y1="18" x2="30" y2="22" />
        </svg>
      );
    case "email":
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="10" width="32" height="20" />
          <path d="M4 10L20 22L36 10" />
        </svg>
      );
    case "data":
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="6" y="24" width="6" height="10" />
          <rect x="17" y="16" width="6" height="18" />
          <rect x="28" y="6" width="6" height="28" />
          <line x1="4" y1="34" x2="36" y2="34" />
        </svg>
      );
    case "ads":
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 34L34 6" />
          <path d="M16 6H34V24" />
          <circle cx="12" cy="28" r="3" fill="currentColor" />
          <circle cx="28" cy="12" r="3" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ServicesPage() {
  const { lang } = useLang();
  const content = servicesContent[lang] || servicesContent.NL;

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-900">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="pt-14 border-b border-gray-200 bg-white relative">
        <div className="absolute inset-0 grid-pattern pointer-events-none opacity-[0.3]" />
        
        <div className="g-container g-section relative z-10 text-center">
          <p className="label-mono mb-6 mx-auto inline-block border border-gray-200 bg-gray-50 px-3 py-1 text-gray-600">
            {content.hero.tag}
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black leading-[1.0] mb-6">
            {content.hero.title}<br />
            <span className="text-gray-400">{content.hero.subtitle}</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            {content.hero.desc}
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            {content.hero.badges.map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-brand-600 rounded-full" />
                <span className="font-mono text-xs text-gray-500 uppercase">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES LIST ────────────────────────────────────────── */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="g-container">
          <div className="max-w-4xl mx-auto space-y-16">
            {content.services.map((svc) => (
              <div key={svc.number} className="bg-white border border-gray-200 shadow-sm relative overflow-hidden group">
                {/* Decorative Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-brand-600">{svc.number}</span>
                    <h2 className="text-xl font-bold tracking-tight text-gray-900">{svc.name}</h2>
                  </div>
                  <span className="label-mono text-[10px] text-gray-400">{svc.tagline}</span>
                </div>

                <div className="grid md:grid-cols-[1fr_260px] gap-0">
                  {/* Left content */}
                  <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-200">
                    <div className="flex items-start gap-6 mb-8">
                      <div className="w-16 h-16 bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-400 shrink-0">
                        <ServiceIcon type={svc.icon} />
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {svc.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {svc.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="text-brand-600 mt-0.5 shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm font-medium text-gray-800">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {svc.caseStudy && (
                      <div className="mt-8 pt-6 border-t border-dashed border-gray-200">
                        <p className="label-mono text-[10px] text-gray-400 mb-2">CASE STUDY: {svc.caseStudy.company}</p>
                        <p className="text-sm text-gray-600 italic">"{svc.caseStudy.result}"</p>
                      </div>
                    )}
                  </div>

                  {/* Right abstract metrics / callout box */}
                  <div className="bg-gray-50 p-8 md:p-10 flex flex-col justify-center">
                    <p className="label-mono text-[10px] text-brand-600 mb-4">{svc.callout.label}</p>
                    <p className="text-3xl font-black text-black tracking-tight mb-2">{svc.callout.value}</p>
                    <p className="text-xs text-gray-500 font-mono leading-relaxed">{svc.callout.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-white border-t border-gray-200 py-24">
        <div className="g-container text-center max-w-3xl mx-auto">
          <p className="label-mono mb-4 text-brand-600">{content.cta.tag}</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black mb-6">
            {content.cta.title}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            {content.cta.desc}
          </p>
          <div className="flex flex-col items-center gap-4">
            <Link href="/contact" className="btn-primary">{content.cta.btn}</Link>
            <span className="text-xs font-mono text-gray-400">{content.cta.subText}</span>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="g-container py-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <img 
                src="/images/Large Logo Final Gradient.svg" 
                alt="Gradient Logo" 
                className="h-7 w-auto"
              />
            </div>
            <p className="font-mono text-xs text-gray-400 uppercase tracking-widest">B2B AI Automation · Brussels, Belgium</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center md:justify-end text-sm">
              {[["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Contact", "/contact"]].map(([label, href]) => (
                <Link key={href} href={href} className="text-gray-500 hover:text-black font-medium transition-colors uppercase tracking-widest text-xs">
                  {label}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center md:justify-end">
              <Link href="/privacy" className="text-gray-400 hover:text-black text-[10px] font-mono uppercase tracking-widest transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-200 text-[10px] hidden md:inline">•</span>
              <Link href="/terms" className="text-gray-400 hover:text-black text-[10px] font-mono uppercase tracking-widest transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <AIChatWidget />
    </div>
  );
}
