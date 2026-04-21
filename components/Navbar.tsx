"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter text-zinc-50" aria-label="Home">
          Zaki.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#" className="hover:text-zinc-50 transition-colors">Home</a>
          <a href="#experience" className="hover:text-zinc-50 transition-colors">Education</a>
          <a href="#contact" className="hover:text-zinc-50 transition-colors">Contact</a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-zinc-50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-zinc-950/95 backdrop-blur-xl border-b border-white/5 py-4 px-6 flex flex-col gap-4 text-sm font-medium text-zinc-400"
          >
            <a href="#" onClick={() => setIsOpen(false)} className="hover:text-zinc-50 transition-colors py-2 block">Home</a>
            <a href="#experience" onClick={() => setIsOpen(false)} className="hover:text-zinc-50 transition-colors py-2 block">Education</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-zinc-50 transition-colors py-2 block">Contact</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
