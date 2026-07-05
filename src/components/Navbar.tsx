"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiPhone, FiZap } from "react-icons/fi";

const links = [
  { href: "/services",                  label: "Services"       },
  { href: "/garden-outdoor-electrical", label: "Garden & Outdoor" },
  { href: "/about",                     label: "About"          },
  { href: "/gallery",                   label: "Gallery"        },
  { href: "/emergency",                 label: "Emergency"      },
  { href: "/contact",                   label: "Contact"        },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 56);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => setOpen(false), [path]);

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        scrolled ? "nav-solid border-black-border" : "bg-transparent border-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[72px] lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-yellow-hv rounded flex items-center justify-center group-hover:scale-105 transition-transform">
              <FiZap className="text-black text-xl font-black" />
            </div>
            <div>
              <p className="font-display text-2xl text-white tracking-widest leading-none">AZ ELECTRICAL</p>
              <p className="text-[9px] text-white/50 tracking-[0.2em] uppercase font-mono">Bognor Regis · West Sussex</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {links.map(l => (
              <Link key={l.href} href={l.href}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                  l.href === "/emergency"
                    ? "text-yellow-hv hover:text-yellow-light"
                    : path === l.href
                    ? "text-yellow-hv"
                    : "text-white/65 hover:text-white"
                }`}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+447903087501"
              className="flex items-center gap-2 text-sm font-bold text-white/70 hover:text-yellow-hv transition-colors">
              <FiPhone className="text-yellow-hv" /> 07903 087501
            </a>
            <Link href="/contact"
              className="btn-yellow text-sm uppercase tracking-wider px-5 py-2.5 rounded">
              Free Quote
            </Link>
          </div>

          <button className="lg:hidden text-white p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-40 bg-black geo-bg flex flex-col pt-24 px-6 pb-10"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .22 }}>
            <nav className="flex flex-col">
              {links.map((l, i) => (
                <motion.div key={l.href} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * .06 }}>
                  <Link href={l.href}
                    className={`block font-display text-4xl tracking-widest py-4 border-b border-black-border ${
                      l.href === "/emergency" || path === l.href ? "text-yellow-hv" : "text-white"
                    }`}>
                    {l.label.toUpperCase()}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <a href="tel:+447903087501"
                className="btn-ghost flex items-center justify-center gap-2 text-lg px-6 py-4 rounded">
                <FiPhone /> 07903 087501
              </a>
              <Link href="/contact"
                className="btn-yellow flex items-center justify-center text-lg uppercase tracking-wider px-6 py-4 rounded">
                Get a Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
