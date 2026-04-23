"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "./variants";

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
          Featured Repositories
        </motion.h3>

        {/* Project 1 */}
        <motion.a
          variants={itemVariants}
          href="https://github.com/Kanzacky/Campus-Connect"
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
                Campus Connect API
              </h4>
            </div>
          </div>

          <p className="text-[13px] text-zinc-400 leading-relaxed mb-5">
            Sistem backend platform manajemen menggunakan Laravel. Terintegrasi
            dengan fitur Role-Based Access Control dan REST API.
          </p>

          <div className="flex items-center gap-4 text-[10px] text-zinc-500 font-medium uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              Laravel
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-600"></span>
              Source Code
            </span>
          </div>
        </motion.a>

        {/* Project 2 */}
        <motion.a
          variants={itemVariants}
          href="https://github.com/Kanzacky/Dota-2-Win-Prediction-Robust-Data-Cleaning-via-IQR-Feature-Engineering"
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
            Model prediksi pemenang game Dota 2 menggunakan dataset besar dengan
            Python dan Jupyter Notebook untuk analisa data.
          </p>

          <div className="flex items-center gap-4 text-[10px] text-zinc-500 font-medium uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
              Python
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-600"></span>
              Source Code
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
