"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ZoomIn } from "lucide-react";

const categories = ["All", "Sketches", "Garments", "Illustrations", "Technical", "Photoshoots"];

const portfolioItems = [
  { id: 1, title: "Evening Gown Sketch", category: "Sketches", color: "#D90429" },
  { id: 2, title: "Technical Flat Drawing", category: "Technical", color: "#4A90D9" },
  { id: 3, title: "Mood Board - Autumn", category: "Illustrations", color: "#9C27B0" },
  { id: 4, title: "Garment Construction", category: "Garments", color: "#4CAF50" },
  { id: 5, title: "Fashion Photoshoot", category: "Photoshoots", color: "#FF9800" },
  { id: 6, title: "Textile Design Sketch", category: "Sketches", color: "#00BCD4" },
  { id: 7, title: "Pattern Technical Draw", category: "Technical", color: "#E91E63" },
  { id: 8, title: "Digital Illustration", category: "Illustrations", color: "#7B68EE" },
  { id: 9, title: "Finished Garment", category: "Garments", color: "#009688" },
  { id: 10, title: "Studio Photoshoot", category: "Photoshoots", color: "#FF5722" },
  { id: 11, title: "Fashion Croquis", category: "Sketches", color: "#607D8B" },
  { id: 12, title: "Detail Technical Flat", category: "Technical", color: "#795548" },
];

function Lightbox({ item, onClose }: { item: typeof portfolioItems[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl aspect-[4/3] rounded-2xl overflow-hidden"
      >
        <div
          className="w-full h-full flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${item.color}20, #0B0B0B)` }}
        >
          <div className="text-center">
            <div
              className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ backgroundColor: `${item.color}30` }}
            >
              <ZoomIn size={40} style={{ color: item.color }} />
            </div>
            <h3 className="text-xl font-bold text-white font-[var(--font-space)]">{item.title}</h3>
            <p className="text-gray-400 text-sm mt-1">{item.category}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors"
          aria-label="Close lightbox"
        >
          <X size={20} />
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#1A0F0A]/30 to-[#0B0B0B]" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="absolute top-1/3 right-0 w-80 h-80 bg-amber-900/5 rounded-full blur-[100px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#D90429] text-sm font-medium uppercase tracking-widest">
            Creative Works
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-[var(--font-space)] mt-4">
            Portfolio <span className="text-[#D90429]">Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D90429] to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-[#D90429] text-white shadow-lg shadow-[#D90429]/30"
                  : "glass text-gray-400 hover:text-white border border-white/10 hover:border-[#D90429]/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setLightboxItem(item)}
                className="break-inside-avoid group cursor-pointer relative rounded-xl overflow-hidden glass border border-white/5 hover:border-[#D90429]/30 transition-all duration-500"
              >
                <div
                  className="w-full aspect-[4/3] flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${item.color}10, #0B0B0B)` }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <ZoomIn size={24} style={{ color: item.color }} />
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: item.color }}>
                      {item.category}
                    </span>
                    <h4 className="text-sm font-bold text-white font-[var(--font-space)] mt-1">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />}
      </AnimatePresence>
    </section>
  );
}
