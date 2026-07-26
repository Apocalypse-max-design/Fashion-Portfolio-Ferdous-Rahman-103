"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Eye, FileText, ExternalLink } from "lucide-react";

export default function CVSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cv" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#0F1B2D]/20 to-[#0B0B0B]" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D90429]/3 rounded-full blur-[150px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D90429] text-sm font-medium uppercase tracking-widest">
            My Resume
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-[var(--font-space)] mt-4">
            Curriculum <span className="text-[#D90429]">Vitae</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D90429] to-transparent mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* CV Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glass border border-white/10 aspect-[3/4] group">
              {/* CV Preview Content */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A2E] to-[#0B0B0B] p-8 flex flex-col">
                {/* Header */}
                <div className="text-center pb-6 border-b border-white/10">
                  <div className="w-20 h-20 rounded-full bg-[#D90429]/20 border-2 border-[#D90429]/50 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#D90429]">FR</span>
                  </div>
                  <h3 className="text-xl font-bold text-white font-[var(--font-space)]">
                    Md. Ferdous Rahman Fakir
                  </h3>
                  <p className="text-[#D90429] text-sm">Fashion Design Student</p>
                </div>

                {/* Content lines */}
                <div className="flex-1 py-6 space-y-4">
                  <div className="space-y-2">
                    <div className="h-3 bg-white/10 rounded w-1/3" />
                    <div className="h-2 bg-white/5 rounded w-full" />
                    <div className="h-2 bg-white/5 rounded w-4/5" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-white/10 rounded w-1/4" />
                    <div className="h-2 bg-white/5 rounded w-full" />
                    <div className="h-2 bg-white/5 rounded w-3/4" />
                    <div className="h-2 bg-white/5 rounded w-5/6" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-white/10 rounded w-1/3" />
                    <div className="h-2 bg-white/5 rounded w-full" />
                    <div className="h-2 bg-white/5 rounded w-2/3" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-white/10 rounded w-1/4" />
                    <div className="h-2 bg-white/5 rounded w-full" />
                    <div className="h-2 bg-white/5 rounded w-4/5" />
                    <div className="h-2 bg-white/5 rounded w-3/4" />
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-white/10 text-center">
                  <p className="text-[10px] text-gray-500">Chattogram, Bangladesh</p>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex gap-3">
                  <button className="p-3 bg-[#D90429] rounded-full hover:bg-[#FF1744] transition-colors">
                    <Eye size={20} />
                  </button>
                  <button className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <Download size={20} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CV Info & Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold font-[var(--font-space)]">
                Professional <span className="text-[#D90429]">Resume</span>
              </h3>
              <p className="text-gray-400 leading-relaxed font-[var(--font-inter)]">
                Download my comprehensive CV to learn more about my education, skills, 
                experience, and projects. The resume is regularly updated with my latest 
                achievements and works.
              </p>
            </div>

            {/* CV Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Education", value: "B.Sc. Fashion Design" },
                { label: "Experience", value: "Internships & Projects" },
                { label: "Skills", value: "15+ Skills" },
                { label: "Certificates", value: "5+ Certifications" },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl glass border border-white/5">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
                  <p className="text-sm font-bold text-white mt-1">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 bg-[#D90429] rounded-full text-white font-medium hover:bg-[#FF1744] transition-all duration-300 shadow-lg shadow-[#D90429]/30 hover:shadow-[#D90429]/50"
              >
                <Download size={18} />
                Download CV
              </a>
              <button className="flex items-center gap-2 px-6 py-3 glass rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300 border border-white/10">
                <Eye size={18} />
                View Full CV
              </button>
              <button className="flex items-center gap-2 px-6 py-3 glass rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300 border border-white/10">
                <ExternalLink size={18} />
                LinkedIn
              </button>
            </div>

            {/* File info */}
            <div className="flex items-center gap-3 p-4 rounded-xl glass border border-white/5">
              <FileText size={20} className="text-[#D90429]" />
              <div>
                <p className="text-sm font-medium text-white">Ferdous_Rahman_Fakir_CV.pdf</p>
                <p className="text-xs text-gray-500">PDF • Last updated July 2026</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
