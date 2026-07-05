"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    name: "Olly Andrews",
    location: "Bognor Regis",
    text: "Called Chris on a Tuesday evening after three other electricians hadn't returned my messages. He answered straight away, came round the next morning exactly when he said he would, sorted the fault in under an hour, and left the place spotless. The job was clean, fast and reasonably priced. Won't use anyone else.",
    rating: 5,
    job: "Consumer Unit Fault",
  },
  {
    name: "Sarah T.",
    location: "Chichester",
    text: "Had AZ Electrical in to rewire our Victorian terrace. Chris managed the whole thing around us living in the house, kept disruption to an absolute minimum and finished two days ahead of schedule. All certificates provided the same day. Exactly what you want from a sparky.",
    rating: 5,
    job: "Full House Rewire",
  },
  {
    name: "Dave & Karen M.",
    location: "Littlehampton",
    text: "We had Chris install power to our garden room, gym and a new outdoor kitchen. The detail in the installation is incredible — you'd never know the cables were there. Turned up every day on time, no complaints, no mess. Already recommended him to four people.",
    rating: 5,
    job: "Garden & Outdoor Power",
  },
  {
    name: "James Harrington",
    location: "Worthing",
    text: "Used AZ Electrical for a commercial lighting upgrade at our restaurant. Done over two nights with zero disruption to the business. Every light tested, all emergency lighting certificated. Genuinely impressive — and answered every call, every time.",
    rating: 5,
    job: "Commercial Lighting",
  },
];

export default function TestimonialCarousel() {
  const [cur, setCur] = useState(0);
  const [auto, setAuto] = useState(true);
  const prev = () => { setAuto(false); setCur(c => (c - 1 + testimonials.length) % testimonials.length); };
  const next = () => { setAuto(false); setCur(c => (c + 1) % testimonials.length); };

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setCur(c => (c + 1) % testimonials.length), 5200);
    return () => clearInterval(t);
  }, [auto]);

  return (
    <section className="sp geo-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="font-mono text-[11px] uppercase tracking-[.2em] text-yellow-hv">Reviews</span>
          <h2 className="font-display text-4xl sm:text-5xl text-white tracking-widest mt-2">
            WHAT CUSTOMERS SAY.
          </h2>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={cur} initial={{ opacity: 0, x: 36 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -36 }} transition={{ duration: .4 }}
            className="glass-card p-8 sm:p-12 text-center">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: testimonials[cur].rating }).map((_, i) => (
                <FaStar key={i} className="text-yellow-hv text-lg" />
              ))}
            </div>
            <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              &ldquo;{testimonials[cur].text}&rdquo;
            </p>
            <p className="font-display text-xl text-yellow-hv tracking-wider">{testimonials[cur].name}</p>
            <p className="text-white/45 text-sm mt-1">{testimonials[cur].location} · {testimonials[cur].job}</p>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-5 mt-8">
          <button onClick={prev} className="w-10 h-10 border border-black-border rounded flex items-center justify-center text-white hover:border-yellow-hv hover:text-yellow-hv transition-colors">
            <FiChevronLeft />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => { setAuto(false); setCur(i); }}
                className={`h-2 rounded-full transition-all duration-300 ${i === cur ? "w-7 bg-yellow-hv" : "w-2 bg-white/25"}`} />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 border border-black-border rounded flex items-center justify-center text-white hover:border-yellow-hv hover:text-yellow-hv transition-colors">
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
