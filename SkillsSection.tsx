"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Monitor, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Fashion Skills",
    icon: Palette,
    color: "#D90429",
    skills: [
      { name: "Fashion Illustration", level: 85 },
      { name: "Pattern Making", level: 80 },
      { name: "Garment Construction", level: 78 },
      { name: "Sewing", level: 82 },
      { name: "Textile Knowledge", level: 75 },
      { name: "Fashion Merchandising", level: 70 },
    ],
  },
  {
    title: "Software",
    icon: Monitor,
    color: "#4A90D9",
    skills: [
      { name: "Adobe Illustrator", level: 80 },
      { name: "Adobe Photoshop", level: 78 },
      { name: "CLO 3D", level: 65 },
      { name: "Microsoft Office", level: 85 },
    ],
  },
  {
    title: "Professional Skills",
    icon: Users,
    color: "#7B68EE",
    skills: [
      { name: "Leadership", level: 75 },
      { name: "Communication", level: 85 },
      { name: "Teamwork", level: 90 },
      { name: "Presentation", level: 80 },
    ],
  },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-xs font-bold" style={{ color }}>{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="h-full rounded-full relative"
          style={{ backgroundColor: color }}
        >
          <div className="absolute inset-0 shimmer rounded-full" />
        </motion.div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#0F1B2D]/30 to-[#0B0B0B]" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#4A90D9]/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D90429]/5 rounded-full blur-[100px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D90429] text-sm font-medium uppercase tracking-widest">
            My Expertise
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-[var(--font-space)] mt-4">
            Skills & <span className="text-[#D90429]">Abilities</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D90429] to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              className="group relative p-8 rounded-2xl glass border border-white/5 hover:border-[#D90429]/30 transition-all duration-500 card-hover"
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="p-3 rounded-xl border"
                  style={{
                    backgroundColor: `${category.color}15`,
                    borderColor: `${category.color}30`,
                  }}
                >
                  <category.icon size={24} style={{ color: category.color }} />
                </div>
                <h3 className="text-xl font-bold font-[var(--font-space)] text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={category.color}
                    delay={catIndex * 0.2 + skillIndex * 0.1}
                  />
                ))}
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${category.color}10, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
