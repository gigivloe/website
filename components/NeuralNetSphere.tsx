"use client";
import { useEffect, useRef } from "react";
import { motion, animate } from "framer-motion";

interface Node3D {
  x: number; y: number; z: number;
  baseRadius: number;
  pulseOffset: number;
  pulseSpeed: number;
}

interface Particle {
  fromIdx: number;
  toIdx: number;
  t: number;
  speed: number;
}

function spherePoint(radius: number): [number, number, number] {
  const u = Math.random(), v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  return [
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.sin(phi) * Math.sin(theta),
    radius * Math.cos(phi),
  ];
}

const KEYWORDS = [
  "Automated Invoices", "24/7 Support", "Less Admin",
  "Faster Sales", "Data Insights", "Lead Qualification",
  "Customer Support", "Scheduling", "Reporting",
  "Cost Reduction", "Scalable Operations", "No More Manual Work",
];

// Predefined positions (% from top-left of container) for keyword pills
const KEYWORD_POSITIONS: React.CSSProperties[] = [
  { top: "8%",  left: "-4%"  },
  { top: "20%", right: "-6%" },
  { top: "38%", left: "-8%"  },
  { top: "55%", right: "-4%" },
  { top: "70%", left: "-5%"  },
  { top: "80%", right: "-8%" },
  { top: "12%", left: "15%"  },
  { top: "88%", left: "20%"  },
  { top: "5%",  right: "18%" },
  { top: "92%", right: "22%" },
];

function FloatingKeyword({ word, pos, delay }: {
  word: string;
  pos: React.CSSProperties;
  delay: number;
}) {
  return (
    <motion.div
      className="absolute pointer-events-none z-10"
      style={pos}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale:   [0.85, 1, 1, 0.9],
        y:       [0, -6, -6, 0],
      }}
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        repeatDelay: KEYWORDS.length * 1.8,
        ease: "easeInOut",
      }}
    >
      <span className="inline-flex items-center gap-1.5 bg-white/75 backdrop-blur-sm border border-brand-200/60 text-brand-700 text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
        {word}
      </span>
    </motion.div>
  );
}

export default function NeuralNetSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let rotY = 0;
    const rotX = 0.3;
    const N_NODES = 160;
    const SPHERE_R = 170;
    const CONNECT_DIST = 78;
    const FOV = 520;

    const nodes: Node3D[] = Array.from({ length: N_NODES }, () => {
      const [x, y, z] = spherePoint(SPHERE_R);
      return { x, y, z, baseRadius: 1.5 + Math.random() * 1.8, pulseOffset: Math.random() * Math.PI * 2, pulseSpeed: 0.5 + Math.random() * 1.2 };
    });

    const connections: [number, number][] = [];
    for (let i = 0; i < N_NODES; i++) {
      for (let j = i + 1; j < N_NODES; j++) {
        const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y, dz = nodes[i].z - nodes[j].z;
        if (Math.sqrt(dx * dx + dy * dy + dz * dz) < CONNECT_DIST) connections.push([i, j]);
      }
    }

    const particles: Particle[] = [];
    const MAX_PARTICLES = 22;
    function spawnParticle() {
      if (!connections.length) return;
      const [f, t] = connections[Math.floor(Math.random() * connections.length)];
      particles.push({ fromIdx: f, toIdx: t, t: 0, speed: 0.004 + Math.random() * 0.008 });
    }
    for (let i = 0; i < 10; i++) spawnParticle();

    function project(x: number, y: number, z: number, cx: number, cy: number) {
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      let rx = x * cosY + z * sinY;
      const ryRaw = y;
      let rz = -x * sinY + z * cosY;
      const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
      const ry = ryRaw * cosX - rz * sinX;
      rz = ryRaw * sinX + rz * cosX;
      const scale = FOV / (FOV + rz + 280);
      return { sx: cx + rx * scale, sy: cy + ry * scale, scale, depth: rz };
    }

    let lastTime = 0;
    function draw(ts: number) {
      animId = requestAnimationFrame(draw);
      const dt = Math.min(ts - lastTime, 40);
      lastTime = ts;
      const W = canvas!.width, H = canvas!.height, cx = W / 2, cy = H / 2;
      ctx!.clearRect(0, 0, W, H);
      rotY += 0.0018 * (dt / 16);
      const t_s = ts * 0.001;

      const projected = nodes.map((n, i) => ({ i, ...project(n.x, n.y, n.z, cx, cy) }));
      const sorted = [...projected].sort((a, b) => a.depth - b.depth);

      for (const [ai, bi] of connections) {
        const pa = projected[ai], pb = projected[bi];
        const alpha = Math.max(0, Math.min(0.38, (1 - (pa.depth + pb.depth) / 2 / (SPHERE_R * 0.5)) * 0.55)) * 0.38 + 0.04;
        ctx!.beginPath(); ctx!.moveTo(pa.sx, pa.sy); ctx!.lineTo(pb.sx, pb.sy);
        ctx!.strokeStyle = `rgba(129,144,251,${alpha.toFixed(3)})`; ctx!.lineWidth = 0.6; ctx!.stroke();
      }

      for (const { i, sx, sy, scale, depth } of sorted) {
        const n = nodes[i];
        const fade = Math.max(0.25, Math.min(1, 1 - depth / (SPHERE_R * 1.4)));
        const pulse = 0.6 + 0.4 * Math.sin(t_s * n.pulseSpeed + n.pulseOffset);
        const r = n.baseRadius * scale * (0.85 + 0.32 * pulse);
        const grad = ctx!.createRadialGradient(sx, sy, 0, sx, sy, r * 3.5);
        grad.addColorStop(0, `rgba(129,144,251,${(fade * pulse * 0.55).toFixed(3)})`);
        grad.addColorStop(1, "rgba(99,112,245,0)");
        ctx!.beginPath(); ctx!.arc(sx, sy, r * 3.5, 0, Math.PI * 2); ctx!.fillStyle = grad; ctx!.fill();
        ctx!.beginPath(); ctx!.arc(sx, sy, r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(165,184,253,${(fade * (scale < 0.85 ? 0.45 : 0.85)).toFixed(3)})`; ctx!.fill();
      }

      for (let pi = particles.length - 1; pi >= 0; pi--) {
        const p = particles[pi];
        p.t += p.speed * (dt / 16);
        if (p.t >= 1) { particles.splice(pi, 1); if (particles.length < MAX_PARTICLES) spawnParticle(); continue; }
        const pf = projected[p.fromIdx], pt = projected[p.toIdx];
        const px = pf.sx + (pt.sx - pf.sx) * p.t, py = pf.sy + (pt.sy - pf.sy) * p.t;
        const scale_p = (pf.scale + pt.scale) / 2;
        const alpha = 0.85 * Math.sin(p.t * Math.PI);
        const pg = ctx!.createRadialGradient(px, py, 0, px, py, 6 * scale_p);
        pg.addColorStop(0, `rgba(200,210,255,${alpha.toFixed(3)})`); pg.addColorStop(1, "rgba(99,112,245,0)");
        ctx!.beginPath(); ctx!.arc(px, py, 6 * scale_p, 0, Math.PI * 2); ctx!.fillStyle = pg; ctx!.fill();
        ctx!.beginPath(); ctx!.arc(px, py, 2.2 * scale_p, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(220,228,255,${alpha.toFixed(3)})`; ctx!.fill();
      }

      const sphereGrad = ctx!.createRadialGradient(cx, cy, SPHERE_R * 0.55, cx, cy, SPHERE_R * 1.15);
      sphereGrad.addColorStop(0, "rgba(99,112,245,0)");
      sphereGrad.addColorStop(0.7, "rgba(99,112,245,0.04)");
      sphereGrad.addColorStop(1, "rgba(99,112,245,0.10)");
      ctx!.beginPath(); ctx!.arc(cx, cy, SPHERE_R * 1.15, 0, Math.PI * 2); ctx!.fillStyle = sphereGrad; ctx!.fill();
    }

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width; canvas.height = rect.height;
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    animId = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, []);

  // Assign keywords to positions, cycling through positions
  const visibleKeywords = KEYWORDS.slice(0, KEYWORD_POSITIONS.length);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      {/* Floating keyword pills */}
      {visibleKeywords.map((word, i) => (
        <FloatingKeyword
          key={word}
          word={word}
          pos={KEYWORD_POSITIONS[i]}
          delay={i * 1.8}
        />
      ))}

      <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} aria-hidden="true" />

      {/* Caption */}
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-400 text-center whitespace-nowrap tracking-wide">
        AI systems that think, learn, and automate your workflows.
      </p>
    </div>
  );
}
