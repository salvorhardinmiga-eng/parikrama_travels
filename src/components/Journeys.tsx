"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronRight, ChevronLeft, Quote } from "lucide-react";
import { spiritual, adventure, leisure, Journey } from "@/data/trips";
import { assetPath } from "@/lib/assets";

/* ─── Integrated Category Section ────────────────── */
function CategorySection({ label, title, subtitle, journeys, accent }: { label: string; title: string; subtitle: string; journeys: Journey[]; accent: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % journeys.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [journeys.length]);

  const next = () => setIndex((prev) => (prev + 1) % journeys.length);
  const prev = () => setIndex((prev) => (prev - 1 + journeys.length) % journeys.length);

  const j = journeys[index];

  return (
    <section className="relative w-full overflow-hidden flex flex-col bg-[#FAF9F6] mb-32">
      {/* Header Part - Compactified */}
      <div className="max-w-[1400px] mx-auto w-full px-8 md:px-16 pt-16 pb-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-7">
          <span className="inline-block font-mono text-[10px] uppercase tracking-[0.6em] mb-4 text-gray-400">
            {label}
          </span>
          <h2 className="font-serif text-7xl md:text-9xl tracking-[-0.05em] font-light leading-none text-[#111]">
            {title}
          </h2>
        </div>
        <div className="md:col-span-5">
          <p className="font-sans text-sm md:text-base text-gray-500 leading-relaxed max-w-sm">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Slider Part - With Side Margins */}
      <div className="mx-8 md:mx-16 relative h-[65vh] md:h-[80vh] overflow-hidden rounded-[40px] bg-gray-900 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div 
            key={j.title}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image 
              src={assetPath(j.image)} 
              alt={j.title} 
              fill 
              className="object-cover opacity-60"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Content Layout */}
        <div className="relative z-10 w-full h-full p-10 md:p-20 flex flex-col justify-between">
          <div>
            <motion.div
              key={`${j.title}-top`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] font-bold" style={{ color: accent }}>
                FEATURED DESTINATION
              </span>
            </motion.div>
          </div>

          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={j.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 
                  className="font-serif text-6xl md:text-9xl tracking-[-0.05em] text-white font-light leading-none mb-8"
                  style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
                >
                  {j.title}
                </h3>
                <p 
                  className="font-sans text-lg md:text-xl text-white/70 max-w-xl leading-relaxed"
                  style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
                >
                  {j.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-end justify-between">
            <div className="flex gap-16">
              <div>
                <div className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/30 mb-2">DURATION</div>
                <div className="font-serif text-2xl text-white font-light">{j.duration}</div>
              </div>
              <div>
                <div className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/30 mb-2">STARTING PRICE</div>
                <div className="font-serif text-2xl font-light" style={{ color: accent }}>{j.price}</div>
              </div>
            </div>

            <div className="flex gap-4">
              <button onClick={prev} className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all backdrop-blur-sm">
                <ChevronLeft size={24} />
              </button>
              <button onClick={next} className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all backdrop-blur-sm">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-0 left-0 h-1 bg-white/10 w-full">
          <motion.div 
            key={index}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 6, ease: "linear" }}
            className="h-full"
            style={{ backgroundColor: accent }}
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Main Export ─────────────────────────────────── */
export default function Journeys() {
  return (
    <div id="journeys" className="relative z-10 bg-[#FAF9F6]">
      <CategorySection 
        label="Faith & Peace" 
        title="Spiritual" 
        journeys={spiritual} 
        accent="#8B7355"
        subtitle="Visit holy places and find peace in the beautiful Himalayan mountains."
      />
      
      <CategorySection 
        label="Explore & Thrill" 
        title="Adventure" 
        journeys={adventure} 
        accent="#8B7355"
        subtitle="Explore the high mountains and hidden valleys of the North for an unforgettable experience."
      />

      <CategorySection 
        label="Relax & Enjoy" 
        title="Leisure" 
        journeys={leisure} 
        accent="#8B7355"
        subtitle="Enjoy comfortable stays and beautiful views in Kerala, Goa, and other peaceful places."
      />

      {/* ── Testimonies Section (2 Only, at the end) ── */}
      <section id="voices" className="px-8 md:px-24 py-32 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <span className="inline-block font-mono text-[10px] uppercase tracking-[0.6em] mb-16 text-[#8B7355]">
            Voyager Voices
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div className="relative">
              <Quote className="absolute -top-8 -left-8 text-gray-100 w-24 h-24 -z-0" />
              <div className="relative z-10">
                <p className="font-serif text-3xl md:text-4xl italic text-[#111] leading-tight tracking-[-0.03em] mb-8">
                  &ldquo;The silence in the Spiti Valley wasn&apos;t just quiet; it was a frequency. Parikrama curated a journey that felt more like an awakening than a trip.&rdquo;
                </p>
                <div className="font-mono text-[11px] uppercase tracking-[0.4em] text-gray-400">
                  Aditya R. // Spiti Expedition, 2024
                </div>
              </div>
            </div>
            <div className="relative">
              <Quote className="absolute -top-8 -left-8 text-gray-100 w-24 h-24 -z-0" />
              <div className="relative z-10">
                <p className="font-serif text-3xl md:text-4xl italic text-[#111] leading-tight tracking-[-0.03em] mb-8">
                  &ldquo;From the first call to the final descent, the attention to detail was flawless. They don&apos;t just show you India; they let you feel its soul.&rdquo;
                </p>
                <div className="font-mono text-[11px] uppercase tracking-[0.4em] text-gray-400">
                  Sarah M. // Spiritual Circuit, 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="px-10 py-32 max-w-[1400px] mx-auto bg-[#FAF9F6] border-t border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { val: "15+", label: "Years Experience" },
            { val: "13+", label: "Main Routes" },
            { val: "5k+", label: "Happy Travelers" },
            { val: "All India", label: "Operations" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-serif text-6xl md:text-8xl tracking-[-0.05em] mb-2 text-[#111] font-light">{s.val}</div>
              <div className="font-mono text-[9px] uppercase tracking-[0.4em] text-gray-400 font-bold">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
