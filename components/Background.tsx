"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-zinc-950">
      {/* 1. Subtle Moving Ambient Glows */}
      {/* Sky Blue Orb - Matching the profile badge accent */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] rounded-full bg-sky-500/10 blur-[120px]"
      />

      {/* Zinc/White Orb - Neutral premium balancing light */}
      <motion.div
        animate={{
          x: [0, -50, 20, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vh] rounded-full bg-zinc-500/10 blur-[120px]"
      />

      {/* 2. Premium Noise / Grain Texture Overlay */}
      <div
        className="absolute inset-0 w-full h-full opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
    </div>
  );
}
