"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Target, Heart, BookOpen } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: BookOpen,
      title: "About Me",
      content:
        "I am Md. Ferdous Rahman Fakir, a passionate fashion design student at Port City International University in Chattogram, Bangladesh. Currently in my 2nd year of B.Sc. in Fashion Design & Technology (Honours), I am dedicated to mastering the art and science of fashion design.",
    },
    {
      icon: GraduationCap,
      title: "Education",
      content:
        "Pursuing B.Sc. in Fashion Design & Technology (Honours) at Port City International University, Chattogram. Building strong foundations in design theory, garment construction, textile science, and fashion business.",
    },
    {
      icon: Target,
      title: "Career Objective",
      content:
        "To become a leading fashion designer who bridges traditional craftsmanship with contemporary innovation. I aspire to create sustainable, culturally-inspired fashion that resonates globally while honoring Bangladeshi heritage.",
    },
    {
      icon: Heart,
      title: "Interests",
      content:
        "Fashion illustration, sustainable design, textile manipulation, cultural fashion research, pattern drafting, and exploring the intersection of technology and fashion through 3D design tools.",
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#1A1A2E]/30 to-[#0B0B0B]" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D90429] text-sm font-medium uppercase tracking-widest">
            Get to Know Me
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-[var(--font-space)] mt-4">
            About <span className="text-[#D90429]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D90429] to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl glass border border-white/5 hover:border-[#D90429]/30 transition-all duration-500 card-hover"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D90429]/0 to-[#D90429]/0 group-hover:from-[#D90429]/5 group-hover:to-transparent transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-[#D90429]/10 border border-[#D90429]/20 group-hover:bg-[#D90429]/20 transition-colors">
                    <card.icon size={24} className="text-[#D90429]" />
                  </div>
                  <h3 className="text-xl font-bold font-[var(--font-space)] text-white">
                    {card.title}
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed font-[var(--font-inter)]">
                  {card.content}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-[#D90429]/50 to-transparent" />
                <div className="absolute top-0 right-0 h-px w-8 bg-gradient-to-l from-[#D90429]/50 to-transparent" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Passion Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 p-8 md:p-12 rounded-2xl glass border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D90429] via-[#D90429]/50 to-transparent" />
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#D90429]/5 rounded-full blur-[60px]" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold font-[var(--font-space)] mb-6">
              My <span className="text-[#D90429]">Passion</span> for Fashion
            </h3>
            <p className="text-gray-300 leading-relaxed font-[var(--font-inter)] text-lg max-w-4xl">
              Fashion, for me, is more than just clothing—it&apos;s a language of self-expression, 
              a bridge between culture and innovation. Growing up in Bangladesh, a country with a 
              rich textile heritage, I was always fascinated by how fabrics tell stories. My journey 
              into fashion design began with sketching designs inspired by traditional Bengali motifs 
              and evolved into a deep appreciation for both craftsmanship and contemporary aesthetics. 
              I believe that great design has the power to transform not just how we look, but how 
              we feel and connect with the world around us.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
