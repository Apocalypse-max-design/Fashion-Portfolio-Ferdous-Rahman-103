"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Award, Star } from "lucide-react";

const educationData = [
  {
    type: "education",
    title: "B.Sc. in Fashion Design & Technology (Honours)",
    organization: "Port City International University",
    location: "Chattogram, Bangladesh",
    period: "2023 - Present",
    description: "Currently in 2nd year, specializing in fashion design, pattern making, garment construction, and textile studies.",
    icon: GraduationCap,
  },
];

const experienceData = [
  {
    type: "experience",
    title: "Fashion Design Intern",
    organization: "Fashion House / Studio",
    location: "Chattogram, Bangladesh",
    period: "2024",
    description: "Assisted senior designers in creating patterns, selecting fabrics, and participating in fashion show preparations.",
    icon: Briefcase,
  },
  {
    type: "experience",
    title: "Workshop Participant - Sustainable Fashion",
    organization: "Fashion Design Council",
    location: "Dhaka, Bangladesh",
    period: "2024",
    description: "Participated in intensive workshop on sustainable fashion practices and eco-friendly design methodologies.",
    icon: Award,
  },
  {
    type: "experience",
    title: "Fashion Show Volunteer",
    organization: "Port City International University",
    location: "Chattogram, Bangladesh",
    period: "2024",
    description: "Contributed to university fashion show production, including backstage coordination and garment preparation.",
    icon: Star,
  },
];

function TimelineItem({ item, index, isInView }: { item: typeof educationData[0]; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex items-start gap-6 group"
    >
      {/* Timeline dot */}
      <div className="relative flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-[#D90429]/20 border-2 border-[#D90429] flex items-center justify-center group-hover:bg-[#D90429]/40 transition-colors duration-300">
          <item.icon size={20} className="text-[#D90429]" />
        </div>
        {/* Connecting line */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-[#D90429]/50 to-transparent" />
      </div>

      {/* Content card */}
      <div className="flex-1 pb-12">
        <div className="p-6 rounded-xl glass border border-white/5 hover:border-[#D90429]/30 transition-all duration-500 card-hover">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-[#D90429]/10 text-[#D90429] rounded-full border border-[#D90429]/20 mb-3">
            {item.period}
          </span>
          <h3 className="text-lg font-bold text-white font-[var(--font-space)] mb-1">
            {item.title}
          </h3>
          <p className="text-[#D90429] text-sm font-medium mb-1">{item.organization}</p>
          <p className="text-gray-500 text-xs mb-3">{item.location}</p>
          <p className="text-gray-400 text-sm leading-relaxed font-[var(--font-inter)]">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#1A0A2E]/30 to-[#0B0B0B]" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-900/10 rounded-full blur-[100px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D90429] text-sm font-medium uppercase tracking-widest">
            My Journey
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-[var(--font-space)] mt-4">
            Education & <span className="text-[#D90429]">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D90429] to-transparent mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold font-[var(--font-space)] mb-8 flex items-center gap-3"
            >
              <GraduationCap className="text-[#D90429]" />
              Education
            </motion.h3>
            <div className="space-y-2">
              {educationData.map((item, index) => (
                <TimelineItem key={item.title} item={item} index={index} isInView={isInView} />
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-2xl font-bold font-[var(--font-space)] mb-8 flex items-center gap-3"
            >
              <Briefcase className="text-[#D90429]" />
              Experience
            </motion.h3>
            <div className="space-y-2">
              {experienceData.map((item, index) => (
                <TimelineItem key={item.title} item={item} index={index} isInView={isInView} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
