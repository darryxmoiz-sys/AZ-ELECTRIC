"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiPhone, FiArrowRight } from "react-icons/fi";

export default function CTASection() {
  return (
    <section className="py-28 bg-black relative overflow-hidden">
      <div className="absolute inset-0 geo-bg opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-yellow-hv/5 blur-3xl pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white tracking-widest leading-[.95] mb-4">
            READY TO
          </h2>
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-yellow-hv tracking-widest leading-[.95] mb-8"
            style={{ textShadow: "0 0 80px rgba(250,204,21,0.35)" }}>
            GET IT DONE?
          </h2>
          <p className="text-white/55 text-xl mb-10 max-w-xl mx-auto">
            No waiting lists. No unreturned calls. Just a fair quote and a job done properly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+447903087501"
              className="btn-yellow flex items-center justify-center gap-2.5 text-lg uppercase tracking-wider px-10 py-5 rounded">
              <FiPhone /> 07903 087501
            </a>
            <Link href="/contact"
              className="btn-ghost flex items-center justify-center gap-2.5 text-lg uppercase tracking-wider px-10 py-5 rounded">
              Request a Booking <FiArrowRight />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
