"use client";
import Link from "next/link";
import { FiPhone, FiFileText } from "react-icons/fi";

export default function MobileCTABar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-black-border bg-black/95 backdrop-blur-md flex">
      <a
        href="tel:+447903087501"
        className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-bold uppercase tracking-wide text-black bg-yellow-hv"
      >
        <FiPhone /> Call Now
      </a>
      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-bold uppercase tracking-wide text-white bg-black-soft"
      >
        <FiFileText /> Free Quote
      </Link>
    </div>
  );
}
