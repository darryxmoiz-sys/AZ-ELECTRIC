"use client";
import { motion } from "framer-motion";
import { FiSun, FiHome, FiSettings, FiMonitor, FiPlug, FiAlertTriangle, FiCheck } from "react-icons/fi";

const services = [
  {
    icon: FiHome,
    title: "Full House Rewires",
    desc: "Complete domestic rewires carried out with minimal disruption to your home, fully certificated under Part P Building Regulations.",
    points: ["Old wiring fully replaced", "New consumer unit included", "Certification provided on completion"],
  },
  {
    icon: FiSettings,
    title: "Consumer Unit Upgrades",
    desc: "Replace an outdated fuse board with a modern dual-RCD or RCBO consumer unit, tested and certified to current standards.",
    points: ["Dual-RCD & RCBO options", "Full circuit testing", "Same-day certification"],
  },
  {
    icon: FiSun,
    title: "Bespoke Garden & Outdoor Power",
    desc: "Custom garden electrical installs — outdoor kitchens, gym power, atmospheric lighting, shed and workshop circuits.",
    points: ["Weatherproof, IP-rated fittings", "Individually RCD-protected circuits", "Designed around your landscaping"],
  },
  {
    icon: FiMonitor,
    title: "Commercial Lighting & Maintenance",
    desc: "LED upgrades, emergency lighting and ongoing maintenance contracts for businesses across Bognor Regis and West Sussex.",
    points: ["Minimal disruption to trading hours", "Emergency lighting certification", "Scheduled maintenance plans"],
  },
  {
    icon: FiPlug,
    title: "Appliance Installation",
    desc: "Ovens, hobs, cookers, hot tubs, EV chargers — anything that needs a qualified electrician rather than a guess.",
    points: ["Manufacturer-compliant installs", "EV charger installation", "Safety testing included"],
  },
  {
    icon: FiAlertTriangle,
    title: "Emergency Callouts",
    desc: "24/7 emergency response for power cuts, sparking sockets, burning smells and tripped fuses.",
    points: ["Available around the clock", "Fast response across West Sussex", "Chris answers personally"],
  },
];

export default function ServicesDetail() {
  return (
    <section className="sp geo-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((s, i) => {
            const I = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.1 }}
                className="glass-card p-8"
              >
                <div className="w-12 h-12 bg-yellow-hv/10 border border-yellow-hv/30 rounded-lg flex items-center justify-center mb-5">
                  <I className="text-yellow-hv text-xl" />
                </div>
                <h3 className="font-display text-2xl text-white tracking-wider mb-3">{s.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.points.map(p => (
                    <li key={p} className="flex items-center gap-2.5 text-white/65 text-sm">
                      <FiCheck className="text-yellow-hv shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
