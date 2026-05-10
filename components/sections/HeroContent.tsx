"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const kickerItems = ["Digital identity", "Founder profile", "Personal brand"];

export default function HeroContent() {
  const title = "ViR";
  const titleChars = title.split("");

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        <motion.div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:gap-8 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            {kickerItems.map((item, i) => (
              <span key={item} className="text-[10px] sm:text-xs font-medium tracking-wider text-gray-500 uppercase">
                {item}
                {i < kickerItems.length - 1 && <span className="ml-2 sm:ml-3 text-blue-500/50">•</span>}
              </span>
            ))}
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              <span className="block text-gray-400 text-2xl sm:text-3xl md:text-4xl mb-2">Who Is</span>
              <span className="inline-block">
                {titleChars.map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-[length:200%_auto] bg-clip-text text-transparent"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <span className="block text-xl sm:text-2xl md:text-3xl text-gray-400 mt-2">The Digital Identity of Adeel</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-sm sm:text-base md:text-lg text-gray-400 font-light max-w-xl leading-relaxed"
          >
            <span className="text-blue-100 font-medium">ViR</span> is the digital identity of Adeel — the CEO and Founder of ViR Developers. It is the name behind his work, ideas, digital presence, and creative direction across web, technology, and personal branding.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
          >
            <a
              href="#identity"
              className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-white text-navy-900 text-sm font-bold tracking-wider uppercase rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Explore Identity
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a
              href="https://virdevelopers.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-transparent border border-white/20 text-white text-sm font-bold tracking-wider uppercase rounded-full overflow-hidden transition-all duration-300 hover:border-white/40"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                ViR Developers
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex items-center gap-4 sm:gap-6 pt-2"
          >
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-xl sm:text-2xl font-bold text-white">Adeel</span>
              <span className="text-[10px] text-gray-500 tracking-wider uppercase">CEO & Founder</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-xl sm:text-2xl font-bold text-white">ViR Developers</span>
              <span className="text-[10px] text-gray-500 tracking-wider uppercase">Organization</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center items-center order-1 lg:order-2"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[340px] lg:h-[340px]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-cyan-500/20 rounded-full blur-2xl animate-pulse" />
            
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 border border-white/10 rounded-full" />
              <div className="absolute inset-3 border border-white/5 rounded-full" />
              <div className="absolute inset-6 border border-white/5 rounded-full" />
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_20px_rgba(96,165,250,0.8)]" />
              </motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4"
              >
                <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_15px_rgba(165,180,252,0.6)]" />
              </motion.div>

              <div className="relative z-10 w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
                <Image
                  src="/image.png"
                  alt="Adeel, CEO and Founder of ViR Developers, known online as ViR"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-gray-500 uppercase hidden sm:block">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
        >
          <motion.div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}