"use client";
import { motion } from "framer-motion";
import { FiPhone, FiAlertTriangle, FiZapOff, FiThermometer, FiWifiOff } from "react-icons/fi";
import CTASection from "@/components/CTASection";

const situations = [
  { icon: FiZapOff,      title: "Power Cut / No Power",       desc: "Total loss of power to part or all of the property." },
  { icon: FiAlertTriangle, title: "Sparking Sockets or Switches", desc: "Visible sparks, arcing, or a burning smell from an outlet." },
  { icon: FiThermometer, title: "Tripped Fuses / RCDs",        desc: "Consumer unit repeatedly tripping and won't reset." },
  { icon: FiWifiOff,     title: "Exposed or Damaged Wiring",   desc: "Cabling that's been damaged, chewed, or exposed." },
];

export default function EmergencyPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 overflow-hidden geo-bg">
        <div className="h-3 bg-hazard absolute top-24 inset-x-0" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            animate={{ rotate: [0, -8, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <FiAlertTriangle className="text-yellow-hv text-6xl" style={{ filter: "drop-shadow(0 0 20px #FACC15)" }} />
          </motion.div>
          <span className="inline-block font-mono text-[11px] uppercase tracking-[.2em] text-yellow-hv mb-4">
            24/7 Emergency Response
          </span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white tracking-widest leading-[.95] mb-6">
            ELECTRICAL EMERGENCY?
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
            If you smell burning, see sparking, or have lost power unexpectedly, call now. Chris answers 24 hours a day, every day of the year.
          </p>
          <motion.a
            href="tel:+447903087501"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="btn-yellow inline-flex items-center gap-3 text-xl uppercase tracking-wider px-12 py-6 rounded animate-cursor-glow"
          >
            <FiPhone /> 07903 087501
          </motion.a>
        </div>
      </section>

      <section className="sp" style={{ background: "#0A0A0A" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl text-white tracking-widest text-center mb-12">
            WHEN TO CALL <span className="text-yellow-hv">IMMEDIATELY</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {situations.map((s, i) => {
              const I = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 flex items-start gap-4"
                >
                  <div className="w-11 h-11 bg-yellow-hv/10 border border-yellow-hv/25 rounded-lg flex items-center justify-center shrink-0">
                    <I className="text-yellow-hv text-lg" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-white tracking-wider mb-1">{s.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <p className="text-center text-white/40 text-sm mt-10 max-w-lg mx-auto">
            If you smell gas, or believe there is immediate danger to life, call the National Gas Emergency Service on 0800 111 999 or 999 first.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
