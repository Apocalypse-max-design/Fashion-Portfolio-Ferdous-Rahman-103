"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ExternalLink, Download, Wrench, Image } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Traditional Bengali Fusion Collection",
    description: "A contemporary fashion collection that blends traditional Bengali textiles with modern silhouettes. Features hand-woven fabrics and innovative draping techniques.",
    tools: ["Adobe Illustrator", "CLO 3D", "Pattern Making"],
    category: "Collection Design",
    color: "#D90429",
  },
  {
    id: 2,
    title: "Sustainable Streetwear Line",
    description: "Eco-friendly streetwear designs using recycled materials and sustainable production methods. Focus on zero-waste pattern cutting.",
    tools: ["Adobe Photoshop", "Textile Research", "Garment Construction"],
    category: "Sustainable Fashion",
    color: "#4CAF50",
  },
  {
    id: 3,
    title: "Digital Fashion Illustration Series",
    description: "A series of digital fashion illustrations exploring futuristic themes and avant-garde silhouettes using digital tools and traditional sketching.",
    tools: ["Adobe Illustrator", "Procreate", "Digital Painting"],
    category: "Illustration",
    color: "#9C27B0",
  },
  {
    id: 4,
    title: "Bridal Couture Design Project",
    description: "Comprehensive bridal collection design including mood boards, technical flats, fabric selection, and prototype development.",
    tools: ["CLO 3D", "Pattern Making", "Adobe Suite"],
    category: "Bridal Design",
    color: "#FF9800",
  },
  {
    id: 5,
    title: "Textile Manipulation Research",
    description: "Experimental textile manipulation techniques including pleating, smocking, and heat-setting to create unique fabric textures.",
    tools: ["Textile Lab", "Sewing Machine", "Hand Techniques"],
    category: "Textile Design",
    color: "#00BCD4",
  },
  {
    id: 6,
    title: "Fashion Brand Identity Design",
    description: "Complete brand identity for a fictional fashion label including logo, color palette, typography, and brand guidelines.",
    tools: ["Adobe Illustrator", "Photoshop", "Brand Strategy"],
    category: "Branding",
    color: "#E91E63",
  },
];

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl glass border border-white/10 bg-[#0B0B0B]"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 p-6 border-b border-white/5 bg-[#0B0B0B]/90 backdrop-blur-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-medium text-[#D90429] uppercase tracking-wider">{project.category}</span>
            <h3 className="text-xl font-bold text-white font-[var(--font-space)] mt-1">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Project Image Placeholder */}
          <div className="w-full h-64 rounded-xl bg-gradient-to-br from-[#1A1A2E] to-[#0B0B0B] flex items-center justify-center border border-white/5">
            <Image size={48} className="text-white/20" />
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-2">Description</h4>
            <p className="text-gray-300 leading-relaxed font-[var(--font-inter)]">{project.description}</p>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">Tools Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 text-xs font-medium rounded-full border"
                  style={{
                    backgroundColor: `${project.color}15`,
                    borderColor: `${project.color}30`,
                    color: project.color,
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-white/5">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#D90429] rounded-lg text-sm font-medium hover:bg-[#FF1744] transition-colors">
              <ExternalLink size={16} />
              View Full Project
            </button>
            <button className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-sm font-medium hover:bg-white/10 transition-colors border border-white/10">
              <Download size={16} />
              Download PDF
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#0A1A0F]/30 to-[#0B0B0B]" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-900/5 rounded-full blur-[100px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D90429] text-sm font-medium uppercase tracking-widest">
            My Work
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-[var(--font-space)] mt-4">
            Featured <span className="text-[#D90429]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D90429] to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer p-6 rounded-2xl glass border border-white/5 hover:border-[#D90429]/30 transition-all duration-500 card-hover"
            >
              {/* Project thumbnail */}
              <div
                className="w-full h-40 rounded-xl mb-5 flex items-center justify-center border border-white/5"
                style={{ background: `linear-gradient(135deg, ${project.color}10, transparent)` }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${project.color}20` }}
                >
                  <Wrench size={24} style={{ color: project.color }} />
                </div>
              </div>

              {/* Category */}
              <span
                className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded mb-2"
                style={{ color: project.color, backgroundColor: `${project.color}15` }}
              >
                {project.category}
              </span>

              {/* Title */}
              <h3 className="text-lg font-bold text-white font-[var(--font-space)] mb-2 group-hover:text-[#D90429] transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm line-clamp-2 font-[var(--font-inter)]">
                {project.description}
              </p>

              {/* Tools preview */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tools.slice(0, 2).map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 text-[10px] rounded bg-white/5 text-gray-400"
                  >
                    {tool}
                  </span>
                ))}
                {project.tools.length > 2 && (
                  <span className="px-2 py-0.5 text-[10px] rounded bg-white/5 text-gray-400">
                    +{project.tools.length - 2}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
