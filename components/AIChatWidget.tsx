"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "bot";
  text: string;
}

const QA_EN: Record<string, string> = {
  "hello": "Hello! I'm Gradient's AI assistant. I can answer questions about our AI automation services for Belgian SMEs. What would you like to know?",
  "hi": "Hello! Ask me anything about Gradient's AI services, pricing, or how automation could help your business.",
  "what do you do": "We build and deploy custom AI agents for Belgian SMEs chatbots, voice receptionists, email automation, data analysts, and advertising agents. Each integration is live in 14 days.",
  "pricing": "Our pricing is tailored per project. Book a free discovery call and we'll give you a clear proposal with expected ROI within 48 hours.",
  "how long": "Most automations go live in 14 days after the kickoff call. We handle everything setup, integration, testing, and monitoring.",
  "gdpr": "Yes, fully GDPR compliant. All data is processed on EU servers. We sign a Data Processing Agreement (DPA) with every client.",
  "languages": "Our AI agents speak Dutch, French, and English natively covering every Belgian customer.",
  "services": "We offer: AI Chatbot, Voice Agent, Email Automation, The Analyst (data/reporting), and Advertising Agent. Each is tailored to your business.",
  "contact": "You can book a 15 minute discovery call directly via our website. No pitch, just a concrete roadmap.",
  "default": "Good question. For a detailed answer, I'd recommend booking a 15 minute call with our team they'll give you a tailored answer for your specific business.",
};

const QA_NL: Record<string, string> = {
  "hallo": "Hallo! Ik ben de AI-assistent van Gradient. Ik kan vragen beantwoorden over onze AI-automatiseringsdiensten voor Belgische KMO's. Wat wil je graag weten?",
  "hey": "Hallo! Vraag me alles over de AI-diensten van Gradient, prijzen of hoe automatisering je bedrijf kan helpen.",
  "wat doen jullie": "Wij bouwen en implementeren op maat gemaakte AI-agents voor Belgische KMO's chatbots, voice receptionisten, e-mailautomatisering, data-analisten en advertentie-agents. Elke integratie is live in 14 dagen.",
  "prijs": "Onze prijzen zijn op maat gemaakt per project. Boek een gratis ontdekkingsgesprek en we geven je binnen 48 uur een duidelijk voorstel met de verwachte ROI.",
  "hoe lang": "De meeste automatiseringen gaan live in 14 dagen na de kickoff. Wij regelen alles installatie, integratie, testen en monitoring.",
  "gdpr": "Ja, volledig GDPR-conform. Alle data wordt verwerkt op EU-servers. We tekenen een verwerkingsovereenkomst (DPA) met elke klant.",
  "talen": "Onze AI-agents spreken vloeiend Nederlands, Frans en Engels voor elke Belgische klant.",
  "diensten": "Wij bieden aan: AI Chatbot, Voice Agent, E-mailautomatisering, De Analist (data/rapportage) en Advertentie-agent. Elk is afgestemd op jouw bedrijf.",
  "contact": "Je kunt direct een ontdekkingsgesprek van 15 minuten boeken via onze website. Geen verkoopverhaal, gewoon een concrete routekaart.",
  "default": "Goede vraag. Voor een gedetailleerd antwoord raad ik je aan een gesprek van 15 minuten te boeken met ons team zij geven je een op maat gemaakt antwoord voor jouw specifieke bedrijf.",
};

const QA_FR: Record<string, string> = {
  "bonjour": "Bonjour ! Je suis l'assistant IA de Gradient. Je peux répondre à vos questions sur nos services d'automatisation IA pour les PME belges. Que souhaitez vous savoir ?",
  "salut": "Bonjour ! Posez moi toutes vos questions sur les services IA de Gradient, les tarifs of comment l'automatisation peut aider votre entreprise.",
  "que faites vous": "Nous construisons et déployons des agents IA sur mesure pour les PME belges chatbots, réceptionnistes vocaux, automatisation d'e-mails, analystes de données et agents publicitaires. Chaque intégration est opérationnelle en 14 jours.",
  "prix": "Nos tarifs sont personnalisés par projet. Réservez un appel de découverte gratuit et nous vous ferons une proposition claire avec le ROI attendu sous 48 heures.",
  "combien de temps": "La plupart des automatisations sont opérationnelles 14 jours après l'appel de lancement. Nous nous occupons de tout configuration, intégration, tests et suivi.",
  "rgpd": "Oui, entièrement conforme au RGPD. Toutes les données sont traitées sur des serveurs de l'UE. Nous signons un accord de traitement des données (DPA) avec chaque client.",
  "langues": "Nos agents IA parlent nativement le néerlandais, le français et l'anglais couvrant chaque client belge.",
  "services": "Nous proposons : Chatbot IA, Agent Vocal, Automatisation d'E-mails, L'Analyste (données/rapports) et Agent Publicitaire. Chacun est adapté à votre entreprise.",
  "contact": "Vous pouvez réserver un appel de découverte de 15 minutes directement via notre site web. Pas de discours commercial, juste une feuille de route concrète.",
  "default": "Bonne question. Pour une réponse détaillée, je vous recommande de réserver un appel de 15 minutes avec notre équipe ils vous donneront une réponse personnalisée voor votre entreprise.",
};

function getResponse(input: string, lang: "EN" | "NL" | "FR"): string {
  const clean = input.toLowerCase().trim();
  const qa = lang === "NL" ? QA_NL : lang === "FR" ? QA_FR : QA_EN;
  for (const key of Object.keys(qa)) {
    if (key !== "default" && clean.includes(key)) return qa[key];
  }
  return qa["default"];
}

import { useLang } from "@/lib/LanguageContext";

interface Message {
  role: "user" | "bot";
  text: string;
}

// ... QA objects stay as previously updated ...

export default function AIChatWidget() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  
  const greetings = {
    EN: "Hi! I'm Gradient's AI. Ask me anything about our services, timelines, or GDPR compliance.",
    NL: "Hallo! Ik ben de AI van Gradient. Vraag me alles over onze diensten, planning of GDPR-conformiteit.",
    FR: "Bonjour ! Je suis l'IA de Gradient. Posez moi des questions sur nos services, les délais of la conformité RGPD."
  };

  const placeholders = {
    EN: "Ask anything...",
    NL: "Vraag maar raak...",
    FR: "Posez votre question..."
  };

  const labels = {
    EN: "QUESTIONS? JUST ASK.",
    NL: "VRAGEN? STEL ZE HIER.",
    FR: "DES QUESTIONS ? POSEZ LES."
  };

  const [msgs, setMsgs] = useState<Message[]>([]);

  useEffect(() => {
    setMsgs([{ role: "bot", text: greetings[lang as keyof typeof greetings] }]);
  }, [lang]);

  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [msgs, open]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = { role: "user" as const, text: input.trim() };
    const botMsg = { role: "bot" as const, text: getResponse(input, lang as any) };
    setMsgs((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => setMsgs((prev) => [...prev, botMsg]), 700);
  };

  return (
    <>
      {/* Floating button */}
      <button
        id="ai-chat-open"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors duration-200 shadow-2xl"
        aria-label="Open AI chat"
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-h-[520px] flex flex-col bg-white border border-gray-200 shadow-2xl animate-slide-up">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center gap-3">
              <img src="/images/Large Logo Final Gradient.svg" alt="Gradient Logo" className="h-6 w-auto" />
              <p className="text-green-400 text-[10px] font-mono mt-0.5">● ONLINE</p>
            </div>
            <span className="label-mono text-[10px]">{labels[lang as keyof typeof labels]}</span>
          </div>

          {/* Messages */}
          <div ref={listRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                {m.role === "bot" && (
                  <div className="w-5 h-5 flex items-center justify-center mr-2 mt-1 shrink-0">
                    <img src="/images/logo-triangle.svg" alt="Gradient mark" className="h-3.5 w-3.5 object-contain" />
                  </div>
                )}
                <div className={m.role === "user" ? "chat-bubble-user" : "chat-bubble-bot"}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="px-3 py-3 border-t border-gray-200 flex gap-2">
            <input
              id="ai-chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder={placeholders[lang as keyof typeof placeholders]}
              className="flex-1 bg-gray-50 border border-gray-200 px-3 py-2 text-gray-900 text-xs placeholder:text-gray-400 focus:outline-none focus:border-gray-400 font-mono"
            />
            <button onClick={send} className="bg-black text-white px-3 py-2 hover:bg-gray-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
