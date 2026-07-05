"use client";
import { motion } from "framer-motion";
import { FiPhone, FiClock, FiCheckSquare, FiFileText } from "react-icons/fi";

const reasons = [
  {
    icon: FiPhone,
    title: "We Actually Answer the Phone",
    desc: "This shouldn't be a differentiator. But in the trades, it is. Call Chris — the phone rings, and it gets answered. Every time.",
  },
  {
    icon: FiClock,
    title: "We Turn Up When We Say We Will",
    desc: "No two-hour arrival windows. No \"running late\" texts at the time we were due. AZ Electrical operates on a simple policy: show up on time, or don't take the job.",
  },
  {
    icon: FiCheckSquare,
    title: "Every Job Left Clean & Certified",
    desc: "All work is tested, certificated and compliant with Part P Building Regulations. We don't leave sites in a state — your home or business looks better when we leave than when we arrived.",
  },
  {
    icon: FiFileText,
    title: "20+ Years of Getting It Right",
    desc: "Chris has been wiring homes, businesses and industrial sites across West Sussex since the early 2000s. That experience means problems get diagnosed fast and fixed correctly the first time.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="sp" style={{ background: "#0A0A0A" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="font-mono text-[11px] uppercase tracking-[.2em] text-yellow-hv">Why Chris</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-widest mt-2">
            SOLVING THE UK TRADIE<br /><span className="text-yellow-hv">PAIN POINT.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto mt-4">
            Getting a good electrician isn't hard. Getting one who answers, quotes fairly, turns up when booked, and finishes properly — that's a different matter entirely.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => {
            const I = r.icon;
            return (
              <motion.div key={r.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }}
                className="glass-card p-7">
                <div className="w-12 h-12 bg-yellow-hv/10 border border-yellow-hv/25 rounded-lg flex items-center justify-center mb-5">
                  <I className="text-yellow-hv text-xl" />
                </div>
                <h3 className="font-display text-xl text-white tracking-wider mb-3">{r.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
