"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function GithubGraph() {
  // Generate random commit intensities for the flex effect
  // Higher numbers = darker green
  const generateCommits = () => {
    const days = 7 * 15; // 15 weeks
    return Array.from({ length: days }).map(() => {
      // Weight the random number to favor some empty spots but mostly green
      const rand = Math.random();
      if (rand < 0.3) return 0; // Empty
      if (rand < 0.5) return 1; // Light green
      if (rand < 0.7) return 2; // Medium green
      if (rand < 0.9) return 3; // Dark green
      return 4; // Darkest green
    });
  };

  const commits = generateCommits();

  // Tailwind classes for the "green squares"
  const colorMap: Record<number, string> = {
    0: "bg-zinc-900 border border-zinc-800",
    1: "bg-emerald-900/40 border border-emerald-900/50",
    2: "bg-emerald-700/60 border border-emerald-700/50",
    3: "bg-emerald-500/80 border border-emerald-500/50",
    4: "bg-emerald-400 border border-emerald-400/50 shadow-[0_0_10px_rgba(52,211,153,0.4)]",
  };

  return (
    <section className="px-6 py-8 w-full max-w-md mx-auto relative z-10">
      <FadeIn delay={0.4} direction="up">
        <div className="w-full flex flex-col gap-3">
          
          <div className="flex items-center justify-between px-1">
            <h3 className="text-sm font-semibold text-zinc-300 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              1,337 contributions
            </h3>
            <span className="text-xs text-zinc-600 font-mono">Last Year</span>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/50 border border-zinc-800 backdrop-blur-sm overflow-hidden flex justify-end">
            {/* The Grid */}
            <div className="grid grid-rows-7 grid-flow-col gap-1.5">
              {commits.map((level, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: (i % 7) * 0.05 + Math.floor(i / 7) * 0.02,
                    duration: 0.4
                  }}
                  className={`w-[10px] h-[10px] sm:w-3 sm:h-3 rounded-[2px] ${colorMap[level]}`}
                />
              ))}
            </div>
          </div>
          
        </div>
      </FadeIn>
    </section>
  );
}
