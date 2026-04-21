"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FadeIn from "./FadeIn";

export default function TerminalFlex() {
  const [text, setText] = useState("");
  const fullText = "const student = {\\n  name: 'Zaki Adi Nugroho',\\n  major: 'Informatics Engineering',\\n  skills: ['React', 'Next.js', 'Tailwind', 'TypeScript'],\\n  status: 'Coffee to Code Converter'\\n};\\n\\nconsole.log(student);";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-6 py-10 w-full max-w-md mx-auto relative z-10">
      <FadeIn delay={0.2} direction="up">
        {/* Fake Terminal Window */}
        <div className="w-full rounded-xl bg-black/50 backdrop-blur-xl border border-zinc-800 shadow-2xl overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <p className="ml-4 text-xs text-zinc-500 font-mono">zaki@localhost: ~</p>
          </div>
          
          {/* Terminal Body */}
          <div className="p-4 sm:p-6 text-sm font-mono text-zinc-300 min-h-[180px] text-left">
            <span className="text-emerald-400">➜</span> <span className="text-blue-400">~</span> <span className="text-zinc-50">cat</span> profile.js
            <br />
            <br />
            <pre className="whitespace-pre-wrap leading-relaxed">
              <code className="text-zinc-400">
                {text}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 h-4 bg-zinc-400 ml-1 align-middle"
                />
              </code>
            </pre>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
