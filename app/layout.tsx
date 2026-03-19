import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Gradient — AI Automation for Belgian SMEs",
  description:
    "Gradient deploys AI Agents that automate your admin, sales, and support — giving your team 15+ hours back every week. GDPR-Compliant & Based in Brussels.",
  keywords: ["AI automation", "Belgium", "SME", "KMO", "GDPR", "Brussels", "AI agents", "workflow automation"],
  openGraph: {
    title: "Gradient — AI Automation for Belgian SMEs",
    description: "We build the digital backbone that automates your admin, sales, and support.",
    locale: "en_BE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <LanguageProvider>
          {children}
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
