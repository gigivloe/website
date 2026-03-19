"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import { demoContent } from "@/lib/demoTranslations";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: string;
  text: string;
}

export default function ChatbotDemo() {
  const { lang } = useLang();
  const content = demoContent[lang].homeChat;
  const CONVO = content.msgs;
  
  const [visible, setVisible] = useState<Message[]>([]);
  const [msgIdx, setMsgIdx] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisible([]);
    setMsgIdx(-1);
    const startTimer = setTimeout(() => setMsgIdx(0), 800);
    return () => clearTimeout(startTimer);
  }, [lang]);

  useEffect(() => {
    if (msgIdx < 0) return;
    
    if (msgIdx < CONVO.length) {
      setVisible(prev => [...prev, CONVO[msgIdx]]);
      const timer = setTimeout(() => {
        setMsgIdx(prev => prev + 1);
      }, CONVO[msgIdx].role === "user" ? 1200 : 2000); 
      return () => clearTimeout(timer);
    } else {
      // Loop conversation
      const loop = setTimeout(() => {
        setVisible([]);
        setMsgIdx(0);
      }, 5000);
      return () => clearTimeout(loop);
    }
  }, [msgIdx, CONVO]);

  // Removed intrusive manual DOM scrolling that was hijacking window focus

  // Determine workflow step based on msgIdx
  // 0: Start
  // 6: Lead captured (John Smith...)
  // 7: Appointment scheduled & Confirmation
  let activeStep = 0;
  if (msgIdx >= 0) activeStep = 1; // Chat started
  if (msgIdx >= 6) activeStep = 2; // Lead captured
  if (msgIdx >= 7) activeStep = 3; // Appointment booked
  if (msgIdx >= 7 && visible.length > 7) { 
     // A bit after msg 7 appears
     setTimeout(() => {}, 500); // Will use a trick, just light up 4 if msgIdx > 7 or something. Let's make it 4 when msgIdx == CONVO.length
  }
  if (msgIdx >= CONVO.length) activeStep = 4;

  return (
    <div className="w-full h-full flex flex-col bg-white border border-gray-200 shadow-sm overflow-hidden relative">
      <div className="flex-1 flex flex-col min-h-0">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 bg-gray-50 shrink-0">
          <div className="flex items-center gap-3">
            <img src="/images/Large Logo Final Gradient.svg" alt="Gradient Logo" className="h-6 w-auto" />
            <p className="text-green-400 text-[10px] font-mono mt-0.5">● {content.status}</p>
          </div>
          <div className="flex gap-1.5">
            {["bg-gray-300","bg-gray-300","bg-gray-300"].map((c, i) => <div key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />)}
          </div>
        </div>

        {/* Messages */}
        <div ref={containerRef} className="flex-1 overflow-hidden px-4 py-4 space-y-3 min-h-0 flex flex-col justify-end">
          <AnimatePresence>
          {visible.slice(-3).map((msg, i) => (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }} 
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              key={msg.text} // Use text as key to animate out properly
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} w-full`}
            >
              {msg.role === "bot" && (
                <div className="w-6 h-6 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                  <img src="/images/logo-triangle.svg" alt="Gradient mark" className="h-4 w-4 object-contain" />
                </div>
              )}
              <div className={msg.role === "user" ? "chat-bubble-user" : "chat-bubble-bot"}>
                {msg.text}
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
          
          {/* Typing indicator */}
          {msgIdx >= 0 && msgIdx < CONVO.length && CONVO[msgIdx].role === "bot" && visible.length === msgIdx && (
            <div className="flex justify-start">
              <div className="w-6 h-6 flex items-center justify-center mr-2 shrink-0">
                <img src="/images/logo-triangle.svg" alt="Gradient mark" className="h-4 w-4 object-contain" />
              </div>
              <div className="chat-bubble-bot flex items-center gap-1 px-4 py-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{animationDelay:"0ms"}} />
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{animationDelay:"150ms"}} />
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{animationDelay:"300ms"}} />
              </div>
            </div>
          )}
        </div>

        {/* Input bar */}
        <div className="px-4 py-2 border-t border-gray-200 flex gap-2 shrink-0 bg-white">
          <div className="flex-1 bg-white border border-gray-200 px-3 py-1.5 text-gray-400 text-[10px] font-mono flex items-center">
            {content.input}
          </div>
          <button className="bg-black px-3 py-1.5 text-white flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* HORIZONTAL WORKFLOW */}
      <div className="h-28 border-t border-gray-200 bg-gray-50 flex flex-col justify-center px-4 relative shrink-0">
        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest text-center mb-3">
          {content.label}
        </p>

        <div className="relative w-full px-2">
          {/* Line behind */}
          <div className="absolute top-[14px] left-[10%] right-[10%] h-[2px] bg-gray-200 z-0">
             <motion.div 
               className="h-full bg-brand-500"
               animate={{ width: `${((activeStep - 1) / 3) * 100}%` }}
               transition={{ duration: 0.8, ease: "easeInOut" }}
             />
          </div>

          <div className="flex justify-between relative z-10">
            {/* Step 1: Chat */}
            <div className={`flex flex-col items-center gap-1.5 w-16 transition-all duration-500`}>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center bg-white border-2 transition-all duration-500 ${activeStep >= 1 ? "border-brand-500 text-brand-500 shadow-[0_0_8px_rgba(74,144,226,0.3)]" : "border-gray-200 text-gray-300"}`}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <p className={`text-[8px] text-center font-medium leading-tight ${activeStep >= 1 ? "text-gray-900" : "text-gray-400"}`}>{content.workflow[0]}</p>
            </div>

            {/* Step 2: Lead */}
            <div className={`flex flex-col items-center gap-1.5 w-16 transition-all duration-500`}>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center bg-white border-2 transition-all duration-500 ${activeStep >= 2 ? "border-brand-500 text-brand-500 shadow-[0_0_8px_rgba(74,144,226,0.3)]" : "border-gray-200 text-gray-300"}`}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <p className={`text-[8px] text-center font-medium leading-tight ${activeStep >= 2 ? "text-gray-900" : "text-gray-400"}`}>{content.workflow[1]}</p>
            </div>

            {/* Step 3: Calendar */}
            <div className={`flex flex-col items-center gap-1.5 w-16 transition-all duration-500`}>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center bg-white border-2 transition-all duration-500 ${activeStep >= 3 ? "border-brand-500 text-brand-500 shadow-[0_0_8px_rgba(74,144,226,0.3)]" : "border-gray-200 text-gray-300"}`}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <p className={`text-[8px] text-center font-medium leading-tight ${activeStep >= 3 ? "text-gray-900" : "text-gray-400"}`}>{content.workflow[2]}</p>
            </div>

            {/* Step 4: Confirm */}
            <div className={`flex flex-col items-center gap-1.5 w-16 transition-all duration-500`}>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center bg-white border-2 transition-all duration-500 ${activeStep >= 4 ? "border-brand-500 text-brand-500 shadow-[0_0_8px_rgba(74,144,226,0.3)]" : "border-gray-200 text-gray-300"}`}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <p className={`text-[8px] text-center font-medium leading-tight ${activeStep >= 4 ? "text-gray-900" : "text-gray-400"}`}>{content.workflow[3]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
