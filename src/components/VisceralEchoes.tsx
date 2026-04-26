"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The silence at Om Parvat wasn't just quiet; it was a frequency.",
    author: "Aryan V.",
    location: "Kailash Yatra, 2024",
    color: "#B8860B",
  },
  {
    quote: "Ladakh with Parikrama felt like a high-end cinematic voyage.",
    author: "Sasha K.",
    location: "Ladakh, 2023",
    color: "#1A8A7D",
  },
  {
    quote: "The logistics were invisible, the stays were elite.",
    author: "Rohan M.",
    location: "Kerala, 2024",
    color: "#E07A5F",
  },
];

export default function VisceralEchoes() {
  return (
    <section id="testimonials" className="py-32 px-4 md:px-8" style={{ backgroundColor: "#1A1A2E" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block font-sans text-xs uppercase tracking-[0.5em] mb-4 py-1.5 px-5 rounded-full"
            style={{ color: "#D4A843", backgroundColor: "rgba(212,168,67,0.1)" }}
          >
            Traveler Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-serif text-5xl md:text-7xl text-white tracking-tight"
          >
            Visceral Echoes
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-10 rounded-2xl group hover:-translate-y-2 transition-all duration-500"
              style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {/* Decorative quote mark */}
              <div className="font-serif text-8xl leading-none mb-4" style={{ color: t.color, opacity: 0.3 }}>&quot;</div>

              <p className="font-serif text-xl md:text-2xl text-white/90 leading-snug mb-8">
                {t.quote}
              </p>

              <div className="flex items-center gap-4">
                {/* Avatar dot */}
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-sans text-sm font-bold" style={{ backgroundColor: t.color }}>
                  {t.author[0]}
                </div>
                <div>
                  <div className="font-sans text-sm font-semibold text-white">{t.author}</div>
                  <div className="font-sans text-xs text-white/40">{t.location}</div>
                </div>
              </div>

              {/* Hover glow */}
              <div
                className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ border: `1px solid ${t.color}40` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-10 rounded-2xl"
          style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
        >
          {[
            { value: "15+", label: "Years of Experience" },
            { value: "13+", label: "Signature Routes" },
            { value: "5000+", label: "Happy Travelers" },
            { value: "Pan India", label: "Operations" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-serif text-3xl md:text-4xl mb-2" style={{ color: "#D4A843" }}>{stat.value}</div>
              <div className="font-sans text-xs uppercase tracking-[0.2em] text-white/40">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
