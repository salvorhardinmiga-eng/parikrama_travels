"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "Spiritual" | "Adventure" | "Leisure";

interface Destination {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  category: Category;
  image: string;
  isPremium?: boolean;
  colSpan: string;
}

const destinations: Destination[] = [
  { id: "1", title: "Kailash Mansarovar", subtitle: "The ultimate spiritual pilgrimage", duration: "14 Days", price: "From ₹1,85,000", category: "Spiritual", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", isPremium: true, colSpan: "md:col-span-2 md:row-span-2" },
  { id: "2", title: "Lahaul & Spiti", subtitle: "The cold desert frontier", duration: "8 Days", price: "From ₹35,000", category: "Adventure", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80", colSpan: "" },
  { id: "3", title: "Ladakh", subtitle: "Where earth meets sky", duration: "10 Days", price: "From ₹45,000", category: "Adventure", image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80", colSpan: "" },
  { id: "4", title: "Kerala", subtitle: "Emerald backwaters", duration: "7 Days", price: "From ₹28,000", category: "Leisure", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80", colSpan: "md:col-span-2" },
  { id: "5", title: "Char Dham Yatra", subtitle: "The sacred four", duration: "12 Days", price: "From ₹65,000", category: "Spiritual", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80", colSpan: "" },
  { id: "6", title: "Valley of Flowers", subtitle: "Nature's living canvas", duration: "6 Days", price: "From ₹22,000", category: "Leisure", image: "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=800&q=80", colSpan: "md:row-span-2" },
  { id: "7", title: "Shimla", subtitle: "Colonial hill elegance", duration: "4 Days", price: "From ₹15,000", category: "Leisure", image: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=800&q=80", colSpan: "" },
  { id: "8", title: "Manali", subtitle: "Adventure basecamp", duration: "5 Days", price: "From ₹18,000", category: "Adventure", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", colSpan: "" },
  { id: "9", title: "Dharamshala", subtitle: "Buddhist tranquility", duration: "4 Days", price: "From ₹14,000", category: "Spiritual", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80", colSpan: "md:col-span-2" },
  { id: "10", title: "Dalhousie", subtitle: "Victorian serenity", duration: "4 Days", price: "From ₹16,000", category: "Leisure", image: "https://images.unsplash.com/photo-1500534314263-0869cef46b30?w=800&q=80", colSpan: "" },
  { id: "11", title: "Adi Kailash", subtitle: "The hidden pilgrimage", duration: "9 Days", price: "From ₹45,000", category: "Spiritual", image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80", colSpan: "" },
  { id: "12", title: "Goa", subtitle: "Sun-kissed shores", duration: "5 Days", price: "From ₹25,000", category: "Leisure", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80", colSpan: "" },
  { id: "13", title: "Andamans", subtitle: "Turquoise paradise", duration: "6 Days", price: "From ₹40,000", category: "Leisure", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80", colSpan: "md:col-span-2" },
];

const categoryConfig: Record<Category, { color: string; bg: string }> = {
  Spiritual: { color: "#B8860B", bg: "rgba(184,134,11,0.12)" },
  Adventure: { color: "#1A8A7D", bg: "rgba(26,138,125,0.12)" },
  Leisure: { color: "#E07A5F", bg: "rgba(224,122,95,0.12)" },
};

export default function BentoGrid() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedDest = destinations.find((d) => d.id === selectedId);

  return (
    <section id="experiences" className="py-32 px-4 md:px-8 max-w-[1500px] mx-auto w-full" style={{ backgroundColor: "#F7F4EF" }}>
      {/* Section Header */}
      <div className="text-center mb-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block font-sans text-xs uppercase tracking-[0.5em] mb-4 py-1.5 px-5 rounded-full"
          style={{ color: "#B8860B", backgroundColor: "rgba(184,134,11,0.08)" }}
        >
          13 Signature Experiences
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="font-serif text-5xl md:text-7xl tracking-tight"
          style={{ color: "#1A1A2E" }}
        >
          Our Journeys
        </motion.h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5" style={{ gridAutoRows: "320px" }}>
        {destinations.map((dest, i) => {
          const cat = categoryConfig[dest.category];
          return (
            <motion.div
              layoutId={`card-${dest.id}`}
              key={dest.id}
              onClick={() => setSelectedId(dest.id)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer col-span-1 ${dest.colSpan}`}
              style={{ minHeight: "320px" }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${dest.image})` }}
              />

              {/* Dark overlay for text contrast */}
              <div className="absolute inset-0 transition-all duration-500" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.05) 100%)" }} />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-500" />

              {/* Premium Badge */}
              {dest.isPremium && (
                <div className="absolute top-5 right-5 z-10">
                  <span
                    className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] px-4 py-1.5 rounded-full backdrop-blur-md"
                    style={{ color: "#D4A843", backgroundColor: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.3)" }}
                  >
                    Premium
                  </span>
                </div>
              )}

              {/* Category Tag */}
              <div className="absolute top-5 left-5 z-10">
                <span
                  className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full backdrop-blur-md"
                  style={{ color: cat.color, backgroundColor: cat.bg, border: `1px solid ${cat.color}30` }}
                >
                  {dest.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-1 leading-tight">{dest.title}</h3>
                <p className="font-sans text-xs text-white/60 mb-4">{dest.subtitle}</p>

                {/* Info Row - always visible */}
                <div className="flex items-center gap-4 font-sans text-xs text-white/50">
                  <span className="flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {dest.duration}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  <span>{dest.price}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedId && selectedDest && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12"
            style={{ backgroundColor: "rgba(26,26,46,0.85)", backdropFilter: "blur(20px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`card-${selectedId}`}
              className="w-full max-w-5xl rounded-3xl relative overflow-hidden shadow-2xl"
              style={{ aspectRatio: "16/9" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedDest.image})` }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 100%)" }} />

              <div className="absolute inset-0 p-10 md:p-20 flex flex-col justify-center">
                <span
                  className="inline-block w-max font-sans text-xs uppercase tracking-[0.4em] mb-6 px-4 py-1.5 rounded-full"
                  style={{ color: categoryConfig[selectedDest.category].color, backgroundColor: categoryConfig[selectedDest.category].bg }}
                >
                  {selectedDest.category}
                </span>
                <h2 className="font-serif text-5xl md:text-8xl text-white mb-4 tracking-tight leading-[0.9]">{selectedDest.title}</h2>
                <p className="font-sans text-base text-white/60 mb-8 max-w-md">{selectedDest.subtitle}</p>

                <div className="flex gap-10 mb-10">
                  <div>
                    <div className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/40 mb-1">Duration</div>
                    <div className="font-sans text-lg text-white">{selectedDest.duration}</div>
                  </div>
                  <div>
                    <div className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/40 mb-1">Starting</div>
                    <div className="font-sans text-lg text-white">{selectedDest.price}</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="font-sans text-sm font-medium px-8 py-4 rounded-full text-[#1A1A2E] transition-all hover:scale-105" style={{ backgroundColor: "#D4A843" }}>
                    Book This Journey
                  </button>
                  <a href="tel:9860707767" className="font-sans text-sm px-8 py-4 rounded-full text-white border border-white/30 hover:bg-white/10 transition-all">
                    Call 9860707767
                  </a>
                </div>
              </div>

              <button
                className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all"
                onClick={() => setSelectedId(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
