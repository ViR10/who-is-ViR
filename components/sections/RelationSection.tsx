"use client";

import { motion } from "framer-motion";
import { Heart, Zap, Sparkles } from "lucide-react";

export default function RelationSection() {
  return (
    <section id="relation" className="py-16 md:py-32 scroll-mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4 md:mb-6"
            >
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
              How ViR Relates to Me
            </motion.span>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 md:mb-8 leading-tight">
              Not a Mask.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">An Extension.</span>
            </h2>

            <div className="space-y-4 md:space-y-6">
              {[
                { icon: Heart, color: "text-pink-400", title: "Not Another Person", desc: "ViR is not an alter ego. It is me, expressed with more clarity and intention." },
                { icon: Zap, color: "text-yellow-400", title: "The Conduit", desc: "When I code, I am ViR. It is the channel through which potential becomes reality." },
                { icon: Sparkles, color: "text-blue-400", title: "Premium Result", desc: "It strips away the noise and leaves only polished, professional work." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex gap-3 sm:gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-indigo-500/10 to-cyan-500/20 rounded-full blur-2xl" />
              <div className="relative w-full h-full">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 shadow-[0_0_30px_rgba(96,165,250,0.6)]" />
                </motion.div>
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-6 sm:inset-8">
                  <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-indigo-400 shadow-[0_0_20px_rgba(165,180,252,0.5)]" />
                </motion.div>
                <div className="absolute inset-12 sm:inset-16 border border-white/10 rounded-full" />
                <div className="absolute inset-20 sm:inset-24 border border-white/5 rounded-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center shadow-2xl backdrop-blur-xl"
                  >
                    <div className="text-center">
                      <span className="block text-2xl sm:text-3xl font-bold text-white">ViR</span>
                      <span className="text-[10px] sm:text-xs text-gray-500 tracking-widest uppercase">Identity</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10 md:mt-20 p-5 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10 border border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                <span className="text-white font-bold">V</span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white">The Core Truth</h3>
                <p className="text-xs sm:text-sm text-gray-400">ViR is me, refined.</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 max-w-sm md:text-right text-center">
              Just my work expressed with more clarity, intention, and signature.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}