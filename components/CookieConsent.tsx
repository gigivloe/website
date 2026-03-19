"use client";

import { useEffect, useMemo, useState } from "react";
import { useLang } from "@/lib/LanguageContext";

type ConsentState = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
  version: number;
  updatedAt: string;
};

const COOKIE_NAME = "gradient_cookie_consent";
const COOKIE_VERSION = 1;
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180;

const copy = {
  EN: {
    badge: "Cookie Settings",
    title: "We use cookies",
    body:
      "We use essential cookies to keep the site working. With your consent, we can also use analytics and marketing cookies.",
    essential: "Essential",
    essentialDesc: "Required for core site functionality. Always active.",
    analytics: "Analytics",
    analyticsDesc: "Helps us understand website usage and improve performance.",
    marketing: "Marketing",
    marketingDesc: "Used for ad measurement and remarketing if added later.",
    acceptAll: "Accept all",
    rejectAll: "Reject optional",
    save: "Save preferences",
    manage: "Cookie settings",
  },
  NL: {
    badge: "Cookie-instellingen",
    title: "We gebruiken cookies",
    body:
      "We gebruiken essentiële cookies om de site goed te laten werken. Met jouw toestemming kunnen we ook analytische en marketingcookies gebruiken.",
    essential: "Essentieel",
    essentialDesc: "Nodig voor de basiswerking van de website. Altijd actief.",
    analytics: "Analytics",
    analyticsDesc: "Helpt ons websitegebruik begrijpen en prestaties verbeteren.",
    marketing: "Marketing",
    marketingDesc: "Voor advertentiemeting en remarketing als we die later toevoegen.",
    acceptAll: "Alles accepteren",
    rejectAll: "Optionele weigeren",
    save: "Voorkeuren opslaan",
    manage: "Cookie-instellingen",
  },
  FR: {
    badge: "Paramètres cookies",
    title: "Nous utilisons des cookies",
    body:
      "Nous utilisons des cookies essentiels pour faire fonctionner le site. Avec votre consentement, nous pouvons aussi utiliser des cookies analytiques et marketing.",
    essential: "Essentiels",
    essentialDesc: "Nécessaires au fonctionnement du site. Toujours actifs.",
    analytics: "Analytiques",
    analyticsDesc: "Nous aident à comprendre l’usage du site et à améliorer ses performances.",
    marketing: "Marketing",
    marketingDesc: "Utilisés pour la mesure publicitaire et le remarketing si ajoutés plus tard.",
    acceptAll: "Tout accepter",
    rejectAll: "Refuser l’optionnel",
    save: "Enregistrer",
    manage: "Paramètres cookies",
  },
} as const;

function readConsentCookie(): ConsentState | null {
  if (typeof document === "undefined") return null;
  const raw = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${COOKIE_NAME}=`))
    ?.split("=")[1];

  if (!raw) return null;

  try {
    const parsed = JSON.parse(decodeURIComponent(raw)) as ConsentState;
    if (parsed.version !== COOKIE_VERSION) return null;
    return {
      essential: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      version: COOKIE_VERSION,
      updatedAt: parsed.updatedAt || new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

function writeConsentCookie(consent: ConsentState) {
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(
    JSON.stringify(consent)
  )}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

export default function CookieConsent() {
  const { lang } = useLang();
  const text = useMemo(() => copy[lang], [lang]);
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = readConsentCookie();
    if (existing) {
      setAnalytics(existing.analytics);
      setMarketing(existing.marketing);
      setHasConsent(true);
    } else {
      setOpen(true);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    const openPreferences = () => setOpen(true);
    window.addEventListener("gradient-open-cookie-preferences", openPreferences);
    return () => {
      window.removeEventListener("gradient-open-cookie-preferences", openPreferences);
    };
  }, []);

  if (!mounted) return null;

  const saveConsent = (nextAnalytics: boolean, nextMarketing: boolean) => {
    writeConsentCookie({
      essential: true,
      analytics: nextAnalytics,
      marketing: nextMarketing,
      version: COOKIE_VERSION,
      updatedAt: new Date().toISOString(),
    });
    setAnalytics(nextAnalytics);
    setMarketing(nextMarketing);
    setHasConsent(true);
    setOpen(false);
  };

  return (
    <>
      {open && (
        <div className="fixed inset-x-0 bottom-0 z-[70] px-4 pb-4 md:px-6 md:pb-6">
          <div className="mx-auto max-w-4xl border border-gray-200 bg-white shadow-2xl">
            <div className="grid gap-6 p-5 md:grid-cols-[1.2fr_0.8fr] md:p-6">
              <div>
                <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand-600">
                  {text.badge}
                </p>
                <h2 className="mb-2 text-2xl font-black tracking-tight text-black">
                  {text.title}
                </h2>
                <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                  {text.body}
                </p>
              </div>

              <div className="space-y-3">
                <div className="border border-gray-200 p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-bold text-black">{text.essential}</p>
                      <p className="mt-1 text-xs leading-relaxed text-gray-500">
                        {text.essentialDesc}
                      </p>
                    </div>
                    <span className="shrink-0 bg-black px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-white">
                      On
                    </span>
                  </div>
                </div>

                <label className="block border border-gray-200 p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-bold text-black">{text.analytics}</p>
                      <p className="mt-1 text-xs leading-relaxed text-gray-500">
                        {text.analyticsDesc}
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={analytics}
                      onChange={(e) => setAnalytics(e.target.checked)}
                      className="mt-1 h-4 w-4 shrink-0 accent-black"
                    />
                  </div>
                </label>

                <label className="block border border-gray-200 p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-bold text-black">{text.marketing}</p>
                      <p className="mt-1 text-xs leading-relaxed text-gray-500">
                        {text.marketingDesc}
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={marketing}
                      onChange={(e) => setMarketing(e.target.checked)}
                      className="mt-1 h-4 w-4 shrink-0 accent-black"
                    />
                  </div>
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-t border-gray-200 p-5 md:flex-row md:justify-end md:p-6">
              <button
                onClick={() => saveConsent(false, false)}
                className="border border-gray-300 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-gray-700 transition hover:border-black hover:text-black"
              >
                {text.rejectAll}
              </button>
              <button
                onClick={() => saveConsent(analytics, marketing)}
                className="border border-black bg-white px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition hover:bg-gray-50"
              >
                {text.save}
              </button>
              <button
                onClick={() => saveConsent(true, true)}
                className="bg-black px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-zinc-900"
              >
                {text.acceptAll}
              </button>
            </div>
          </div>
        </div>
      )}

      {hasConsent && !open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-4 left-4 z-[60] border border-gray-300 bg-white px-3 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-gray-700 shadow-sm transition hover:border-black hover:text-black md:bottom-6 md:left-6"
        >
          {text.manage}
        </button>
      )}
    </>
  );
}
