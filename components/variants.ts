import { Variants } from "framer-motion";

// Premium cubic-bezier easing — Apple/Linear style spring feel
const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// Opacity-only — no y-transform to avoid fighting native scroll on mobile
export const itemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease,
    },
  },
};
