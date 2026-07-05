"use client";
import { motion } from "framer-motion";
import { FiShield, FiAward, FiClock, FiUsers } from "react-icons/fi";

const points = [
  { icon: FiShield, title: "NICEIC Certified", desc: "All work tested, certificated and fully compliant with Part P Building Regulations." },
  { icon: FiAward,  title: "20+ Years Experience", desc: "Wiring homes, businesses and industrial sites across West Sussex since the early 2000s." },
  { icon: FiClock,  title: "Reliable & On Time", desc: "No two-hour arrival windows. If Chris says he'll be there at 9, he's there at 9." },
  { icon: FiUsers,  title: "Trusted Locally", desc: "Built almost entirely on word-of-mouth referrals across Bognor Regis and West Sussex." },
];

export default function AboutSection() {
  return (
    <section className="sp" style={{ background: "#0A0A0A" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="font-mono text-[11px] uppercase tracking-[.2em] text-yellow-hv">Meet Chris</span>
            <h2 className="font-display text-4xl sm:text-5xl text-white tracking-widest mt-2 mb-5">
              TWO DECADES OF <span className="text-yellow-hv">GETTING IT RIGHT.</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              Chris founded AZ Electrical on a simple idea: the trades shouldn&apos;t be this hard to deal with. No unanswered calls. No missed appointments. No excuses when something goes wrong.
            </p>
            <p className="text-white/60 text-base leading-relaxed">
              Over 20 years he&apos;s wired everything from Victorian terraces to commercial units, bespoke garden installations to full house rewires — always to NICEIC standard, always finished properly.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden border border-black-border geo-bg flex items-center justify-center"
            style={{ minHeight: "340px" }}
          >
            <div className="text-center p-8">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-yellow-hv flex items-center justify-center mb-4" style={{ boxShadow: "0 0 60px rgba(250,204,21,0.5)" }}>
                <FiAward className="text-black text-4xl" />
              </div>
              <p className="font-display text-3xl text-yellow-hv tracking-widest">CHRIS</p>
              <p className="text-white/50 text-sm mt-1">Founder &amp; Lead Electrician, AZ Electrical</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {points.map((p, i) => {
            const I = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6"
              >
                <div className="w-11 h-11 bg-yellow-hv/10 border border-yellow-hv/25 rounded-lg flex items-center justify-center mb-4">
                  <I className="text-yellow-hv text-lg" />
                </div>
                <h3 className="font-display text-lg text-white tracking-wider mb-2">{p.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
