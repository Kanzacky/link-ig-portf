"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "./variants";
import { Database, BrainCircuit } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
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
          Selected Works
        </motion.h3>

        {/* Project 1 */}
        <motion.a
          variants={itemVariants}
          href="https://github.com/Kanzacky/Campus-Connect-UNIPMA"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full block p-5 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-md hover:bg-zinc-800/60 hover:border-zinc-700/60 transition-all duration-500 mb-4"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/15 rounded-full blur-xl" />
                <div className="relative z-10 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-400"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 1 4 3 6 3s6-2 6-3v-5" />
                  </svg>
                </div>
              </div>
              <h4 className="text-zinc-200 font-medium tracking-wide text-sm group-hover:text-blue-400 transition-colors">
                Campus Connect
              </h4>
            </div>
          </div>

          <p className="text-[13px] text-zinc-400 leading-relaxed mb-5">
            Platform manajemen terpusat untuk organisasi & ukm kampus dengan fitur role-based access control, penjadwalan event, dan pengumuman real-time. Arsitektur full-stack berbasis Laravel API dan React SPA.
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {/* Laravel Badge */}
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-medium tracking-wide">
              <img src="https://cdn.simpleicons.org/laravel/FF2D20" alt="Laravel" className="w-3 h-3" />
              Laravel
            </span>
            {/* React Badge */}
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-medium tracking-wide">
              <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" className="w-3 h-3" />
              React
            </span>
            {/* Inertia.js Badge */}
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-medium tracking-wide">
              <img src="https://cdn.simpleicons.org/inertia/A855F7" alt="Inertia.js" className="w-3 h-3" />
              Inertia.js
            </span>
            {/* TypeScript Badge */}
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] font-medium tracking-wide">
              <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" className="w-3 h-3" />
              TypeScript
            </span>
            {/* Fullstack Badge */}
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-[10px] font-medium tracking-wide">
              <Database className="w-3 h-3 text-zinc-400" />
              Fullstack
            </span>
          </div>
        </motion.a>

        {/* Project 2 */}
        <motion.a
          variants={itemVariants}
          href="https://github.com/Kanzacky/DotaWinIQR"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full block p-5 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-md hover:bg-zinc-800/60 hover:border-zinc-700/60 transition-all duration-500"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/15 rounded-full blur-xl" />
                <div className="relative z-10 p-1">
                  <img
                    src="https://cdn.simpleicons.org/dota2/EF4444"
                    alt="Dota 2"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
              <h4 className="text-zinc-200 font-medium tracking-wide text-sm group-hover:text-red-400 transition-colors">
                Dota 2 Win IQR
              </h4>
            </div>
          </div>

          <p className="text-[13px] text-zinc-400 leading-relaxed mb-5">
            Pipeline machine learning untuk memprediksi hasil pertandingan menggunakan pemodelan statistik dan feature engineering berbasis IQR. Berfokus pada kurasi data dan optimasi model.
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {/* Python Badge */}
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-[10px] font-medium tracking-wide">
              <img src="https://cdn.simpleicons.org/python/FFD43B" alt="Python" className="w-3 h-3" />
              Python
            </span>
            {/* Jupyter Badge */}
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-medium tracking-wide">
              <img src="https://cdn.simpleicons.org/jupyter/F37626" alt="Jupyter" className="w-3 h-3" />
              Jupyter
            </span>
            {/* Scikit-learn Badge */}
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] font-medium tracking-wide">
              <img src="https://cdn.simpleicons.org/scikitlearn/F7931E" alt="Scikit-learn" className="w-3 h-3" />
              Scikit-learn
            </span>
            {/* Data Science Badge */}
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-medium tracking-wide">
              <BrainCircuit className="w-3 h-3 text-emerald-400" />
              Data Science
            </span>
          </div>
        </motion.a>


        {/* See More Link */}
        <motion.div
          variants={itemVariants}
          className="mt-8 w-full flex justify-center"
        >
          <a
            href="https://github.com/Kanzacky"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-[12px] font-medium text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            See more on GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
