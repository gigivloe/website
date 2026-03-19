"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import AIChatWidget from "@/components/AIChatWidget";
import { useLang } from "@/lib/LanguageContext";
import { contactContent } from "@/lib/contactTranslations";
import { useState } from "react";

export default function ContactPage() {
  const { lang } = useLang();
  const content = contactContent[lang] || contactContent.NL;
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    agree: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    alert("Thank you for your message. We will get back to you soon.");
  };

  const inputClasses = "w-full bg-white border border-gray-200 rounded-sm px-4 py-3 text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500/20 outline-none transition-all placeholder:text-gray-300";

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main className="pt-24 pb-20 md:pt-32 md:pb-32">
        <div className="g-container max-w-6xl">
          <div className="mb-16 md:mb-24">
            <p className="label-mono mb-4 text-brand-600">{content.hero.tag}</p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-black">
              {content.hero.title}
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            {/* LEFT SIDE — CONTACT FORM */}
            <div className="space-y-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-0.5">
                    {content.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={inputClasses}
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-0.5">
                    {content.form.company}
                  </label>
                  <input
                    type="text"
                    id="company"
                    className={inputClasses}
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-0.5">
                      {content.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={inputClasses}
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-0.5">
                      {content.form.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className={inputClasses}
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-0.5">
                    {content.form.message}
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className={inputClasses}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  ></textarea>
                </div>

                <div className="flex items-center gap-3 py-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="w-4 h-4 rounded-sm border-gray-200 text-brand-600 focus:ring-brand-500 cursor-pointer"
                    required
                    checked={formState.agree}
                    onChange={(e) => setFormState({ ...formState, agree: e.target.checked })}
                  />
                  <label htmlFor="privacy" className="text-xs text-gray-500 cursor-pointer select-none">
                    {content.form.privacy}
                  </label>
                </div>

                <div className="py-2 opacity-40">
                   <div className="flex items-center gap-3 p-3 border border-gray-100 bg-gray-50 rounded-sm">
                      <div className="w-5 h-5 border-2 border-gray-300 rounded-full border-t-transparent animate-spin-slow"></div>
                      <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">{content.form.recaptcha}</span>
                   </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 text-sm font-bold uppercase tracking-widest rounded-sm transition-all hover:bg-zinc-900 active:scale-[0.98] border border-black"
                >
                  {content.form.submit}
                </button>
              </form>
            </div>

            {/* RIGHT SIDE — COMPANY INFO */}
            <div className="md:pl-10 space-y-16">
              <section>
                <h2 className="text-[10px] font-mono font-bold text-brand-600 uppercase tracking-[0.2em] mb-8 border-b border-gray-100 pb-4">
                  {content.info.general}
                </h2>
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1">Belgium</p>
                    <p className="text-xl font-medium text-black">{content.info.phoneBE}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1">Email</p>
                    <p className="text-xl font-medium text-black">{content.info.email}</p>
                  </div>
                </div>
              </section>

              <div className="grid grid-cols-1 gap-10">
                <section>
                  <h3 className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-100 pb-3">
                    {content.info.belgiumOffice.title}
                  </h3>
                  <div className="text-gray-600 space-y-1 text-sm leading-relaxed">
                    <p className="text-black font-medium">{content.info.belgiumOffice.line1}</p>
                    <p>{content.info.belgiumOffice.line2}</p>
                    <p>{content.info.belgiumOffice.country}</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>

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
