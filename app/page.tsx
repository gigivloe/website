"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import IntegrationScroll from "@/components/IntegrationScroll";
import ChatbotDemo from "@/components/ChatbotDemo";
import AIChatWidget from "@/components/AIChatWidget";
import { VoiceAgentDemo, EmailDemo, InvoicingDemo, VirtualDemo } from "@/components/ServiceDemos";
import { useLang } from "@/lib/LanguageContext";
import { homeContent } from "@/lib/homeTranslations";

function ServiceRow({ 
  svc, isActive, onHover 
}: { 
  svc: typeof homeContent["EN"]["services"]["list"][0], 
  isActive: boolean, 
  onHover: () => void 
}) {
  return (
    <div
      className={`border-b border-gray-200 cursor-default transition-all duration-300 ${isActive ? "bg-white shadow-sm border-gray-300 relative z-10" : ""}`}
      onMouseEnter={onHover}
    >
      <div className={`flex items-center justify-between px-0 py-6 transition-all duration-200 ${isActive ? "px-6" : ""}`}>
        <div className="flex items-center gap-8">
          <span className={`font-mono text-xs w-8 shrink-0 transition-colors ${isActive ? "text-brand-600 font-bold" : "text-gray-400"}`}>{svc.num}</span>
          <div>
            <span className="label-mono block mb-0.5">{svc.tag}</span>
            <div className="flex items-center gap-3">
              <h3 className={`text-xl font-semibold tracking-tight transition-colors duration-200 ${isActive ? "text-black" : "text-gray-900"}`}>
                {svc.name}
              </h3>
              {(svc as any).comingSoon && (
                <span className="border border-gray-300 bg-gray-50 text-gray-500 font-mono text-[9px] px-1.5 py-0.5 uppercase tracking-widest leading-none translate-y-px">
                  Coming soon
                </span>
              )}
            </div>
          </div>
        </div>
        <div className={`font-mono text-sm hidden sm:block transition-all duration-200 ${isActive ? "text-brand-600" : "text-gray-400"}`}>
          {isActive ? svc.stat : "—"}
        </div>
      </div>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isActive ? "240px" : "0px", opacity: isActive ? 1 : 0 }}
      >
        <div className="pb-6 pl-16 pr-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="label-mono mb-2">THE PROBLEM</p>
              <p className="text-gray-600 text-sm leading-relaxed">{svc.problem}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-brand-600 mb-2">GRADIENTS SOLUTION</p>
              <p className="text-gray-900 text-sm leading-relaxed">{svc.solution}</p>
            </div>
          </div>
          <Link href="/services" className="inline-flex items-center gap-1.5 text-gray-500 hover:text-black text-xs font-mono mt-4 transition-colors group">
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [ctaTab, setCtaTab] = useState(0);
  const { lang } = useLang();
  
  const content = homeContent[lang] || homeContent.NL;

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-900">
      <Navbar />

      {/* ── 1. HERO ───────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-14 border-b border-gray-200">
        <div className="absolute inset-0 grid-pattern pointer-events-none opacity-[0.4]" />

        <div className="g-container py-20 md:py-28 grid md:grid-cols-2 gap-16 lg:gap-24 items-center w-full relative">
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="label-mono mb-6">{content.hero.tag}</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-black leading-[1.0] mb-6">
              {content.hero.title}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md mb-8">
              {content.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" id="hero-cta-button" className="btn-primary">
                {content.hero.primaryBtn}
              </Link>
              <Link href="/services" className="btn-secondary">{content.hero.secondaryBtn}</Link>
            </div>
          </motion.div>

          {/* Right — Chatbot Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-[440px] md:h-[500px]"
          >
            <ChatbotDemo />
          </motion.div>
        </div>
      </section>

      {/* ── 2. SERVICES ──────────────────────────────────────────── */}
      <section className="border-b border-gray-200 bg-[#F9FAFB] py-20 md:py-28">
        <div className="g-container">
          <div className="flex items-end justify-between mb-12 border-b border-gray-200 pb-6">
            <div>
              <p className="label-mono mb-2">{content.services.label}</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-black">
                {content.services.title}
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-start">
            {/* Left: service rows */}
            <div>
              <p className="text-gray-500 text-xs font-mono mb-6 italic">{content.services.hoverText}</p>
              {content.services.list.map((svc, i) => (
                <ServiceRow 
                  key={svc.num} 
                  svc={svc} 
                  isActive={activeTab === i}
                  onHover={() => setActiveTab(i)} 
                />
              ))}
            </div>

            {/* Right: demo panel */}
            <div className="sticky top-24">
              <div className="bg-white border border-gray-200 shadow-sm overflow-hidden h-[460px] flex flex-col relative transition-all duration-300">
                <div className="px-5 py-3 border-b border-gray-200 flex items-center justify-between bg-gray-50">
                  <p className="label-mono text-[10px]">{content.services.list[activeTab].demoText}</p>
                  <span className="flex items-center gap-1.5 text-brand-600 font-mono text-[10px] tracking-widest font-bold uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-600 inline-block animate-pulse" />
                    {content.services.list[activeTab].name}
                  </span>
                </div>
                <div className="flex-1 relative bg-gray-50/50">
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0"
                    >
                      {activeTab === 0 && <ChatbotDemo />}
                      {activeTab === 1 && <VoiceAgentDemo />}
                      {activeTab === 2 && <EmailDemo />}
                      {activeTab === 3 && <InvoicingDemo />}
                      {activeTab === 4 && <VirtualDemo />}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. INTEGRATIONS ─────────────────────────────────────── */}
      <IntegrationScroll />

      {/* ── 4. TESTIMONIALS ─────────────────────────────────────── */}
      <section className="border-b border-gray-200 bg-white">
        <div className="g-container g-section">
          <div className="border-b border-gray-200 pb-6 mb-12">
            <p className="label-mono mb-2">{content.results.label}</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-black">{content.results.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {content.results.list.map((cs) => (
              <div key={cs.company} className="g-card group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-[72px] h-[72px] bg-white border border-gray-100 p-2 flex items-center justify-center transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-sm rounded-sm">
                      <img src={(cs as any).externalLogo || `/images/${cs.company.toLowerCase()}-logo.png`} alt={`${cs.company} Logo`} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Client: {cs.company}</p>
                      <p className="text-black font-bold">{cs.company}</p>
                      <p className="text-gray-500 text-xs">{cs.industry}</p>
                    </div>
                  </div>
                  <span className="label-mono text-[10px] bg-gray-100 border border-gray-200 px-2 py-1">{cs.service}</span>
                </div>
                <blockquote className="text-gray-600 text-sm leading-relaxed mb-6 border-l-2 border-black pl-4 italic">
                  &ldquo;{cs.quote}&rdquo;
                </blockquote>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <p className="text-gray-400 text-xs font-mono">{cs.company}</p>
                  <div className="text-right">
                    <p className="label-mono text-[10px] text-gray-500">{cs.statLabel}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHY GRADIENT WORKS ────────────────────────────────── */}
      <section className="border-b border-gray-200 bg-[#F9FAFB] py-20 md:py-28 relative">
        <div className="absolute inset-0 grid-pattern pointer-events-none opacity-[0.3]" />
        <div className="g-container relative z-10">
          <div className="border-b border-gray-200 pb-6 mb-12">
            <p className="label-mono mb-2">{content.whyUs.label}</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-black">{content.whyUs.title}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200 shadow-sm bg-white">
            {content.whyUs.list.map((f, i) => (
              <div key={f.tag}
                className={`p-10 border-gray-200 hover:bg-gray-50 transition-colors duration-200 flex flex-col justify-center items-center text-center ${i < 3 ? "border-r" : ""}`}>
                <p className="label-mono text-[10px] text-brand-600 mb-4">{f.tag}</p>
                <h3 className="text-black font-bold text-lg leading-snug">{f.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. DISCOVERY CALL CTA ────────────────────────────────── */}
      <section id="cta" className="border-b border-gray-200 bg-white">
        <div className="g-container g-section">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
               <p className="label-mono mb-4 text-brand-600">{content.process.label}</p>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black leading-[1.05] mb-6">
                {content.process.title}
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-lg">
                {content.process.desc}
              </p>
            </div>
            
            {/* ROADMAP UI */}
            <div className="mt-4 border border-gray-200 p-8 md:p-12 shadow-sm bg-gray-50 relative overflow-hidden">
              <div className="absolute left-10 md:left-14 top-12 bottom-12 w-px bg-gray-300"></div>
              
              <div className="space-y-6 relative z-10 w-full">
                {content.process.steps.map((step) => (
                  <div key={step.step} className="group flex-col relative">
                    <div className="flex items-start gap-6 cursor-pointer">
                      <div className="w-8 h-8 mt-2 rounded-full bg-white border-2 border-black flex items-center justify-center shrink-0 z-10 transition-transform group-hover:scale-110">
                        <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-white border border-gray-200 px-6 py-4 shadow-sm transition-all duration-300 group-hover:border-brand-300 group-hover:shadow-md relative overflow-hidden">
                        <div className="flex items-center gap-4 mb-1">
                          <span className="font-mono text-[10px] text-brand-600 font-bold">{step.step}</span>
                          <p className="text-black font-bold uppercase tracking-wider text-base">{step.title}</p>
                        </div>
                        <div className="grid grid-rows-[0fr] transition-all duration-300 ease-in-out group-hover:grid-rows-[1fr]">
                          <div className="overflow-hidden">
                            <p className="text-gray-500 text-sm mt-3 leading-relaxed border-t border-gray-100 pt-4">
                              {(step as any).desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center bg-black text-white px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-zinc-900 shadow-lg hover:shadow-2xl active:scale-[0.98]">
                {content.process.ctaBtn}
              </Link>
            </div>
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
