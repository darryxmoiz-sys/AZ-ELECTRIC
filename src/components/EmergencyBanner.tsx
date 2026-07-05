"use client";
import { motion } from "framer-motion";
import { FiPhone, FiAlertTriangle } from "react-icons/fi";

export default function EmergencyBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Hazard stripe top border */}
      <div className="h-4 bg-hazard" />
      <div className="bg-black py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="flex items-center gap-5">
              <motion.div animate={{ rotate: [0, -8, 8, 0] }} transition={{ duration: 2.4, repeat: Infinity }}
                className="shrink-0 hidden sm:block">
                <FiAlertTriangle className="text-yellow-hv text-4xl" style={{ filter: "drop-shadow(0 0 12px #FACC15)" }} />
              </motion.div>
              <div>
                <p className="font-mono text-[11px] text-yellow-hv uppercase tracking-[.2em] mb-1">24/7 Emergency Response</p>
                <h3 className="font-display text-2xl sm:text-3xl text-white tracking-widest">
                  ELECTRICAL EMERGENCY?{" "}
                  <motion.span className="text-yellow-hv animate-phone-flash">CALL NOW.</motion.span>
                </h3>
                <p className="text-white/55 text-sm mt-1">Power cuts · Sparking sockets · Burning smells · Tripped fuses</p>
              </div>
            </div>
            <motion.a href="tel:+447903087501" whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }}
              className="btn-yellow flex items-center gap-2.5 text-lg uppercase tracking-wider px-9 py-5 rounded shrink-0 animate-cursor-glow">
              <FiPhone /> 07903 087501
            </motion.a>
          </div>
        </div>
      </div>
      <div className="h-4 bg-hazard" />
    </section>
  );
}
