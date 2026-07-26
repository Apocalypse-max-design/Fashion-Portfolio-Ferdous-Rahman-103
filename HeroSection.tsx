"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Download, Eye, Mail, ChevronDown } from "lucide-react";

const typingTexts = [
  "Fashion Designer",
  "Creative Thinker",
  "Pattern Maker",
  "Design Innovator",
  "Future Icon",
];

function ParticleBackground() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 10}s`,
    duration: `${10 + Math.random() * 20}s`,
    size: `${2 + Math.random() * 4}px`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
      {/* Red gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#D90429]/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#D90429]/5 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "2s" }} />
    </div>
  );
}

export default function HeroSection() {
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const text = typingTexts[currentText];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(text.slice(0, displayText.length + 1));
          if (displayText.length === text.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(text.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentText((prev) => (prev + 1) % typingTexts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentText]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <ParticleBackground />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0B] via-[#0B0B0B] to-[#D90429]/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#D90429]/20"
            >
              <span className="w-2 h-2 bg-[#D90429] rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Available for Projects</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl text-gray-400 font-[var(--font-inter)]"
              >
                Hello, I&apos;m
              </motion.h2>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[var(--font-space)] leading-tight"
              >
                <span className="text-white">Md. Ferdous</span>
                <br />
                <span className="text-[#D90429] text-glow-red">Rahman Fakir</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-3"
              >
                <span className="text-xl md:text-2xl text-gray-300 font-[var(--font-inter)]">
                  {displayText}
                </span>
                <span className="w-0.5 h-6 bg-[#D90429] animate-pulse" />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed font-[var(--font-inter)]"
            >
              Fashion Design Student at Port City International University, Chattogram. 
              Passionate about creating innovative designs that blend tradition with modernity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#cv"
                className="group flex items-center gap-2 px-6 py-3 bg-[#D90429] rounded-full text-white font-medium hover:bg-[#FF1744] transition-all duration-300 shadow-lg shadow-[#D90429]/30 hover:shadow-[#D90429]/50"
              >
                <Download size={18} className="group-hover:animate-bounce" />
                Download CV
              </a>
              <a
                href="#portfolio"
                className="group flex items-center gap-2 px-6 py-3 glass rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <Eye size={18} />
                View Portfolio
              </a>
              <a
                href="#contact"
                className="group flex items-center gap-2 px-6 py-3 glass rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <Mail size={18} />
                Contact Me
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex gap-8 pt-4"
            >
              {[
                { number: "2+", label: "Years Study" },
                { number: "15+", label: "Projects" },
                { number: "5+", label: "Certificates" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#D90429] font-[var(--font-space)]">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glowing border ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#D90429] via-transparent to-[#D90429] opacity-50 blur-lg animate-pulse" />
              <div className="absolute -inset-2 rounded-full border-2 border-[#D90429]/50 animate-pulse-glow" />
              
              {/* Profile image container */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#D90429]/30"
              >
                <div className="w-full h-full bg-gradient-to-br from-[#1A1A2E] to-[#0B0B0B] flex items-center justify-center">
                  <svg className="w-32 h-32 text-[#D90429]/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 px-4 py-2 glass rounded-full text-sm font-medium border border-[#D90429]/30"
              >
                ✨ Creative
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 px-4 py-2 glass rounded-full text-sm font-medium border border-[#D90429]/30"
              >
                🎨 Designer
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-[#D90429]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
