"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhone } from "react-icons/fi";

export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fn = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="tel:+447903087501"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="hidden lg:flex fixed bottom-8 right-8 z-40 items-center justify-center w-16 h-16 rounded-full bg-yellow-hv text-black shadow-2xl animate-cursor-glow"
          aria-label="Call AZ Electrical"
        >
          <FiPhone size={26} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
