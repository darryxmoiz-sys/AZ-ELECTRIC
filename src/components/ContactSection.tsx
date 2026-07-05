"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle } from "react-icons/fi";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Hook this up to your form handler / API route of choice (Formspree, Resend, etc.)
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 900);
  };

  return (
    <section className="sp geo-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div className="glass-card p-6 flex items-start gap-4">
              <FiPhone className="text-yellow-hv text-xl mt-1 shrink-0" />
              <div>
                <p className="text-white font-semibold mb-1">Call or Text</p>
                <a href="tel:+447903087501" className="text-white/60 text-sm hover:text-yellow-hv transition-colors">07903 087501</a>
              </div>
            </div>
            <div className="glass-card p-6 flex items-start gap-4">
              <FiMail className="text-yellow-hv text-xl mt-1 shrink-0" />
              <div>
                <p className="text-white font-semibold mb-1">Email</p>
                <a href="mailto:azelectrical123@gmail.com" className="text-white/60 text-sm hover:text-yellow-hv transition-colors">azelectrical123@gmail.com</a>
              </div>
            </div>
            <div className="glass-card p-6 flex items-start gap-4">
              <FiMapPin className="text-yellow-hv text-xl mt-1 shrink-0" />
              <div>
                <p className="text-white font-semibold mb-1">Coverage Area</p>
                <p className="text-white/60 text-sm">Bognor Regis &amp; West Sussex</p>
              </div>
            </div>
            <div className="glass-card p-6 flex items-start gap-4">
              <FiClock className="text-yellow-hv text-xl mt-1 shrink-0" />
              <div>
                <p className="text-white font-semibold mb-1">Hours</p>
                <p className="text-white/60 text-sm">Mon–Fri 7:30am–6pm · Sat 8am–2pm</p>
                <p className="text-yellow-hv text-sm font-semibold mt-1">24/7 Emergency Callouts</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card p-8"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-14">
                <FiCheckCircle className="text-yellow-hv text-5xl mb-4" />
                <h3 className="font-display text-2xl text-white tracking-wider mb-2">MESSAGE SENT</h3>
                <p className="text-white/55 text-sm max-w-sm">
                  Thanks for reaching out — Chris will get back to you the same day. For anything urgent, call 07903 087501 directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">Name</label>
                    <input required type="text" className="w-full bg-black-soft border border-black-border rounded px-4 py-3 text-white text-sm focus:border-yellow-hv outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">Phone</label>
                    <input required type="tel" className="w-full bg-black-soft border border-black-border rounded px-4 py-3 text-white text-sm focus:border-yellow-hv outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">Email</label>
                  <input required type="email" className="w-full bg-black-soft border border-black-border rounded px-4 py-3 text-white text-sm focus:border-yellow-hv outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">What do you need done?</label>
                  <textarea required rows={5} className="w-full bg-black-soft border border-black-border rounded px-4 py-3 text-white text-sm focus:border-yellow-hv outline-none transition-colors resize-none" />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-yellow flex items-center justify-center gap-2.5 text-base uppercase tracking-wider px-8 py-4 rounded disabled:opacity-60"
                >
                  {loading ? "Sending..." : <>Send Message <FiSend /></>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
