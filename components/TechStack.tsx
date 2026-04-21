"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const techStack = [
  { name: "Laravel", slug: "laravel", color: "FF2D20" },
  { name: "Next.js", slug: "nextdotjs", color: "FFFFFF" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
  { name: "MySQL", slug: "mysql", color: "4479A1" },
];

import { containerVariants, itemVariants } from "./variants";

export default function TechStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="techstack"
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
          Tech Stack
        </motion.h3>

        {/* Aesthetic Colorful Pills */}
        <div className="flex flex-wrap justify-center gap-3 w-full">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onTouchStart={() => setHoveredIndex(index)}
              onTouchEnd={() => setHoveredIndex(null)}
              whileTap={{ scale: 0.98 }}
              style={{
                borderColor: `#${tech.color}22`,
              }}
              className="group flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-zinc-900/40 border backdrop-blur-md transition-all duration-500 cursor-default"
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <img
                  src={
                    tech.name === "Python"
                      ? "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                      : tech.name === "MySQL"
                        ? "https://www.vectorlogo.zone/logos/mysql/mysql-official.svg"
                        : `https://cdn.simpleicons.org/${tech.slug}/${tech.color}`
                  }
                  alt={`${tech.name} logo`}
                  className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <span
                style={{ color: `#${tech.color}cc` }}
                className="text-[13px] font-semibold tracking-wide group-hover:text-white transition-colors duration-500"
              >
                {tech.name === "MySQL" ? (
                  <>
                    My<span style={{ color: "#F29111" }}>SQL</span>
                  </>
                ) : (
                  tech.name
                )}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
