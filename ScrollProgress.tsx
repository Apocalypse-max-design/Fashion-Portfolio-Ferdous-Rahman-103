"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D90429] via-[#FF1744] to-[#D90429] z-[9999] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
