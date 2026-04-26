"use client";
import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const blurIn = {
  hidden: { opacity: 0, filter: "blur(20px)" },
  visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Footer() {
  return (
    <footer id="connect" style={{ backgroundColor: "#FAF9F6" }}>
      {/* ── CTA Block ──────────────── */}
      <motion.div variants={blurIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="mx-6 md:mx-16 max-w-[1400px] lg:mx-auto p-16 md:p-28 rounded-3xl relative overflow-hidden text-center"
        style={{ backgroundColor: "#1A1A2E" }}>
        {/* Glow spots */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-15 pointer-events-none" style={{ background: "radial-gradient(circle, #C8A35F 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[130px] opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #2D9B8A 0%, transparent 70%)" }} />

        <div className="relative z-10">
          <span className="inline-block font-mono text-[10px] uppercase tracking-[0.6em] mb-8 px-5 py-2 rounded-full" style={{ color: "#C8A35F", backgroundColor: "rgba(200,163,95,0.1)" }}>
            Get in Touch
          </span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-[-0.05em] font-light mb-8 leading-[0.9]">
            Plan Your Next Trip
          </h2>
          <p className="font-sans text-sm md:text-base text-white/40 max-w-lg mx-auto leading-[1.9] mb-14">
            Contact us today to start planning your perfect trip. We are here to help you explore India in the best way possible.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a href="tel:9860707767" className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] px-10 py-5 rounded-full text-[#1A1A2E] hover:scale-[1.03] transition-transform duration-500 shadow-lg shadow-[#C8A35F]/20" style={{ backgroundColor: "#C8A35F" }}>
              <Phone size={14} /> Call 9860707767
            </a>
            <a href="#journeys" className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] px-10 py-5 rounded-full text-white border border-white/15 hover:bg-white/5 transition-all duration-500">
              View All Journeys <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* ── Info Grid ──────────────── */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-24 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Brand */}
        <div className="md:col-span-5">
          <Image 
            src="/logo.png" 
            alt="Parikrama Experiences" 
            width={200}
            height={80}
            className="h-16 w-auto mb-10 block"
            style={{ objectFit: 'contain' }}
          />
          <h3 className="font-serif text-4xl md:text-5xl tracking-[-0.05em] font-light mb-6" style={{ color: "#1A1A2E" }}>
            Parikrama Experiences
          </h3>
          <p className="font-sans text-sm leading-[1.9] mb-8" style={{ color: "#6B6B80" }}>
            A travel company based from Himachal Pradesh, offering incredible curated experiences since 2010. We operate Pan India, with major focus on Himalayan destinations. Shimla, Manali, Dharamshala, Dalhousie, Chamba, Lahaul and Spiti, Ladakh, Valley of Flowers, Char Dham Yatra, Adi Kailash, Kailash Mansarovar, Goa, Kerala, Andamans, Sikkim, Darjeeling, Assam and many more.
          </p>
        </div>

        <div className="md:col-span-1" /> {/* Gutter */}

        {/* Contact */}
        <div className="md:col-span-3">
          <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] mb-8 font-semibold" style={{ color: "#C8A35F" }}>Contact</h4>
          <div className="space-y-6">
            <a href="tel:9860707767" className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(200,163,95,0.08)" }}>
                <Phone size={15} style={{ color: "#C8A35F" }} />
              </div>
              <div>
                <div className="font-mono text-[9px] uppercase tracking-[0.3em] mb-0.5" style={{ color: "#A0A0B0" }}>Direct Line</div>
                <div className="font-sans text-sm font-medium group-hover:underline" style={{ color: "#1A1A2E" }}>9860707767</div>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(45,155,138,0.08)" }}>
                <MapPin size={15} style={{ color: "#2D9B8A" }} />
              </div>
              <div>
                <div className="font-mono text-[9px] uppercase tracking-[0.3em] mb-0.5" style={{ color: "#A0A0B0" }}>Base</div>
                <div className="font-sans text-sm font-medium" style={{ color: "#1A1A2E" }}>Himachal Pradesh, India</div>
              </div>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="md:col-span-3">
          <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] mb-8 font-semibold" style={{ color: "#C8A35F" }}>Explore</h4>
          <div className="space-y-4">
            {["Himalayan Treks", "Spiritual Circuits", "Beach Retreats", "Valley Explorations"].map((link) => (
              <a key={link} href="#journeys" className="flex items-center gap-2 font-sans text-sm group" style={{ color: "#6B6B80" }}>
                <span className="group-hover:underline">{link}</span>
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ─────────────── */}
      <div className="border-t mx-8 md:mx-16 py-8 flex flex-wrap items-center justify-between gap-4" style={{ borderColor: "rgba(26,26,46,0.06)" }}>
        <span className="font-mono text-[9px] tracking-[0.2em]" style={{ color: "#A0A0B0" }}>
          &copy; 2010 &ndash; 2026 Parikrama Experiences
        </span>
        <span className="font-mono text-[9px] tracking-[0.2em]" style={{ color: "#A0A0B0" }}>
          Crafted from Himachal Pradesh with intention
        </span>
      </div>
    </footer>
  );
}
