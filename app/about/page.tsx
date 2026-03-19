"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import AIChatWidget from "@/components/AIChatWidget";
import { useLang } from "@/lib/LanguageContext";
import { aboutContent } from "@/lib/aboutTranslations";

export default function AboutPage() {
  const { lang } = useLang();
  const content = aboutContent[lang] || aboutContent.NL;

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-900">
      <Navbar />

      {/* ── TEAM ─────────────────────────────────────────────────── */}
      <section className="pt-14 border-b border-gray-200">
        <div className="g-container g-section">
          <div className="border-b border-gray-200 pb-6 mb-12">
            <p className="label-mono mb-2">{content.hero.tag}</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-black">
              {content.hero.title}
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {content.founders.map((f) => (
              <div key={f.name} className="g-card">
                <div className="flex items-center gap-5 mb-6">
                  {f.image ? (
                    <div className="w-20 h-20 bg-gray-100 border border-gray-200 shrink-0 overflow-hidden">
                      <img 
                        src={f.image} 
                        alt={f.name} 
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                    </div>
                  ) : (
                    <div className="w-14 h-14 bg-black flex items-center justify-center text-white font-black text-xl shrink-0">
                      {f.initial}
                    </div>
                  )}
                  <div>
                    <p className="text-black font-bold text-lg leading-tight">{f.name}</p>
                    <p className="text-brand-600 text-xs font-mono mt-0.5">{f.role}</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-5 mb-5">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="label-mono text-[10px] text-gray-400 mb-1">{f.labelEdu}</p>
                      <p className="text-gray-900 font-medium">{f.studies}</p>
                    </div>
                    <div>
                      <p className="label-mono text-[10px] text-gray-400 mb-1">{f.labelSpec}</p>
                      <p className="text-gray-900 font-medium">{f.specialization}</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-5">{f.bio}</p>

                <div className="flex flex-wrap gap-2">
                  {f.tags.map((tag) => (
                    <span key={tag} className="bg-gray-50 border border-gray-200 text-gray-600 text-xs font-mono px-2.5 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION ──────────────────────────────────────────────── */}
      <section className="border-b border-gray-200 bg-white">
        <div className="g-container g-section">
          <div className="grid md:grid-cols-[280px_1fr] gap-12 lg:gap-20">
            <div>
              <p className="label-mono mb-2">{content.mission.tag}</p>
              <h2 className="text-3xl font-black tracking-tighter text-black leading-tight">
                {content.mission.title}
              </h2>
            </div>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>{content.mission.p1}</p>
              <p>{content.mission.p2}</p>
              <p className="text-black font-semibold">{content.mission.p3}</p>
              <p>{content.mission.p4}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────────── */}
      <section className="border-b border-gray-200 bg-[#F9FAFB]">
        <div className="g-container g-section">
          <div className="border-b border-gray-200 pb-6 mb-12">
            <p className="label-mono mb-2">{content.values.tag}</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-black">{content.values.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-0 border border-gray-200 bg-white shadow-sm">
            {content.values.list.map((v, i) => (
              <div key={v.num}
                className={`p-8 hover:bg-gray-50 transition-colors duration-200 ${i < content.values.list.length - 1 ? "border-r border-gray-200" : ""}`}>
                <p className="font-mono text-xs text-brand-600 mb-4">{v.num}</p>
                <h3 className="text-black font-bold text-base mb-4 leading-snug">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="g-container g-section text-center">
          <p className="label-mono mb-4 text-brand-600">{content.cta.tag}</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-black mb-6">
            {content.cta.title}
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed">
            {content.cta.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-primary">{content.cta.primaryBtn}</Link>
            <Link href="/services" className="btn-secondary">{content.cta.secondaryBtn}</Link>
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
