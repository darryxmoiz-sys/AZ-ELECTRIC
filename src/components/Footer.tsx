import Link from "next/link";
import { FiPhone, FiMail, FiMapPin, FiZap } from "react-icons/fi";

const links = [
  { href: "/services", label: "Services" },
  { href: "/garden-outdoor-electrical", label: "Garden & Outdoor" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/emergency", label: "Emergency" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-black-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-yellow-hv rounded flex items-center justify-center">
                <FiZap className="text-black text-xl font-black" />
              </div>
              <p className="font-display text-2xl text-white tracking-widest leading-none">AZ ELECTRICAL</p>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              NICEIC certified electricians serving Bognor Regis and West Sussex. 20+ years of experience — we answer the phone and turn up on time.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg text-white tracking-wider mb-4">QUICK LINKS</h4>
            <ul className="space-y-2.5">
              {links.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/55 text-sm hover:text-yellow-hv transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-white tracking-wider mb-4">CONTACT</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+447903087501" className="flex items-center gap-2.5 text-white/55 text-sm hover:text-yellow-hv transition-colors">
                  <FiPhone className="text-yellow-hv shrink-0" /> 07903 087501
                </a>
              </li>
              <li>
                <a href="mailto:azelectrical123@gmail.com" className="flex items-center gap-2.5 text-white/55 text-sm hover:text-yellow-hv transition-colors">
                  <FiMail className="text-yellow-hv shrink-0" /> azelectrical123@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/55 text-sm">
                <FiMapPin className="text-yellow-hv shrink-0 mt-0.5" /> Bognor Regis, West Sussex
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-white tracking-wider mb-4">HOURS</h4>
            <ul className="space-y-2 text-white/55 text-sm">
              <li>Mon – Fri: 7:30am – 6:00pm</li>
              <li>Saturday: 8:00am – 2:00pm</li>
              <li className="text-yellow-hv font-semibold">24/7 Emergency Callouts</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs">
            &copy; {new Date().getFullYear()} AZ Electrical. All rights reserved. NICEIC Certified · Fully Insured.
          </p>
          <p className="text-white/35 text-xs font-mono uppercase tracking-wider">Bognor Regis · West Sussex</p>
        </div>
      </div>
    </footer>
  );
}
