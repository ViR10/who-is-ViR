"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface VirLogoProps {
  className?: string; size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export default function VirLogo({ className = "w-9 h-9", showText = false }: VirLogoProps) {
  return (
    <motion.div 
      className={`flex items-center gap-2.5 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative flex-shrink-0 w-8 h-8">
        <div className="absolute inset-0 bg-white rounded-full shadow-lg border border-white/20 overflow-hidden">
          <Image 
            src="/log.png" 
            alt="ViR Logo" 
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      
      {showText && (
        <span className="font-bold text-white tracking-[0.15em] text-lg">ViR</span>
      )}
    </motion.div>
  );
}