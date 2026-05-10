"use client";

import { useEffect, useRef } from "react";

interface FloatingDotsProps {
  className?: string;
  maxRadius?: number;
  maxSpeed?: number;
  minSpeed?: number;
  count?: number;
}

export function FloatingDots({
  className = "",
  maxRadius = 2,
  maxSpeed = 0.3,
  minSpeed = 0.1,
  count = 60,
}: FloatingDotsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const dots = Array.from({ length: count }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * maxRadius + 0.5,
      dx: (Math.random() - 0.5) * maxSpeed,
      dy: (Math.random() - 0.5) * maxSpeed - minSpeed,
      opacity: Math.random() * 0.4 + 0.1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      dots.forEach((dot) => {
        dot.x += dot.dx;
        dot.y += dot.dy;
        if (dot.x < 0) dot.x = width;
        if (dot.x > width) dot.x = 0;
        if (dot.y < 0) dot.y = height;
        if (dot.y > height) dot.y = 0;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 165, 250, ${dot.opacity})`;
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();
    
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [count, maxRadius, maxSpeed, minSpeed]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{ zIndex: 0 }}
    />
  );
}
