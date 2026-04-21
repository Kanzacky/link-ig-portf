"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Paksa scroll ke atas & kunci body scroll selama loading
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = "0";
    document.body.style.width = "100%";

    const timer = setTimeout(() => {
      // 2. Sebelum loading hilang, pastikan posisi tetap di atas
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

      // 3. Lepas kunci scroll
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      setIsLoading(false);
    }, 2800);

    return () => {
      clearTimeout(timer);
      // Cleanup jika komponen unmount sebelum timer selesai
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-zinc-950"
        >
          <motion.div
            exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-6 w-full max-w-[140px]"
          >
            {/* Minimalist Logo / Name */}
            <motion.div
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="text-zinc-300 font-medium tracking-[0.4em] text-[10px] pl-[0.4em] uppercase"
            >
              Z A N
            </motion.div>

            {/* Premium Thin Progress Line - Bolak Balik 2 Kali */}
            <div className="relative w-full h-[1px] bg-zinc-800/30 rounded-full overflow-hidden">
              <motion.div
                initial={{ left: "0%" }}
                animate={{ left: "66.66%" }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  repeat: 3,
                  repeatType: "reverse",
                  delay: 0.3,
                }}
                className="absolute top-0 bottom-0 w-1/3 bg-zinc-300 shadow-[0_0_10px_rgba(255,255,255,0.5)] rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
