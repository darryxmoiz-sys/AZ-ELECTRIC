"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiSun, FiHome, FiSettings, FiMonitor, FiPlug, FiAlertTriangle, FiArrowRight } from "react-icons/fi";

const services = [
  { icon: FiSun,          title: "Bespoke Garden & Outdoor Power", desc: "Custom garden electrical installations — outdoor kitchens, gym power, atmospheric lighting, shed electrics. High-ticket, high-spec.", href: "/garden-outdoor-electrical" },
  { icon: FiHome,         title: "Full House Rewires",             desc: "Complete domestic rewires carried out with minimal disruption. All work certificated under Part P Building Regulations.", href: "/services" },
  { icon: FiSettings,     title: "Consumer Unit Upgrades",         desc: "Old fuse board? We'll replace it with a modern dual-RCD or RCBO consumer unit — tested, certified, compliant.", href: "/services" },
  { icon: FiMonitor,      title: "Commercial Lighting & Maintenance", desc: "LED upgrades, emergency lighting, maintenance contracts for businesses across Bognor Regis and West Sussex.", href: "/services" },
  { icon: FiPlug,         title: "Appliance Installation",         desc: "Ovens, hobs, cookers, hot tubs, EV chargers — anything that needs a qualified spark rather than a YouTube video.", href: "/services" },
  { icon: FiAlertTriangle, title: "Emergency Callouts",            desc: "24/7 emergency response. Power out, sparking socket, burning smell — call Chris directly. He picks up.", href: "/emergency" },
];

export default function ServicesGrid() {
  return (
    <section className="sp geo-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <span className="font-mono text-[11px] uppercase tracking-[.2em] text-yellow-hv">Services</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-widest mt-2">
            WHAT WE DO.<br /><span className="text-yellow-hv">DONE PROPERLY.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const I = s.icon;
            return (
              <motion.div key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * .08 }}>
                <Link href={s.href} className="glass-card p-7 flex flex-col h-full block">
                  <div className="w-12 h-12 bg-yellow-hv/10 border border-yellow-hv/30 rounded-lg flex items-center justify-center mb-5">
                    <I className="text-yellow-hv text-xl" />
                  </div>
                  <h3 className="font-display text-xl text-white tracking-wider mb-3">{s.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed flex-1">{s.desc}</p>
                  <span className="text-yellow-hv font-bold text-sm mt-5 flex items-center gap-1.5">Find out more <FiArrowRight /></span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
