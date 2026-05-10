"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import VirLogo from "@/components/ui/VirLogo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Identity", href: "#identity" },
    { label: "Meaning", href: "#meaning" },
    { label: "Relation", href: "#relation" },
    { label: "Presence", href: "#presence" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="absolute inset-0 bg-navy-900/70 backdrop-blur-2xl border-b border-white/[0.05]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <VirLogo showText />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-all duration-300 group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href="https://virdevelopers.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="group relative px-5 py-2 bg-white text-navy-900 text-sm font-semibold tracking-wide rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore ViR
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </motion.a>
          </div>

          <button
            className="lg:hidden p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-16 left-0 right-0 z-40 lg:hidden"
          >
            <div className="bg-navy-900/95 backdrop-blur-2xl border-b border-white/10 mx-4 mt-2 rounded-2xl overflow-hidden">
              <nav className="flex flex-col p-4 gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="https://virdevelopers.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 px-4 py-3 text-center bg-white text-navy-900 font-semibold rounded-xl transition-all"
                >
                  Explore ViR
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}