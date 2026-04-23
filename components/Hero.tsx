"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "./variants";

export default function Hero() {
  return (
    <section className="px-4 flex flex-col items-center justify-center min-h-[100svh] relative overflow-hidden w-full">
      {/* Background Ambient Glow */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[250px] h-[250px] bg-zinc-500/10 blur-[80px] rounded-full pointer-events-none z-0"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col items-center justify-center gap-4 w-full mt-4 relative z-10"
      >
        {/* Image Section */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center w-full"
        >
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-[3px] border-zinc-800 shadow-[0_0_30px_rgba(255,255,255,0.03)] overflow-hidden relative mx-auto">
            <div className="absolute inset-0 bg-zinc-900/20 transition-colors duration-500 z-10"></div>
            <Image
              src="/iii.jpeg"
              alt="Zaki Adi Nugroho"
              fill
              sizes="(max-width: 768px) 128px, 128px"
              className="object-cover filter grayscale hover:grayscale-0 transition-colors duration-700 ease-in-out"
              priority
            />
          </div>
        </motion.div>

        {/* Name Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center w-full"
        >
          {/* Pre-title / Eyebrow */}
          <p className="text-[10px] sm:text-xs text-zinc-400 mb-1.5 tracking-[0.3em] uppercase font-medium">
            Tech Explorer
          </p>

          {/* Name & Badge */}
          <div className="flex items-center justify-center gap-1.5 mx-auto">
            <h1 className="text-lg sm:text-xl font-bold tracking-[0.2em] text-zinc-50 text-center uppercase">
              Zaki Adi Nugroho
            </h1>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:w-[22px] sm:h-[22px] drop-shadow-[0_0_8px_rgba(14,165,233,0.5)]"
            >
              <path
                d="M10.5213 2.62368C11.3147 1.75255 12.6853 1.75255 13.4787 2.62368L14.4989 3.74391C14.8998 4.18418 15.4761 4.42288 16.071 4.39508L17.5845 4.32435C18.7614 4.26934 19.7307 5.23857 19.6757 6.41554L19.6049 7.92905C19.5771 8.52388 19.8158 9.10016 20.2561 9.50111L21.3763 10.5213C22.2475 11.3147 22.2475 12.6853 21.3763 13.4787L20.2561 14.4989C19.8158 14.8998 19.5771 15.4761 19.6049 16.071L19.6757 17.5845C19.7307 18.7614 18.7614 19.7307 17.5845 19.6757L16.071 19.6049C15.4761 19.5771 14.8998 19.8158 14.4989 20.2561L13.4787 21.3763C12.6853 22.2475 11.3147 22.2475 10.5213 21.3763L9.50111 20.2561C9.10016 19.8158 8.52388 19.5771 7.92905 19.6049L6.41554 19.6757C5.23857 19.7307 4.26934 18.7614 4.32435 17.5845L4.39508 16.071C4.42288 15.4761 4.18418 14.8998 3.74391 14.4989L2.62368 13.4787C1.75255 12.6853 1.75255 11.3147 2.62368 10.5213L3.74391 9.50111C4.18418 9.10016 4.42288 8.52388 4.39508 7.92905L4.32435 6.41554C4.26934 5.23857 5.23857 4.26934 6.41554 4.32435L7.92905 4.39508C8.52388 4.42288 9.10016 4.18418 9.50111 3.74391L10.5213 2.62368Z"
                fill="#0ea5e9"
              />
              <path
                d="M10.2224 15.0069C10.0249 15.0069 9.83582 14.9284 9.69616 14.7888L6.71181 11.8044C6.42084 11.5135 6.42084 11.0417 6.71181 10.7507C7.00278 10.4598 7.47461 10.4598 7.76558 10.7507L10.2224 13.2075L16.2344 7.19556C16.5254 6.90459 16.9972 6.90459 17.2882 7.19556C17.5792 7.48652 17.5792 7.95836 17.2882 8.24932L10.7486 14.7888C10.609 14.9284 10.4199 15.0069 10.2224 15.0069Z"
                fill="white"
              />
            </svg>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 mt-2.5 text-zinc-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-80"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <p className="text-[10px] sm:text-xs tracking-[0.15em] uppercase font-medium">
              Magetan, Jawa Timur
            </p>
          </div>
        </motion.div>

        {/* Icons Section (Tap-Friendly Buttons) */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center w-full"
        >
          <div className="flex items-center justify-center gap-5 mt-2 mx-auto">
            <a
              href="https://github.com/Kanzacky"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 bg-zinc-900 border border-white/5 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-white/20 active:scale-95 transition-all shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-3 bg-zinc-900 border border-white/5 rounded-full text-zinc-400 hover:text-[#E1306C] hover:bg-zinc-800 hover:border-[#E1306C]/30 active:scale-95 transition-all shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/zakiadinugroho"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 bg-zinc-900 border border-white/5 rounded-full text-zinc-400 hover:text-[#0A66C2] hover:bg-zinc-800 hover:border-[#0A66C2]/30 active:scale-95 transition-all shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
