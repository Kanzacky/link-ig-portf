"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "./variants";

export default function About() {
  return (
    <section
      id="about"
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
          className="text-[10px] text-zinc-600 font-bold tracking-[0.3em] uppercase mb-10 text-center"
        >
          About Me
        </motion.h3>

        {/* Typographic Layout */}
        <div className="relative w-full">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-zinc-700/10 blur-[40px] rounded-full pointer-events-none -z-10"></div>

          <motion.p
            variants={itemVariants}
            className="text-[15px] sm:text-[17px] text-zinc-400/90 font-medium leading-[1.8] tracking-wide relative z-10 px-2 text-center sm:text-left"
          >
            Berawal dari{" "}
            <span className="text-zinc-200">Teknik Kendaraan Ringan</span>, kini
            bertransformasi ke{" "}
            <span className="text-zinc-50 font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
              Teknik Informatika
            </span>
            .
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-[11px] text-zinc-500 tracking-[0.3em] uppercase font-bold my-8 text-center"
          >
            From Automotive to Code
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-[15px] sm:text-[17px] text-zinc-400/90 font-medium leading-[1.8] tracking-wide relative z-10 px-2 text-center sm:text-left"
          >
            Menyalurkan insting rekayasa dari dunia mekanik menuju seni{" "}
            <span className="text-zinc-50 italic">
              pengembangan teknologi digital
            </span>
            .
          </motion.p>

          {/* Education Timeline */}
          <div className="mt-12 flex flex-col gap-6 w-full px-2">
            {/* High School */}
            <motion.div
              variants={itemVariants}
              className="relative pl-8 before:absolute before:left-[5px] before:top-4 before:w-[1px] before:h-[calc(100%+1.5rem)] before:bg-gradient-to-b before:from-zinc-800 before:to-zinc-800/20 group"
            >
              <span className="absolute left-0 top-1.5 w-3 h-3 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center group-hover:border-zinc-500 transition-colors duration-500">
                <span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-zinc-400 transition-colors duration-500"></span>
              </span>
              <div className="flex flex-col gap-1.5 p-4 rounded-2xl bg-zinc-900/20 border border-zinc-800/50 backdrop-blur-sm group-hover:bg-zinc-900/40 group-hover:border-zinc-700/50 transition-all duration-500">
                <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">
                  2019 — 2022
                </span>
                <h4 className="text-[14px] text-zinc-300 font-medium group-hover:text-white transition-colors duration-500">
                  SMK Negeri Kartoharjo
                </h4>
                <p className="text-[12px] text-zinc-500">
                  Teknik Kendaraan Ringan
                </p>
              </div>
            </motion.div>

            {/* University */}
            <motion.div
              variants={itemVariants}
              className="relative pl-8 group mt-2"
            >
              <span className="absolute left-0 top-1.5 w-3 h-3 rounded-full border border-zinc-600 bg-zinc-950 flex items-center justify-center group-hover:border-zinc-300 transition-colors duration-500 shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_12px_rgba(255,255,255,0.2)]">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 group-hover:bg-white transition-colors duration-500"></span>
              </span>
              <div className="flex flex-col gap-1.5 p-4 rounded-2xl bg-zinc-900/40 border border-zinc-700/50 backdrop-blur-sm group-hover:bg-zinc-800/40 group-hover:border-zinc-500/50 transition-all duration-500">
                <span className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]">
                  2023 — Present
                </span>
                <h4 className="text-[14px] text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all duration-500">
                  Universitas PGRI Madiun
                </h4>
                <p className="text-[12px] text-zinc-400">Teknik Informatika</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
