"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Who is ViR?",
    answer: "ViR is the digital identity of Adeel — the CEO and Founder of ViR Developers. It is the branded second name used for his public creative, technical, and digital presence online.",
  },
  {
    question: "What does ViR mean?",
    answer: "ViR stands for Vision, Identity, and Recognition. It represents Adeel's personal brand, creative direction, and digital presence in the tech world.",
  },
  {
    question: "ViR ka mtlb kya hai?",
    answer: "ViR Adeel ka digital identity hai. Ye unka second name hai jo internet par unki work, ideas, aur creative direction ke liye use hota hai.",
  },
  {
    question: "How is ViR related to Adeel?",
    answer: "ViR is not a separate person. ViR is Adeel's second identity online — a branded version of his name used for professional and creative work.",
  },
  {
    question: "Is ViR the second identity of Adeel?",
    answer: "Yes, ViR is Adeel's second identity. It is how he presents himself online through his work at ViR Developers and other digital platforms.",
  },
  {
    question: "Who is the founder of ViR Developers?",
    answer: "Adeel is the CEO and Founder of ViR Developers. He built ViR as his personal digital identity and public-facing brand.",
  },
  {
    question: "Is Adeel the CEO of ViR Developers?",
    answer: "Yes, Adeel is the CEO and Founder of ViR Developers. ViR is his digital identity that represents his work and vision.",
  },
  {
    question: "Why does Adeel use the name ViR online?",
    answer: "Adeel uses ViR as his digital identity to create a focused, professional, and memorable brand presence. It represents his creative work, technical skills, and personal vision.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-32 scroll-mt-20 relative z-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-semibold tracking-wider uppercase mb-4 md:mb-6"
          >
            <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4" />
            Frequently Asked Questions
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Common Questions About ViR
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-lg mx-auto">
            Find answers to the most asked questions about ViR and its connection to Adeel.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 text-left"
              >
                <span className="text-sm sm:text-base font-medium text-white pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 sm:p-5 pt-2 text-sm sm:text-base text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}