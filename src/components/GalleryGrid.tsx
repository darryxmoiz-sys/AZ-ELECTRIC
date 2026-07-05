"use client";
import { motion } from "framer-motion";
import { FiZap } from "react-icons/fi";

const projects = [
  { title: "Home Gym Power Install", category: "Garden & Outdoor" },
  { title: "Victorian Terrace Rewire", category: "Full Rewire" },
  { title: "Outdoor Kitchen Circuits", category: "Garden & Outdoor" },
  { title: "Consumer Unit Upgrade", category: "Consumer Units" },
  { title: "Restaurant Lighting Retrofit", category: "Commercial" },
  { title: "EV Charger Installation", category: "Appliance Install" },
  { title: "Custom Shed Workshop Wiring", category: "Garden & Outdoor" },
  { title: "Landscape & Feature Lighting", category: "Garden & Outdoor" },
  { title: "Emergency Fault Callout", category: "Emergency" },
];

export default function GalleryGrid() {
  return (
    <section className="sp geo-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.08 }}
              className="glass-card overflow-hidden group"
            >
              <div
                className="relative flex items-center justify-center geo-bg"
                style={{ minHeight: "220px", background: "linear-gradient(135deg,#111111,#1a1a1a)" }}
              >
                <FiZap className="text-yellow-hv/30 text-6xl group-hover:text-yellow-hv/50 transition-colors" />
              </div>
              <div className="p-5">
                <span className="font-mono text-[10px] uppercase tracking-[.15em] text-yellow-hv">{p.category}</span>
                <h3 className="font-display text-lg text-white tracking-wider mt-1">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
