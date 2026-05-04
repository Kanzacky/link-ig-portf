"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "./variants";

export default function Contact() {
  return (
    <section
      id="contact"
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
          Contact
        </motion.h3>

        {/* Heading */}
        <motion.div variants={itemVariants} className="text-center mb-8 w-full">
          <h2 className="text-3xl font-bold text-zinc-50 tracking-tight mb-3">
            Need Something?
          </h2>
          <p className="text-[13px] text-zinc-400 leading-relaxed max-w-[260px] mx-auto">
            Mari berdiskusi dan{" "}
            <span className="text-zinc-300 italic">collaboration</span>.
          </p>
        </motion.div>

        {/* WhatsApp Button */}
        <motion.a
          variants={itemVariants}
          href="https://wa.me/628819310482"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full flex items-center justify-center gap-3 p-5 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-md hover:bg-zinc-800/60 hover:border-zinc-700/60 transition-all duration-300 mb-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-zinc-500 group-hover:text-emerald-400 transition-colors"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <h4 className="text-zinc-200 font-medium tracking-wide text-sm group-hover:text-emerald-400 transition-colors">
            WhatsApp
          </h4>
        </motion.a>

        {/* Email Button */}
        <motion.a
          variants={itemVariants}
          href="mailto:zackyadie99@gmail.com"
          className="group w-full flex items-center justify-center gap-3 p-5 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-md hover:bg-zinc-800/60 hover:border-zinc-700/60 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-zinc-500 group-hover:text-zinc-100 transition-colors"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <h4 className="text-zinc-200 font-medium tracking-wide text-sm group-hover:text-zinc-100 transition-colors">
            Email
          </h4>
        </motion.a>
      </motion.div>
    </section>
  );
}
