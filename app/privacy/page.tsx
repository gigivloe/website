"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import AIChatWidget from "@/components/AIChatWidget";
import { useLang } from "@/lib/LanguageContext";
import { privacyContent } from "@/lib/privacyTranslations";

export default function PrivacyPage() {
  const { lang } = useLang();
  const content = privacyContent[lang] || privacyContent.EN;
  const openCookiePreferences = () => {
    window.dispatchEvent(new Event("gradient-open-cookie-preferences"));
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-900">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="pt-24 md:pt-32 border-b border-gray-200 bg-white">
        <div className="g-container pb-12 md:pb-20">
          <div className="max-w-3xl">
            <p className="label-mono mb-4 text-brand-600 uppercase tracking-[0.2em] text-[10px] font-bold">
              {content.lastUpdated}
            </p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black leading-[0.9] mb-8">
              {content.title}
            </h1>
            <div className="h-1.5 w-24 bg-black mb-8"></div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="g-container">
          <div className="max-w-3xl mx-auto space-y-12 md:space-y-20">
            {content.sections.map((section, idx) => (
              <div key={idx} className="group">
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-black mb-6 group-hover:text-brand-600 transition-colors duration-300">
                  {section.title}
                </h2>
                <div className="text-gray-600 leading-relaxed text-base md:text-lg space-y-4">
                  {section.content.split('\n').map((paragraph, pIdx) => (
                    paragraph.trim() && (
                      <p key={pIdx}>
                        {paragraph}
                      </p>
                    )
                  ))}
                  
                  {section.items && (
                    <ul className="space-y-4 mt-6">
                      {section.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex gap-4 items-start bg-white p-6 border border-gray-200 shadow-sm hover:border-brand-300 transition-all duration-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2.5 shrink-0" />
                          <span className="text-sm md:text-base text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-white border-t border-gray-200">
        <div className="g-container g-section text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-black mb-8">
            Questions about your data?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Contact Us</Link>
            <a href="mailto:hello@gradient.be" className="btn-secondary">Email DPO</a>
            <button onClick={openCookiePreferences} className="btn-secondary">Cookie Settings</button>
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
