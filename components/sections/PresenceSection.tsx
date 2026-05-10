"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Layers, Code, Sparkles } from "lucide-react";

const ecosystems = [
  { icon: <Code className="w-4 h-4" />, label: "Development", count: "20+" },
  { icon: <Layers className="w-4 h-4" />, label: "Projects", count: "15+" },
  { icon: <Globe className="w-4 h-4" />, label: "Deployments", count: "50+" },
];

const stats = [
  { label: "Web Apps", value: "20+" },
  { label: "Mobile Apps", value: "5+" },
  { label: "Components", value: "100+" },
  { label: "Clients", value: "15+" },
];

export default function PresenceSection() {
  return (
    <section id="presence" className="py-16 md:py-32 scroll-mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-[3rem] bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 border border-white/10"
        >
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-blue-500/10 rounded-full blur-2xl sm:blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-indigo-500/10 rounded-full blur-2xl sm:blur-3xl" />
          </div>

          <div className="relative z-10 px-5 py-10 sm:px-8 sm:py-16 md:px-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8 sm:mb-12"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-semibold tracking-wider uppercase mb-4 md:mb-6"
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                Digital Presence
              </motion.span>
              
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight mb-4 md:mb-6">The Ecosystem</h2>
              <p className="text-sm sm:text-base md:text-xl text-blue-200/80 max-w-xl mx-auto leading-relaxed">
                virdevelopers.netlify.app is where ideas materialize and projects breathe.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-8 sm:mb-12">
              {ecosystems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
                >
                  <span className="text-blue-400">{item.icon}</span>
                  <span className="text-xs sm:text-sm font-medium text-gray-300">{item.label}</span>
                  <span className="text-xs sm:text-sm font-bold text-white">{item.count}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <a
                href="https://virdevelopers.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-5 bg-white text-navy-900 text-xs sm:text-sm font-bold tracking-wider uppercase rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]"
              >
                <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                  Enter the Ecosystem
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </a>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.05] text-center"
            >
              <span className="block text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</span>
              <span className="text-[10px] sm:text-xs text-gray-500 tracking-wider uppercase">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}