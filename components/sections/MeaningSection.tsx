"use client";

import { motion } from "framer-motion";
import { Eye, Layers, Zap, Target, Lightbulb, Crown } from "lucide-react";

const pillars = [
  { icon: <Eye className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Vision", subtitle: "Perspective", description: "A clear, uncompromising perspective on digital aesthetics and engineering.", gradient: "from-blue-500/30", borderColor: "border-blue-500/30", iconBg: "bg-blue-500/20", iconColor: "text-blue-400" },
  { icon: <Layers className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Identity", subtitle: "Signature", description: "A unique signature embedded into every line of code and pixel.", gradient: "from-indigo-500/30", borderColor: "border-indigo-500/30", iconBg: "bg-indigo-500/20", iconColor: "text-indigo-400" },
  { icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Recognition", subtitle: "Presence", description: "Building premium work that commands attention and stands out.", gradient: "from-cyan-500/30", borderColor: "border-cyan-500/30", iconBg: "bg-cyan-500/20", iconColor: "text-cyan-400" },
];

const values = [
  { icon: <Target className="w-3 h-3 sm:w-4 sm:h-4" />, label: "Precision" },
  { icon: <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4" />, label: "Innovation" },
  { icon: <Crown className="w-3 h-3 sm:w-4 sm:h-4" />, label: "Excellence" },
];

export default function MeaningSection() {
  return (
    <section id="meaning" className="py-16 md:py-32 scroll-mt-20 relative z-10">
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
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-4 md:mb-6"
          >
            <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
            What ViR Means
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight mb-4 md:mb-6">
            Three Pillars of Identity
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            The foundation upon which every project is built.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.8 }}
              whileHover={{ y: -8 }}
              className={`group relative p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${pillar.gradient} to-transparent border ${pillar.borderColor} overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl ${pillar.iconBg} border border-white/10 flex items-center justify-center mb-4 ${pillar.iconColor} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  {pillar.icon}
                </div>
                <span className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-2 block">{pillar.subtitle}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-wide">{pillar.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 md:mt-16 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-default"
            >
              <span className="text-gray-400">{value.icon}</span>
              <span className="text-xs sm:text-sm font-medium text-gray-300">{value.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}