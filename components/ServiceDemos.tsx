"use client";
import { useEffect, useState, useRef } from "react";
import { useLang } from "@/lib/LanguageContext";
import { demoContent } from "@/lib/demoTranslations";
import { motion, AnimatePresence } from "framer-motion";

// ─────────────────────────────────────────────────────────────
// SHARED ICONS
// ─────────────────────────────────────────────────────────────
const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7"/></svg>
);
const CalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
);
const MailIcon = () => (
  <svg width="12" height="12" viewBox="0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
);
const AIIcon = () => (
  <img src="/images/logo-triangle.svg" alt="Gradient mark" className="w-3 h-3 object-contain" />
);
const PersonIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
const PhoneIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

// ─────────────────────────────────────────────────────────────
// 1. VOICE AGENT DEMO
// ─────────────────────────────────────────────────────────────
export function VoiceAgentDemo() {
  const { lang } = useLang();
  const content = demoContent[lang].voice;
  const msgs = content.msgs;
  
  const [msgIdx, setMsgIdx] = useState(-1);

  useEffect(() => {
    let t: any;
    if (msgIdx < 0) {
      t = setTimeout(() => setMsgIdx(0), 1000);
    } else if (msgIdx < msgs.length) {
      const words = msgs[msgIdx].text.split(" ").length;
      const readingTime = words <= 8 ? 2000 : 3500; // Increased to ensure visibility
      t = setTimeout(() => setMsgIdx(p => p + 1), readingTime);
    } else {
      t = setTimeout(() => setMsgIdx(0), 4000);
    }
    return () => clearTimeout(t);
  }, [msgIdx, msgs]);

  const currentMsg = msgIdx >= 0 && msgIdx < msgs.length ? msgs[msgIdx] : null;

  // Derive if someone is active
  const isAISpeaking = currentMsg?.speaker === "AI";
  const isClientSpeaking = currentMsg?.speaker === "C";

  return (
    <div className="w-full h-full bg-white flex flex-col pt-4 overflow-hidden shadow-sm relative border border-gray-100">
      <div className="flex-1 flex flex-col relative px-8">
        
        {/* Phone UI Header */}
        <div className="flex flex-col items-center mb-10 mt-2">
           <div className="w-16 h-16 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shadow-sm mb-3">
              <PhoneIcon />
           </div>
           <p className="text-[10px] font-mono text-gray-400 tracking-[0.2em] uppercase">{content.ui.inbound}</p>
           <h4 className="text-sm font-bold text-gray-900 mt-1">S. Janssen</h4>
        </div>

        {/* Dynamic Bubble Area */}
        <div className="flex-1 flex flex-col justify-center items-center relative min-h-[140px]">
           <AnimatePresence mode="wait">
             {currentMsg && (
               <motion.div 
                 key={msgIdx}
                 initial={{ opacity: 0, y: 10, scale: 0.95 }}
                 animate={{ opacity: 1, y: 0, scale: 1 }}
                 exit={{ opacity: 0, y: -10, scale: 0.95 }}
                 transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                 className="flex flex-col items-center text-center"
               >
                 <span className={`text-[9px] font-mono mb-2 uppercase tracking-widest ${currentMsg.speaker === "C" ? "text-gray-400" : "text-black font-bold"}`}>
                   {currentMsg.speaker === "C" ? content.ui.client : content.ui.agent}
                 </span>
                 <div className={`p-5 rounded-2xl shadow-lg border text-sm max-w-[280px] leading-relaxed transition-colors duration-500 ${currentMsg.speaker === "C" ? "bg-white border-gray-100 text-gray-800" : "bg-black border-black text-white"}`}>
                    {currentMsg.text}
                 </div>
               </motion.div>
             )}
           </AnimatePresence>

           {/* Feedback Overlays */}
           <div className="absolute top-0 left-0 right-0 pointer-events-none flex flex-col items-center gap-2">
              <AnimatePresence>
                {msgIdx === 4 && (
                   <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} exit={{opacity:0}} className="bg-white/90 backdrop-blur-sm text-gray-900 border border-gray-200 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                      <CheckIcon />
                      <span className="text-[8px] font-bold uppercase tracking-widest">{content.ui.confirmed}</span>
                   </motion.div>
                )}
                {msgIdx >= 5 && (
                   <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} className="bg-white/90 backdrop-blur-sm text-gray-900 border border-gray-200 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                      <MailIcon />
                      <span className="text-[8px] font-bold uppercase tracking-widest">{content.ui.sent}</span>
                   </motion.div>
                )}
              </AnimatePresence>
           </div>
        </div>

        {/* Microphone Indicator */}
        <div className="h-20 flex flex-col justify-center items-center pb-8">
           <div className="relative">
              <motion.div 
                className={`w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center transition-colors duration-500 ${(isAISpeaking || isClientSpeaking) ? "bg-black border-black shadow-xl" : "bg-white"}`}
                animate={(isAISpeaking || isClientSpeaking) ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                transition={(isAISpeaking || isClientSpeaking) ? { repeat: Infinity, duration: 2 } : {}}
              >
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={(isAISpeaking || isClientSpeaking) ? "white" : "#71717A"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
                 </svg>
              </motion.div>
              
              {/* Waveform circles */}
              <AnimatePresence>
                 {(isAISpeaking || isClientSpeaking) && (
                   <>
                     <motion.div 
                       initial={{ opacity: 0, scale: 0.8 }} 
                       animate={{ opacity: 0.3, scale: 1.5 }} 
                       exit={{ opacity: 0 }}
                       transition={{ repeat: Infinity, duration: 1.5 }} 
                       className="absolute inset-0 rounded-full border border-gray-400 pointer-events-none" 
                     />
                     <motion.div 
                       initial={{ opacity: 0, scale: 0.8 }} 
                       animate={{ opacity: 0.2, scale: 2.2 }} 
                       exit={{ opacity: 0 }}
                       transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} 
                       className="absolute inset-0 rounded-full border border-gray-400 pointer-events-none" 
                     />
                   </>
                 )}
              </AnimatePresence>
           </div>
        </div>
      </div>
    </div>
    );
}

// ─────────────────────────────────────────────────────────────
// 2. EMAIL AUTOMATION DEMO (Outlook Inbox Style)
// ─────────────────────────────────────────────────────────────
export function EmailDemo() {
  const { lang } = useLang();
  const content = demoContent[lang].email;
  const wf = content.workflow;
  
  const [step, setStep] = useState(0);

  useEffect(() => {
    let t: any;
    if (step === 0) t = setTimeout(() => setStep(1), 1500); // 0=Received
    else if (step === 1) t = setTimeout(() => setStep(2), 2000); // 1=Analyzed & Reading
    else if (step === 2) t = setTimeout(() => setStep(3), 3000); // 2=Generating reply
    else if (step === 3) t = setTimeout(() => setStep(4), 1500); // 3=Saved to drafts
    else if (step === 4) t = setTimeout(() => setStep(5), 2000); // 4=Sent
    else if (step === 5) t = setTimeout(() => setStep(0), 4000); // Loop
    return () => clearTimeout(t);
  }, [step]);

  return (
    <div className="w-full h-full flex overflow-hidden border border-gray-100 bg-white">
      {/* UI Area (Left 65%) */}
      <div className="w-[65%] flex flex-col h-full bg-[#f3f2f1]">
         {/* Outlook Header */}
         <div className="h-6 bg-[#0078d4] flex items-center px-2 shrink-0">
           <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6" fill="none" stroke="white" strokeWidth="2"/></svg>
           <span className="text-white text-[8px] ml-1.5 font-semibold">Outlook</span>
         </div>
         
         <div className="flex flex-1 overflow-hidden">
            {/* Sidebar */}
            <div className="w-[30%] border-r border-gray-300 bg-white flex flex-col py-2 px-1 gap-1">
               <div className={`rounded px-1.5 py-1 flex justify-between items-center text-[8px] transition-colors ${step < 3 ? "bg-blue-50 text-blue-700 font-bold" : "text-gray-600"}`}>
                 <span>{content.ui.sidebar.inbox}</span>
                 {step < 3 && <span className="text-[7px] bg-[#0078d4] text-white px-1 rounded">1</span>}
               </div>
               <div className={`rounded px-1.5 py-1 text-[8px] transition-colors ${step === 3 ? "bg-blue-50 text-blue-700 font-bold" : "text-gray-600"}`}>
                 {content.ui.sidebar.drafts} {step === 3 && <span className="font-normal text-gray-500">(1)</span>}
               </div>
               <div className={`rounded px-1.5 py-1 text-[8px] transition-colors ${step >= 4 ? "bg-blue-50 text-blue-700 font-bold" : "text-gray-600"}`}>
                 {content.ui.sidebar.sent}
               </div>
            </div>

            {/* Middle List */}
            <div className="w-[70%] bg-white flex flex-col">
              <AnimatePresence mode="wait">
                {(step < 4) ? (
                  <motion.div 
                    key="inbox-item"
                    initial={{ opacity:0, x:-10 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:10 }}
                    className="p-2 border-b border-gray-100 bg-blue-50/30"
                  >
                    <p className="text-[9px] font-bold text-gray-900 truncate">Information Request</p>
                    <p className="text-[8px] text-gray-500 truncate">{content.incoming}</p>
                  </motion.div>
                ) : (
                  <motion.div key="empty" className="p-4 text-center text-[8px] text-gray-400">{content.ui.allCaughtUp}</motion.div>
                )}
              </AnimatePresence>
              
              {/* Reading Pane inside list area for space constraints */}
              {(step >= 1 && step < 4) && (
                <div className="flex-1 border-t border-gray-200 bg-gray-50 p-2 overflow-hidden flex flex-col relative">
                   {step === 1 && (
                     <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] flex flex-col items-center justify-center z-10">
                        <svg className="animate-spin h-4 w-4 text-gray-500 mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        <p className="text-[8px] font-bold text-black">{content.ui.reading}</p>
                     </div>
                   )}
                   {step === 3 && (
                     <p className="text-[8px] font-bold text-amber-600 mb-1 bg-amber-50 rounded p-1 inline-block border border-amber-200 w-fit">{content.ui.drafted}</p>
                   )}
                   <p className="text-[8px] font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-2">Information Request</p>
                   
                   <p className="text-[8px] text-gray-700 leading-relaxed bg-white border border-gray-100 p-1.5 rounded-sm shadow-sm mb-2 whitespace-pre-wrap">
                     {content.incoming}
                   </p>
                   
                   {(step >= 2) && (
                      <div className="text-[8px] text-gray-600 mt-1 mb-2 border-l-2 border-gray-500 pl-2">
                        {step === 2 && (
                          <span className="inline-block animate-pulse w-1 h-3 bg-gray-500 align-middle"></span>
                        )}
                       {(step >= 3) ? content.replyDraft : ""}
                     </div>
                   )}

                   {step === 3 && (
                     <motion.button 
                       initial={{ scale: 0.9 }} animate={{ scale: 1 }}
                       className="mt-auto bg-[#0078d4] text-white text-[8px] py-1 px-3 rounded shadow-sm w-fit active:scale-95"
                     >
                       {content.ui.sendBtn}
                     </motion.button>
                   )}
                </div>
              )}

              {step >= 4 && (
                <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} className="m-auto flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-1">
                    <CheckIcon />
                  </div>
                  <p className="text-[8px] text-gray-600 font-medium">{content.ui.sentSuccess}</p>
                </motion.div>
              )}
            </div>
         </div>
      </div>

      {/* Vertical Workflow (Right 35%) */}
      <div className="w-[35%] bg-white border-l border-gray-100 flex flex-col justify-center px-4 relative shrink-0">
          <div className="absolute left-[23px] top-6 bottom-6 w-0.5 bg-gray-100 z-0">
            <motion.div 
              className="w-full bg-gray-500"
              animate={{ height: `${(Math.min(step, 4) / 4) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
         <div className="space-y-4">
           {wf.map((label: string, i: number) => {
             const active = step >= i;
             return (
               <div key={i} className="flex flex-col relative z-10 pl-6 h-[20px] justify-center">
                  <div className={`absolute left-0 w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center bg-white transition-all ${active ? "border-gray-500 shadow-sm" : "border-gray-200"}`}>
                    {active && <div className="w-[6px] h-[6px] bg-gray-500 rounded-full" />}
                  </div>
                 <p className={`text-[8px] font-medium leading-tight ${active ? "text-gray-900" : "text-gray-400"}`}>{label}</p>
               </div>
             )
           })}
         </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 3. INVOICING AGENT DEMO
// ─────────────────────────────────────────────────────────────
export function InvoicingDemo() {
  const { lang } = useLang();
  const c = demoContent[lang].invoicing;
  
  const [step, setStep] = useState(0);

  useEffect(() => {
    let t: any;
    if (step === 0) t = setTimeout(() => setStep(1), 1500); // Intro
    else if (step >= 1 && step < 6) t = setTimeout(() => setStep(s => s + 1), 2000); // 2s per step exactly
    else t = setTimeout(() => setStep(0), 2000); // Reset
    return () => clearTimeout(t);
  }, [step]);
  
  let wStep = 0;
  if (step >= 2) wStep = 1;
  if (step >= 3) wStep = 2;
  if (step >= 4) wStep = 3;
  if (step >= 5) wStep = 4;

  return (
    <div className="w-full h-full flex flex-col overflow-hidden border border-gray-100 bg-[#F9FAFB]">
      
      {/* Top Banner (Trigger) */}
      <div className="h-10 bg-white border-b border-gray-100 flex items-center justify-between px-4 shrink-0 shadow-sm relative z-20">
         <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">{c.label}</p>
         <AnimatePresence mode="popLayout">
           {step >= 0 && (
             <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} className="bg-green-50 text-green-700 border border-green-200 px-2 py-1 rounded flex items-center gap-1.5 shadow-sm">
                <CheckIcon />
                <span className="text-[8px] font-bold leading-none">{c.trigger}</span>
             </motion.div>
           )}
         </AnimatePresence>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Dynamic Display */}
        <div className="w-[55%] p-4 relative flex flex-col items-center justify-center bg-gray-50 border-r border-gray-200 overflow-hidden">
           
           {/* Center stage for the Invoice document */}
           <motion.div 
             className="w-full max-w-[200px] bg-white border border-gray-200 rounded-sm shadow-md flex flex-col p-4 relative"
             animate={{ y: step === 0 ? 20 : 0, opacity: step === 0 ? 0 : 1 }}
           >
              {step === 1 && (
                 <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] z-10 flex flex-col items-center justify-center">
                   <svg className="animate-spin h-4 w-4 text-gray-500 mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                   <p className="text-[8px] font-bold text-gray-800">{c.invoice.generating}</p>
                 </div>
              )}
              
              <div className="flex justify-between items-start border-b border-gray-100 pb-2 mb-2">
                 <div>
                   <p className="text-[9px] font-black tracking-tight">{c.invoice.company}</p>
                   <p className="text-[7px] text-gray-500">INVOICE #2084</p>
                 </div>
                 <div className="text-right">
                   <p className="text-[7px] text-gray-500">{c.invoice.billedTo}</p>
                   <p className="text-[8px] font-bold text-gray-900">{c.invoice.customer}</p>
                 </div>
              </div>
              
              <div className="flex justify-between items-center text-[8px] mb-1">
                 <span className="text-gray-600 font-medium">{c.invoice.service}</span>
                 <span className="font-mono">{step > 0 && step !== 6 ? c.invoice.amount : "€0"}</span>
              </div>
              <div className="flex justify-between items-center text-[8px] mb-3 text-gray-400">
                 <span>{c.invoice.vatLabel}</span>
                 <span className="font-mono">{step > 0 && step !== 6 ? c.invoice.vat : "€0"}</span>
              </div>
              <div className="flex justify-between items-center text-[9px] font-black border-t border-gray-100 pt-2">
                 <span>{c.invoice.totalLabel}</span>
                 <span className="font-mono text-brand-600">{step > 0 && step !== 6 ? c.invoice.total : "€0"}</span>
              </div>

              {/* Overlays / Events on top of invoice */}
              <AnimatePresence>
                {step === 3 && (
                  <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:10}} className="absolute left-1/2 -translate-x-1/2 -bottom-4 bg-blue-50 text-blue-800 rounded-full border border-blue-200 flex flex-nowrap items-center justify-center z-30 shadow-lg px-3 py-1.5 min-w-[120px]">
                     <MailIcon />
                     <p className="text-[8px] font-bold ml-1.5 whitespace-nowrap">{c.sending}</p>
                  </motion.div>
                )}
                {step === 4 && (
                  <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:10}} className="absolute left-1/2 -translate-x-1/2 -bottom-4 bg-red-50 text-red-600 rounded-full border border-red-200 flex items-center justify-center z-30 shadow-lg px-3 py-1.5 min-w-[130px]">
                     <svg className="animate-spin h-3 w-3 mr-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                     <p className="text-[8px] font-bold whitespace-nowrap">{c.reminding}</p>
                  </motion.div>
                )}
                {step >= 5 && (
                  <motion.div initial={{scale:2, opacity:0}} animate={{scale:1, opacity:1}} transition={{type:"spring", bounce:0.5}} className="absolute inset-0 flex items-center justify-center z-20 overflow-hidden pointer-events-none">
                     <div className="rotate-[-15deg] border-[3px] border-green-500 text-green-500 font-black tracking-widest text-2xl px-3 py-1 bg-white/80 rounded backdrop-blur-sm shadow-md uppercase">
                       {c.paidText}
                     </div>
                  </motion.div>
                )}
              </AnimatePresence>
           </motion.div>

           {/* Optional Highlight banner */}
           <AnimatePresence>
             {step >= 5 && (
               <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="mt-8 bg-brand-600 border border-brand-500 rounded px-3 py-2 w-full max-w-[200px] shadow-sm flex items-center gap-2">
                 <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                   <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M5 13l4 4L19 7"/></svg>
                 </div>
                 <p className="text-[7px] font-bold text-white leading-tight">{c.highlight}</p>
               </motion.div>
             )}
           </AnimatePresence>

        </div>

        {/* Workflow */}
        <div className="w-[45%] bg-white flex flex-col justify-center px-3 relative shrink-0">
           <div className="absolute left-[17px] top-6 bottom-6 w-0.5 bg-gray-100 z-0">
             <motion.div 
               className="w-full bg-brand-500"
               animate={{ height: `${(Math.min(wStep, 4) / 4) * 100}%` }}
               transition={{ duration: 0.5 }}
             />
           </div>
           <div className="space-y-4">
             {c.workflow.map((label: string, i: number) => {
               const active = wStep >= i;
               return (
                 <div key={i} className="flex flex-col relative z-10 pl-5 h-[20px] justify-center">
                   <div className={`absolute left-0 w-[10px] h-[10px] rounded-full border-2 bg-white transition-all ${active ? "border-brand-500 shadow-sm outline-[1px] outline-brand-500/30" : "border-gray-200"}`}>
                     {active && <div className="w-[4px] h-[4px] m-[1px] bg-brand-500 rounded-full" />}
                   </div>
                   <p className={`text-[8px] font-medium leading-tight ${active ? "text-gray-900" : "text-gray-400"}`}>{label}</p>
                 </div>
               )
             })}
           </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 4. VIRTUAL EMPLOYEE DEMO (Terminal Workspace)
// ─────────────────────────────────────────────────────────────
export function VirtualDemo() {
  const { lang } = useLang();
  const c = demoContent[lang].virtual;
  
  const [lineIdx, setLineIdx] = useState(-1);
  const [hasStarted, setHasStarted] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!hasStarted) return; // Wait for hover
    let t: any;
    if (lineIdx === -1) {
       t = setTimeout(() => setLineIdx(0), 1500); // Give time for typing animation
    } else if (lineIdx < c.script.length) {
       const line = c.script[lineIdx];
       let delay = 2500; // Slower default
       if ("u" in line) delay = 2000;
       if ("ai" in line) delay = 1800;
       if ("aiList" in line) delay = 3500; // Extra time to read list
       t = setTimeout(() => setLineIdx(s => s + 1), delay);
    } else {
       t = setTimeout(() => { setLineIdx(-1); setHasStarted(false); }, 4000); // Loop and reset trigger
    }
    return () => clearTimeout(t);
  }, [lineIdx, c.script.length, hasStarted]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lineIdx]);

  // Derive workflow step
  let step = 0;
  if (lineIdx >= 0) step = 1;
  if (lineIdx >= 2) step = 2; // Report gen
  if (lineIdx >= 7) step = 3; // Insights
  if (lineIdx >= 5) step = 4; // Stored (actually line 5 is stored, so if lineIdx>=5 then step=4 but wait, order in array is 0=init, 1=report, 2=insights? The workflow array is: Command, Report, Insights, Stored, Shared. So let's map carefully.
  // c.workflow: ["Command received", "Report generated", "Insights created", "Stored in system", "Shared with team"]
  // script order:
  // 0: u: generate report  => Step 0 (idx>=0)
  // 2: ai: report created  => Step 1 (idx>=2)
  // 5: ai: saved to /fin   => Step 3 (Stored) (idx>=5) Let's make Stored step 3, Insights step 2 to match script order? 
  // Wait, user says: "Step 1 Command, Step 2 Report, Step 3 Insights, Step 4 Stored, Step 5 Shared".
  // Let's just linearly increase step based on lineIdx for visual progression.
  let wStep = Math.floor(lineIdx / 2.4);

  return (
    <motion.div 
      className="w-full h-full flex overflow-hidden border border-gray-100 bg-[#1E1E1E]"
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setHasStarted(true)}
    >
      
      {/* Terminal Area (left 65%) */}
      <div className="w-[65%] flex flex-col border-r border-gray-700 relative">
         {/* Mac Header */}
         <div className="h-6 bg-[#2D2D2D] border-b border-[#3D3D3D] flex items-center px-2 shrink-0 justify-between">
           <div className="flex gap-1.5">
             <div className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-80"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 opacity-80"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-green-500 opacity-80"></div>
           </div>
           <p className="text-[8px] text-[#A0A0A0] font-mono tracking-wider">{c.header}</p>
           <div className="w-10"></div>
         </div>

         {/* Status Block */}
         <div className="p-3 border-b border-[#333] shrink-0">
           <p className="text-[7px] text-gray-500 font-mono mb-1">$ status --employee gradient</p>
           <div className="text-[8px] font-mono text-[#D4D4D4] grid grid-cols-[50px_1fr] gap-x-2 leading-tight">
             <span className="text-gray-500 font-bold uppercase tracking-tighter">user</span> <span>Admin</span>
             <span className="text-gray-500 font-bold uppercase tracking-tighter">role</span> <span className="text-gray-400">{c.status.role}</span>
             <span className="text-gray-500 font-bold uppercase tracking-tighter">status</span> <span className="text-green-500">● {c.status.state}</span>
           </div>
         </div>

         {/* Content */}
         <div className="flex-1 overflow-y-auto px-3 py-2 scrollbar-hide min-h-0 relative flex flex-col" ref={scrollRef}>
            {hasStarted ? (
               <div className="flex flex-col flex-1">
                 <p className="text-[9px] font-mono text-gray-200 mb-1 overflow-hidden whitespace-nowrap border-r-2 border-gray-200 animate-[typing_1s_steps(40,end),blink_.75s_step-end_infinite] w-fit">
                   $ gradient-ai start
                 </p>
                 <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 1.0}} className="text-[9px] font-mono text-[#D4D4D4] mb-3 border-b border-[#333] pb-2">
                   Welcome back. {c.greeting}
                 </motion.p>
                 
                 <div className="space-y-2 pb-4 flex-1">
                   <AnimatePresence>
                     {c.script.slice(0, Math.max(0, lineIdx + 1)).map((line: any, i: number) => {
                       if (lineIdx === -1) return null; // Don't show script till lineIdx >= 0
                       return (
                         <motion.div key={i} initial={{opacity:0, y:5}} animate={{opacity:1, y:0}} className="text-[9px] font-mono leading-relaxed mt-1">
                           {"u" in line && (
                             <p className="text-gray-200"><span className="text-gray-500 mr-1">{">"}</span>{line.u}</p>
                           )}
                           {"ai" in line && (
                              <p className="text-gray-400">{line.ai}</p>
                           )}
                           {"aiList" in line && (
                              <ul className="text-gray-500 pl-2 border-l border-[#555] ml-1 my-1 space-y-0.5 py-0.5">
                                {line.aiList.map((item: string, j: number) => (
                                  <li key={j}>- {item}</li>
                                ))}
                              </ul>
                           )}
                         </motion.div>
                       );
                     })}
                   </AnimatePresence>
                   <div className="w-1.5 h-3 bg-white/50 animate-pulse mt-1 inline-block"></div>
                 </div>
               </div>
            ) : (
               <div className="flex flex-col items-center justify-center flex-1 h-full opacity-40">
                  <p className="text-[9px] font-mono text-gray-500 mb-2">Terminal Standby</p>
               </div>
            )}
         </div>
      </div>

      {/* Vertical Workflow & Activities (Right 35%) */}
      <div className="w-[35%] bg-[#1E1E1E] flex flex-col pt-4 pb-2 px-3 relative shrink-0">
         
         <div className="flex-1 relative border-b border-[#333] mb-3 pb-3">
            <p className="text-[8px] text-[#A0A0A0] font-mono uppercase tracking-widest mb-3">Live Workflow</p>
            <div className="absolute left-[15px] top-[30px] bottom-6 w-0.5 bg-[#333] z-0">
              <motion.div 
                className="w-full bg-gray-500"
                animate={{ height: `${(Math.min(wStep, 4) / 4) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="space-y-4">
              {c.workflow.map((label: string, i: number) => {
                const active = wStep >= i;
                return (
                  <div key={i} className="flex flex-col relative z-10 pl-5 h-[20px] justify-center">
                    <div className={`absolute left-0 w-[12px] h-[12px] rounded border flex items-center justify-center bg-[#1E1E1E] transition-all ${active ? "border-gray-500 shadow-[0_0_8px_rgba(255,255,255,0.2)]" : "border-[#444]"}`}>
                      {active && <div className="w-[6px] h-[6px] bg-gray-500" />}
                    </div>
                    <p className={`text-[8px] font-mono leading-tight ${active ? "text-[#D4D4D4]" : "text-[#666]"}`}>{label}</p>
                  </div>
                )
              })}
            </div>
         </div>

         {/* Extracted Recent Activities Panel */}
         <div className="shrink-0 h-[80px]">
            <p className="text-[8px] text-[#A0A0A0] font-mono uppercase tracking-widest mb-2">Recent Activities</p>
            <div className="space-y-1.5 overflow-hidden">
               <div className="flex items-center gap-1.5 opacity-50">
                 <div className="w-1.5 h-1.5 bg-gray-600 rounded-full shrink-0"></div>
                 <p className="text-[7px] text-gray-600 truncate font-mono">Synced CRM Contacts</p>
               </div>
               <div className="flex items-center gap-1.5 opacity-50">
                 <div className="w-1.5 h-1.5 bg-gray-600 rounded-full shrink-0"></div>
                 <p className="text-[7px] text-gray-600 truncate font-mono">Optimized Ad Budget</p>
               </div>
               {lineIdx >= 2 && (
                 <motion.div initial={{opacity:0, x:10}} animate={{opacity:1, x:0}} className="flex items-center gap-1.5">
                   <div className="w-1.5 h-1.5 bg-[#4FC1FF] rounded-full shrink-0"></div>
                   <p className="text-[7px] text-[#4FC1FF] truncate font-mono whitespace-nowrap">Report Generator [RUNNING]</p>
                 </motion.div>
               )}
            </div>
         </div>

      </div>

    </motion.div>
  );
}
