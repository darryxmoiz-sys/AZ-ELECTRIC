"use client";
import { motion } from "framer-motion";
import { FiSun, FiWind, FiHome, FiZap, FiCheck } from "react-icons/fi";
import PageHero from "@/components/PageHero";
import CaseStudySection from "@/components/CaseStudySection";
import CTASection from "@/components/CTASection";

const offerings = [
  { icon: FiHome, title: "Garden Kitchens & Bars",   desc: "Weatherproof power for outdoor kitchens, pizza ovens, fridges and bar setups." },
  { icon: FiZap,  title: "Home Gym & Workshop Power", desc: "Dedicated high-amperage circuits for gym equipment, tools and workshop machinery." },
  { icon: FiSun,  title: "Atmospheric Lighting",       desc: "Pathway uplights, feature wall washes, festoon circuits and dimmable landscape lighting." },
  { icon: FiWind, title: "Shed & Outbuilding Power",   desc: "Fully certificated power and lighting runs to sheds, summer houses and outbuildings." },
];

export default function GardenPage() {
  return (
    <>
      <PageHero
        label="Bespoke Garden & Outdoor Electrical"
        title="Power That Disappears Into the Design."
        subtitle="Premium, bespoke garden and outdoor electrical installations across West Sussex — gym power, garden kitchens, atmospheric lighting and shed power, designed and installed to disappear into the landscaping."
      />

      <section className="sp geo-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {offerings.map((o, i) => {
              const I = o.icon;
              return (
                <motion.div
                  key={o.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-7"
                >
                  <div className="w-12 h-12 bg-yellow-hv/10 border border-yellow-hv/30 rounded-lg flex items-center justify-center mb-5">
                    <I className="text-yellow-hv text-xl" />
                  </div>
                  <h3 className="font-display text-lg text-white tracking-wider mb-3">{o.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{o.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sp" style={{ background: "#0A0A0A" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 sm:p-10">
            <h3 className="font-display text-2xl text-white tracking-wider mb-6">HOW A PROJECT WORKS</h3>
            <ul className="space-y-4">
              {[
                "Free on-site consultation to scope the design and power requirements",
                "Fixed-price quote with no hidden extras",
                "Coordinated installation alongside your landscaper or builder",
                "All circuits individually RCD-protected and load-tested",
                "Full certification provided on completion",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                  <FiCheck className="text-yellow-hv mt-0.5 shrink-0" /> {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CaseStudySection />
      <CTASection />
    </>
  );
}
