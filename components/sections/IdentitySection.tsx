"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Code2, Palette, Rocket, Shield } from "lucide-react";
import Image from "next/image";

const features = [
  { icon: <Code2 className="w-5 h-5" />, title: "Clean Code", description: "Every line written with precision" },
  { icon: <Palette className="w-5 h-5" />, title: "Design Systems", description: "Consistent, scalable UI" },
  { icon: <Rocket className="w-5 h-5" />, title: "Performance", description: "Optimized for speed" },
  { icon: <Shield className="w-5 h-5" />, title: "Security", description: "Best practices in code" },
  { icon: <Cpu className="w-5 h-5" />, title: "Architecture", description: "Scalable solutions" },
  { icon: <Database className="w-5 h-5" />, title: "Data & APIs", description: "Robust integrations" },
];

export default function IdentitySection() {
  return (
    <section id="identity" className="py-16 md:py-32 scroll-mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-4 md:mb-6"
          >
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            Who is ViR
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 md:mb-6">
            ViR Gives Form to Adeel's Digital Presence
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            ViR is the digital identity of Adeel. It represents his public creative, technical, and developer presence across the web.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group relative p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-white/10 flex items-center justify-center mb-3 text-blue-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5 tracking-wide">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 md:mt-16 p-5 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/20">
                <Image
                  src="/image.png"
                  alt="Adeel, CEO and Founder of ViR Developers"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Adeel</h3>
                <p className="text-sm text-gray-500">CEO & Founder, ViR Developers</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 max-w-md md:text-right text-center">
              Builder of ViR as a personal digital identity and public-facing brand. ViR is the second identity of Adeel in the digital world.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}