"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle, FiZap } from "react-icons/fi";

const deliverables = [
  "Dedicated power supply to a home gym — 32A circuit, clean concealed run",
  "Full electrical installation to a bespoke custom shed / workshop",
  "Power and lighting for an outdoor kitchen including socket clusters and under-canopy LEDs",
  "Atmospheric exterior lighting — pathway uplights, feature wall wash, festoon circuit",
  "All circuits individually RCD protected, certificated and load-tested",
  "Coordinated alongside the build team — zero delays, zero punch-list items",
];

export default function CaseStudySection() {
  return (
    <section className="sp" style={{ background: "#0A0A0A" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-14">
          <span className="inline-block font-mono text-[11px] uppercase tracking-[.2em] text-yellow-hv mb-4">Featured Project</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-widest mb-4">
            BESPOKE GARDEN ELECTRICAL.<br />
            <span className="text-yellow-hv">THE BALD BUILDERS.</span>
          </h2>
          <p className="text-white/55 text-lg max-w-2xl mx-auto">
            A high-ticket full garden electrical installation for Brad &amp; Rhi — complete with gym power, workshop wiring, outdoor kitchen circuits and atmospheric landscape lighting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left — visual placeholder */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden border border-black-border"
            style={{ background: "linear-gradient(135deg,#111111,#1a1a1a)", minHeight: "420px" }}>
            {/* Animated glow panel visual */}
            <div className="absolute inset-0 geo-bg opacity-40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8">
              <div className="w-20 h-20 rounded-2xl bg-yellow-hv flex items-center justify-center mb-2"
                style={{ boxShadow: "0 0 60px rgba(250,204,21,0.5)" }}>
                <FiZap className="text-black text-4xl" />
              </div>
              <div className="text-center">
                <p className="font-display text-3xl text-yellow-hv tracking-widest">BRAD &amp; RHI</p>
                <p className="font-display text-xl text-white tracking-wider mt-1">THE BALD BUILDERS</p>
                <p className="text-white/45 text-sm mt-3 max-w-xs">Full bespoke garden electrical installation — gym, shed, outdoor kitchen, atmospheric lighting</p>
              </div>
              <div className="grid grid-cols-2 gap-3 w-full max-w-sm mt-2">
                {["Home Gym","Custom Shed","Outdoor Kitchen","Garden Lighting"].map(t => (
                  <div key={t} className="border border-yellow-hv/30 bg-yellow-hv/5 rounded-lg p-3 text-center">
                    <span className="text-yellow-hv text-xs font-bold uppercase tracking-wide">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — deliverables */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex flex-col gap-5">
            <div className="glass-card p-6">
              <h3 className="font-display text-2xl text-white tracking-wider mb-5">WHAT WE DELIVERED</h3>
              <ul className="space-y-4">
                {deliverables.map((d, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .07 }}
                    className="flex items-start gap-3 text-white/75 text-sm leading-relaxed">
                    <FiCheckCircle className="text-yellow-hv text-base mt-0.5 shrink-0" />
                    {d}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-5 border-l-4 border-yellow-hv">
              <p className="text-white/70 text-sm italic leading-relaxed">
                "Chris was recommended to us by three different people before we'd even finished the design stage. He came out, scoped the job properly, and turned up exactly when he said he would — every single day. The quality of the installation is genuinely impressive."
              </p>
              <p className="text-yellow-hv font-bold text-sm mt-3">— Brad &amp; Rhi, The Bald Builders</p>
            </div>
            <Link href="/garden-outdoor-electrical"
              className="btn-yellow inline-flex items-center justify-center gap-2 uppercase tracking-wider text-sm px-6 py-4 rounded w-fit">
              View Garden &amp; Outdoor Service <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
