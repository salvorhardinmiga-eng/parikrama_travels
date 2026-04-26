"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Search } from "lucide-react";
import { assetPath } from "@/lib/assets";

export default function Hero() {
  const openSearch = () => {
    window.dispatchEvent(new Event("open-search"));
  };

  return (
    <div className="relative flex flex-col w-full">
      {/* 1. Solid White Header Bar - AS REQUESTED - Non-overlapping */}
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-1 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Image 
              src={assetPath("/logo.png")} 
              alt="Parikrama Experiences" 
              width={200}
              height={80}
              className="h-16 md:h-22 w-auto block cursor-pointer"
              style={{ objectFit: 'contain' }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          </div>

          {/* Right: Nav Links & Search - Integrated into the White Top Bar */}
          <nav className="flex items-center gap-6 md:gap-10">
            <div className="hidden md:flex items-center gap-8">
              {["TRIPS", "VOICES", "CONTACT"].map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#111] hover:text-[#8B7355] transition-colors duration-300 no-underline"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Search Option - Now in the White Top Bar */}
            <button 
              onClick={openSearch}
              className="flex items-center gap-3 px-5 py-2.5 bg-gray-50 border border-gray-100 rounded-full text-[#111] hover:bg-gray-100 transition-all group"
            >
              <Search size={16} className="text-gray-400 group-hover:text-[#111]" />
              <span className="hidden sm:inline font-sans text-[10px] font-bold tracking-[0.15em] text-gray-500 group-hover:text-[#111] uppercase">Search Trips</span>
            </button>

            <a 
              href="tel:9860707767" 
              className="hidden sm:block bg-[#111] text-white font-sans text-[10px] font-bold tracking-[0.2em] px-8 py-3.5 rounded-full hover:bg-[#8B7355] transition-all no-underline"
            >
              INQUIRE
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section - Perfectly geometric, Clean copy */}
      <section className="relative w-full h-[85vh] flex flex-col items-center justify-center text-center bg-[#FAF9F6] overflow-hidden">
        {/* Clean Background Image - NO OVERLAYS, NO FILTHY WHITE CAST */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={assetPath("/hero.png")} 
            alt="Beautiful Himalayan landscape" 
            fill 
            className="object-cover"
            priority
          />
          {/* Subtle contrast overlay only for text legibility */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content - Focused & Simple */}
        <div className="relative z-10 px-10 max-w-6xl w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-10 w-full"
          >
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[110px] text-white font-light leading-[1] tracking-[-0.05em]">
              Handpicked Trips<br />To Beautiful Places
            </h1>

            <p className="font-sans text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
              Explore the sacred peaks of Kailash, the deserts of Spiti, or the backwaters of Kerala with expertly curated journeys.
            </p>

            <div className="mt-6">
              <a 
                href="#journeys" 
                className="font-sans text-[11px] font-bold uppercase tracking-[0.4em] text-white/60 hover:text-white transition-colors flex items-center gap-2 no-underline"
              >
                <span>EXPLORE ALL JOURNEYS</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
