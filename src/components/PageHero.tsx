"use client";
import { motion } from "framer-motion";

interface Props { label: string; title: string; subtitle: string; }

export default function PageHero({ label, title, subtitle }: Props) {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden geo-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="inline-block font-mono text-[11px] uppercase tracking-[.2em] text-yellow-hv mb-5">
          {label}
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }}
          className="font-display text-4xl sm:text-5xl lg:text-7xl text-white tracking-widest leading-[.95] mb-6">
          {title}
        </motion.h1>
        <div className="w-16 h-1 bg-yellow-hv mb-6" style={{ boxShadow: "0 0 16px rgba(250,204,21,0.6)" }} />
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }}
          className="text-lg text-white/60 max-w-2xl leading-relaxed">
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
