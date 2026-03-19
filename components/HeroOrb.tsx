"use client";
import { motion } from "framer-motion";

export default function HeroOrb() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none pointer-events-none">
      {/* Outer glow ring */}
      <motion.div
        className="absolute w-[480px] h-[480px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(99,112,245,0.08) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Mid ring */}
      <motion.div
        className="absolute w-[340px] h-[340px] rounded-full border border-brand-200/50"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {/* Orbiting dot */}
        <motion.div
          className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-400 shadow-[0_0_12px_rgba(99,112,245,0.7)]"
        />
      </motion.div>

      {/* Inner orbit ring */}
      <motion.div
        className="absolute w-[220px] h-[220px] rounded-full border border-brand-300/40"
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,144,251,0.8)]"
        />
      </motion.div>

      {/* Main glass orb */}
      <motion.div
        className="relative w-60 h-60 rounded-full glass-orb"
        animate={{
          y: [0, -16, 0],
          rotate: [0, 3, 0, -2, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Inner highlight */}
        <div
          className="absolute top-[12%] left-[15%] w-[55%] h-[40%] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",
            filter: "blur(4px)",
          }}
        />
        {/* Secondary glow blob */}
        <div
          className="absolute bottom-[15%] right-[10%] w-[45%] h-[35%] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(165,184,253,0.45) 0%, transparent 70%)",
            filter: "blur(6px)",
          }}
        />
      </motion.div>

      {/* Floating accent squares */}
      <motion.div
        className="absolute top-[18%] right-[15%] w-10 h-10 rounded-xl bg-white/60 backdrop-blur-sm border border-brand-200/50 shadow-card"
        animate={{ y: [0, -10, 0], rotate: [8, 14, 8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-[22%] left-[12%] w-7 h-7 rounded-lg bg-brand-100/80 backdrop-blur-sm border border-brand-200/40 shadow-sm"
        animate={{ y: [0, 10, 0], rotate: [-5, -12, -5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute top-[55%] right-[8%] w-5 h-5 rounded-md bg-indigo-200/70 backdrop-blur-sm border border-indigo-300/40"
        animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Stat badge floating */}
      <motion.div
        className="absolute bottom-[28%] right-[-2%] glass-card px-4 py-2.5 flex items-center gap-2.5 shadow-glass"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="text-green-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-900">15+ hrs saved</div>
          <div className="text-[10px] text-slate-500">per week, per team</div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[22%] left-[-4%] glass-card px-4 py-2.5 flex items-center gap-2.5 shadow-glass"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="text-brand-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-900">GDPR Compliant</div>
          <div className="text-[10px] text-slate-500">EU servers only</div>
        </div>
      </motion.div>
    </div>
  );
}
