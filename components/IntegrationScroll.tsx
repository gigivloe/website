"use client";
import { useLang } from "@/lib/LanguageContext";

const LOGOS = [
  {
    name: "HubSpot",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
        <circle cx="20.5" cy="9.5" r="4" fill="#FF7A59"/>
        <path d="M20.5 13.5v3.3l-2.9 1.65M20.5 13.5v3.3l2.9 1.65M14.8 19.75l2.8-1.6M20.5 19.75l-2.9-1.6M17.6 18.15v3.35" stroke="#FF7A59" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="17.6" cy="22.5" r="2.8" fill="#FF7A59"/>
        <circle cx="14.2" cy="19.75" r="2.8" fill="#FF7A59"/>
        <circle cx="20.9" cy="19.75" r="2.8" fill="#FF7A59"/>
      </svg>
    ),
  },
  {
    name: "Salesforce",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
        <path d="M13.5 10.5c.9-1 2.2-1.6 3.7-1.6 2 0 3.8 1.1 4.7 2.8.7-.3 1.4-.5 2.2-.5 3 0 5.4 2.4 5.4 5.4 0 3-2.4 5.4-5.4 5.4H10.4C7.9 22 6 20 6 17.5c0-2.1 1.4-3.9 3.3-4.5-.3-.6-.4-1.2-.4-1.9 0-2.5 2-4.5 4.5-4.5.6 0 1.1.1 1.6.3" fill="#00A1E0"/>
      </svg>
    ),
  },
  {
    name: "Slack",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
        <rect x="6" y="13" width="5" height="5" rx="2.5" fill="#E01E5A"/>
        <rect x="13" y="6" width="5" height="5" rx="2.5" fill="#36C5F0"/>
        <rect x="21" y="13" width="5" height="5" rx="2.5" fill="#2EB67D"/>
        <rect x="13" y="21" width="5" height="5" rx="2.5" fill="#ECB22E"/>
      </svg>
    ),
  },
  {
    name: "Notion",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
        <rect x="5" y="4" width="22" height="24" rx="0" fill="#1A1A1A"/>
        <path d="M10 9h8M10 13h12M10 17h10M10 21h7" stroke="white" strokeWidth="1.8" strokeLinecap="square"/>
      </svg>
    ),
  },
  {
    name: "Zendesk",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
        <path d="M16 7C11.03 7 7 11.03 7 16s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" fill="#03363D"/>
        <path d="M19.5 12.5l-7 7h7v2.5H12v-2.5l7-7H12V10h7.5v2.5z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Google Workspace",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
        <path d="M22.56 16.24c0-.57-.05-1.12-.14-1.64H16v3.1h3.68a3.14 3.14 0 01-1.36 2.06v1.71h2.2c1.29-1.19 2.04-2.94 2.04-5.23z" fill="#4285F4"/>
        <path d="M16 23c1.85 0 3.4-.61 4.53-1.66l-2.2-1.71a5.27 5.27 0 01-2.33.65c-1.79 0-3.31-1.21-3.85-2.84H9.87v1.77A6.94 6.94 0 0016 23z" fill="#34A853"/>
        <path d="M12.15 17.44a4.17 4.17 0 010-2.66V12.9H9.87a7.01 7.01 0 000 6.31l2.28-1.77z" fill="#FBBC05"/>
        <path d="M16 10.94c1.01 0 1.91.35 2.62 1.03l1.96-1.96A6.93 6.93 0 0016 9a6.94 6.94 0 00-6.13 3.69l2.28 1.77c.54-1.63 2.06-2.52 3.85-2.52z" fill="#EA4335"/>
      </svg>
    ),
  },
  {
    name: "Microsoft Teams",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
        <path d="M20 12h5a2 2 0 012 2v6a2 2 0 01-2 2h-5V12z" fill="#5059C9"/>
        <circle cx="22.5" cy="9.5" r="2.5" fill="#5059C9"/>
        <rect x="8" y="11" width="14" height="14" rx="0" fill="#7B83EB"/>
        <path d="M13 16.5h6M16 14v5" stroke="white" strokeWidth="1.8" strokeLinecap="square"/>
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
        <circle cx="16" cy="16" r="11" fill="#25D366"/>
        <path d="M21.5 18.7c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.1l-1 1.2c-.1.2-.3.2-.5.1-.8-.4-2.5-1.4-3.5-3.1-.1-.3 0-.5.1-.6l.7-.9c.2-.2.2-.4.1-.6l-1-2.2c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.5.5-1 1.5-.8 3 .2 1.8 1.5 3.5 1.8 3.8.3.4 2.7 4 6.2 4.7 3.5.7 3.5-.4 4.1-.5.6-.1 1.9-.7 2.1-1.5.2-.8.2-1.4.2-1.5-.1-.1-.3-.2-.7-.4z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Stripe",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
        <rect width="32" height="32" fill="#635BFF"/>
        <path d="M14.7 13.2c0-.7.6-1 1.5-1 1.3 0 3 .4 4.3 1.1V9.6c-1.4-.6-2.9-.8-4.3-.8-3.5 0-5.9 1.8-5.9 4.8 0 4.7 6.4 3.9 6.4 5.9 0 .8-.7 1.1-1.7 1.1-1.5 0-3.4-.6-4.8-1.5v3.7c1.6.7 3.3 1 4.8 1 3.6 0 6.1-1.8 6.1-4.9-.1-5-6.4-4.1-6.4-5.7z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Teamleader",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
        <rect width="32" height="32" fill="#0F4A91"/>
        <path d="M8 10h16v3H8zM8 14.5h10v3H8zM8 19h13v3H8z" fill="white"/>
      </svg>
    ),
  },
];

const ITEMS = [...LOGOS, ...LOGOS];

export default function IntegrationScroll() {
  const { t } = useLang();
  return (
    <section className="py-14 border-y border-gray-200 bg-[#F9FAFB] overflow-hidden">
      <div className="g-container mb-8">
        <p className="label-mono text-center">
          {t.integration.title}
        </p>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
          style={{ background: "linear-gradient(to right, #F9FAFB, transparent)" }} />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
          style={{ background: "linear-gradient(to left, #F9FAFB, transparent)" }} />
        <div className="flex gap-4 w-max" style={{ animation: "marquee 32s linear infinite" }}>
          {ITEMS.map((logo, i) => (
            <div key={i}
              className="flex items-center gap-3 bg-white border border-gray-200 px-5 py-3 hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-default select-none">
              <div className="w-6 h-6 flex items-center justify-center shrink-0">{logo.svg}</div>
              <span className="text-gray-900 font-medium text-sm whitespace-nowrap">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
