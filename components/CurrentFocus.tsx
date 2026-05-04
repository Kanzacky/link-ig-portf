"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, BrainCircuit, ServerCog } from "lucide-react";
import { containerVariants, itemVariants } from "./variants";

const focuses = [
  {
    title: "Full-Stack Web Development",
    description:
      "Mengembangkan aplikasi web end-to-end dengan Laravel, React, Inertia.js, dan Next.js — dari arsitektur database hingga antarmuka pengguna.",
    icon: MonitorSmartphone,
    color: "text-sky-400",
    bgGlow: "bg-sky-400/20",
    borderColor: "group-hover:border-sky-500/30",
  },
  {
    title: "Machine Learning & Data Science",
    description:
      "Membangun pipeline ML untuk pemodelan prediktif, clustering, dan analisis data menggunakan Python, Scikit-learn, dan Jupyter Notebook.",
    icon: BrainCircuit,
    color: "text-violet-400",
    bgGlow: "bg-violet-400/20",
    borderColor: "group-hover:border-violet-500/30",
  },
  {
    title: "Backend Engineering",
    description:
      "Merancang RESTful API, sistem autentikasi, dan logika bisnis yang scalable dengan fokus pada keamanan dan performa.",
    icon: ServerCog,
    color: "text-emerald-400",
    bgGlow: "bg-emerald-400/20",
    borderColor: "group-hover:border-emerald-500/30",
  },
];

export default function CurrentFocus() {
  return (
    <section
      id="focus"
      className="px-6 w-full max-w-md mx-auto relative z-10 flex flex-col items-center justify-center min-h-[100svh] py-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col items-center w-full"
      >
        {/* Subtle Title */}
        <motion.h3
          variants={itemVariants}
          className="text-[10px] text-zinc-600 font-bold tracking-[0.3em] uppercase mb-8 text-center"
        >
          Current Focus
        </motion.h3>

        {/* Premium Focus Cards */}
        <div className="w-full flex flex-col gap-4">
          {focuses.map((focus, index) => (
            <motion.div key={index} variants={itemVariants} className="w-full">
              <div
                className={`group relative w-full flex items-start gap-4 p-5 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-md transition-all duration-500 hover:bg-zinc-800/60 ${focus.borderColor}`}
              >
                {/* Icon Container */}
                <div className="relative shrink-0 flex items-center justify-center w-10 h-10 rounded-2xl bg-zinc-950 border border-zinc-800/50 group-hover:border-zinc-700/50 transition-colors duration-500 mt-0.5">
                  <div
                    className={`absolute inset-0 ${focus.bgGlow} rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <focus.icon
                    className={`w-[18px] h-[18px] relative z-10 ${focus.color} opacity-70 group-hover:opacity-100 transition-opacity duration-500`}
                    strokeWidth={2}
                  />
                </div>

                {/* Text Container */}
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-sm font-medium text-zinc-200 tracking-wide group-hover:text-white transition-colors duration-500">
                    {focus.title}
                  </h4>
                  <p className="text-[13px] text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors duration-500">
                    {focus.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
