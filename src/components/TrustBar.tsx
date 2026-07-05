"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { end: 20, suffix: "+", label: "Years Experience"    },
  { end: 850, suffix: "+", label: "Jobs Completed"     },
  { end: 47, suffix: "",  label: "5-Star Reviews"      },
  { end: 60, suffix: "m", label: "Emergency Response"  },
];

function Count({ end, suffix }: { end: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const prog = Math.min((ts - start) / 1800, 1);
      setN(Math.floor(prog * end));
      if (prog < 1) requestAnimationFrame(step);
      else setN(end);
    };
    requestAnimationFrame(step);
  }, [inView, end]);
  return <span ref={ref} className="font-display text-5xl lg:text-6xl text-yellow-hv tracking-widest">{n}{suffix}</span>;
}

export default function TrustBar() {
  return (
    <section className="py-14 border-y border-black-border" style={{ background: "#0A0A0A" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }}
              className="text-center">
              <Count end={s.end} suffix={s.suffix} />
              <p className="text-white/50 text-xs uppercase tracking-[.15em] mt-2 font-mono">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
