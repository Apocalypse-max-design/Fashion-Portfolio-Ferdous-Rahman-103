"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Calendar, Download, Eye, ExternalLink } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Fashion Design Fundamentals",
    organization: "Port City International University",
    date: "2024",
    description: "Completed comprehensive course covering fashion design principles, illustration techniques, and garment construction basics.",
    color: "#D90429",
  },
  {
    id: 2,
    title: "Digital Fashion Illustration",
    organization: "Online Learning Platform",
    date: "2024",
    description: "Certified in digital fashion illustration using Adobe Illustrator and Procreate for professional portfolio development.",
    color: "#4A90D9",
  },
  {
    id: 3,
    title: "Sustainable Fashion Workshop",
    organization: "Fashion Revolution Bangladesh",
    date: "2024",
    description: "Participated in workshop on sustainable fashion practices, ethical production, and circular design principles.",
    color: "#4CAF50",
  },
  {
    id: 4,
    title: "Pattern Making Mastery",
    organization: "Technical Training Institute",
    date: "2023",
    description: "Advanced pattern making certification covering draping, flat pattern techniques, and size grading.",
    color: "#9C27B0",
  },
  {
    id: 5,
    title: "Textile Science & Technology",
    organization: "Port City International University",
    date: "2023",
    description: "Comprehensive study of textile fibers, fabrics, weaving techniques, and fabric testing methods.",
    color: "#FF9800",
  },
];

export default function CertificatesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#2E0A0A]/20 to-[#0B0B0B]" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-red-900/5 rounded-full blur-[100px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D90429] text-sm font-medium uppercase tracking-widest">
            Achievements
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-[var(--font-space)] mt-4">
            Certificates & <span className="text-[#D90429]">Awards</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D90429] to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl glass border border-white/5 hover:border-[#D90429]/30 transition-all duration-500 card-hover overflow-hidden"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }}
              />

              {/* Certificate icon */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="p-3 rounded-xl border"
                  style={{
                    backgroundColor: `${cert.color}15`,
                    borderColor: `${cert.color}30`,
                  }}
                >
                  <Award size={24} style={{ color: cert.color }} />
                </div>
                <div className="flex items-center gap-1 text-gray-500 text-xs">
                  <Calendar size={12} />
                  {cert.date}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white font-[var(--font-space)] mb-1 group-hover:text-[#D90429] transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm font-medium mb-3" style={{ color: cert.color }}>
                {cert.organization}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed font-[var(--font-inter)] mb-5">
                {cert.description}
              </p>

              {/* Actions */}
              <div className="flex gap-2 pt-4 border-t border-white/5">
                <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 transition-colors">
                  <Eye size={12} />
                  View
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 transition-colors">
                  <Download size={12} />
                  Download
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 transition-colors">
                  <ExternalLink size={12} />
                  Verify
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
