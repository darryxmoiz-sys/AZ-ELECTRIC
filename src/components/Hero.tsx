"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiArrowRight, FiShield, FiAward, FiClock } from "react-icons/fi";
import Link from "next/link";

function SparkCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d"); if (!ctx) return;
    let W = (c.width = window.innerWidth), H = (c.height = window.innerHeight);
    const resize = () => { W = c.width = window.innerWidth; H = c.height = window.innerHeight; };
    window.addEventListener("resize", resize);
    type P = { x:number; y:number; vx:number; vy:number; life:number; max:number; r:number; gold:boolean };
    const ps: P[] = [];
    const spawn = () => ps.push({
      x: Math.random() * W, y: H + 8,
      vx: (Math.random() - .5) * 1.4, vy: -(Math.random() * 2.2 + .6),
      life: 0, max: Math.random() * 100 + 55,
      r: Math.random() * 2 + .4, gold: Math.random() > .5,
    });
    let f = 0;
    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      if (f++ % 3 === 0) spawn();
      for (let i = ps.length - 1; i >= 0; i--) {
        const p = ps[i]; p.x += p.vx; p.y += p.vy; p.life++;
        const a = 1 - p.life / p.max;
        ctx.globalAlpha = a * .7;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.gold ? "#FACC15" : "rgba(255,255,255,0.9)";
        ctx.fill();
        if (p.life >= p.max) ps.splice(i, 1);
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(loop);
    };
    loop();
    return () => window.removeEventListener("resize", resize);
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

const badges = [
  { icon: FiShield, text: "NICEIC Certified" },
  { icon: FiAward,  text: "Fully Insured"    },
  { icon: FiClock,  text: "Turns Up On Time" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden geo-bg">
      <SparkCanvas />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}
          className="inline-flex items-center gap-2 border border-yellow-hv/40 bg-yellow-hv/10 text-yellow-hv text-xs font-bold px-4 py-1.5 rounded-full mb-8 tracking-[.15em] uppercase">
          Bognor Regis &amp; West Sussex · Est. 20+ Years
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .1 }}
          className="font-display text-[4.5rem] sm:text-[6rem] lg:text-[8rem] text-white leading-[.92] tracking-widest mb-4">
          RELIABLE,
        </motion.h1>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .2 }}
          className="font-display text-[4.5rem] sm:text-[6rem] lg:text-[8rem] text-yellow-hv leading-[.92] tracking-widest mb-4"
          style={{ textShadow: "0 0 60px rgba(250,204,21,0.4)" }}>
          CERTIFIED
        </motion.h1>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .3 }}
          className="font-display text-[4.5rem] sm:text-[6rem] lg:text-[8rem] text-white leading-[.92] tracking-widest mb-8">
          ELECTRICIANS.
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .45 }}
          className="text-lg sm:text-xl text-white/65 max-w-xl mb-10 leading-relaxed">
          Chris and the team at AZ Electrical have been keeping homes and businesses in Bognor Regis powered, safe and compliant for over 20 years. We answer the phone. We turn up on time. We finish the job.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .55 }}
          className="flex flex-col sm:flex-row gap-4 mb-12">
          <a href="tel:+447903087501"
            className="btn-yellow flex items-center justify-center gap-2.5 text-base uppercase tracking-wider px-8 py-4 rounded">
            <FiPhone /> 07903 087501
          </a>
          <Link href="/contact"
            className="btn-ghost flex items-center justify-center gap-2.5 text-base uppercase tracking-wider px-8 py-4 rounded">
            Get Free Quote <FiArrowRight />
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .75 }}
          className="flex flex-wrap gap-3">
          {badges.map(b => {
            const I = b.icon;
            return (
              <div key={b.text} className="flex items-center gap-2 border border-black-border bg-black-card/60 text-sm text-white/75 px-4 py-2 rounded-full">
                <I className="text-yellow-hv text-sm" /> {b.text}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
