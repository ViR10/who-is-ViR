"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animationDuration?: number;
}

export default function GradientText({ children, className, animationDuration = 4 }: GradientTextProps) {
  return (
    <motion.span
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 animate-gradient-x inline-block",
        className
      )}
      style={{
        animationDuration: `${animationDuration}s`
      }}
    >
      {children}
    </motion.span>
  );
}
