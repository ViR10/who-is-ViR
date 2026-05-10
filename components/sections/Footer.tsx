"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import VirLogo from "@/components/ui/VirLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/5 bg-navy-900/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center">
            <VirLogo showText />
          </div>

          <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm order-3 sm:order-2">
            <span>Crafted with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500" />
            </motion.span>
            <span>by</span>
            <span className="text-white font-medium">Adeel Shahid</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 order-2 sm:order-3">
            <a
              href="https://virdevelopers.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
            >
              Explore ViR
            </a>
            <div className="w-px h-4 bg-white/10" />
            <span className="text-[10px] sm:text-xs text-gray-600 tracking-wide">
              © {currentYear} ViR
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/5 flex justify-center"
        >
          <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-600">
            <Sparkles className="w-3 h-3" />
            <span>Building the future, one line at a time.</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}