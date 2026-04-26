"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight } from "lucide-react";
import { allTrips, Journey } from "@/data/trips";
import Image from "next/image";

export default function SearchOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Journey[]>([]);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    };
    window.addEventListener("open-search", handleOpen);
    return () => window.removeEventListener("open-search", handleOpen);
  }, []);

  const close = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
    setQuery("");
  };

  useEffect(() => {
    if (query.trim().length > 0) {
      const filtered = allTrips.filter(t => 
        t.title.toLowerCase().includes(query.toLowerCase()) || 
        t.subtitle.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-white flex flex-col"
        >
          {/* Header */}
          <div className="w-full px-8 md:px-16 py-8 flex items-center justify-between border-b border-gray-100">
             <span className="font-serif text-2xl tracking-[0.4em] font-light text-[#111]">
              PARIKRAMA
            </span>
            <button onClick={close} className="p-4 rounded-full hover:bg-gray-100 transition-colors">
              <X size={24} className="text-gray-900" />
            </button>
          </div>

          {/* Search Input Area */}
          <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 py-12 md:py-24">
            <div className="relative mb-16">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 w-12 h-12" />
              <input 
                autoFocus
                type="text" 
                placeholder="Search destinations, experiences, or trips..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent border-b-2 border-gray-100 py-10 pl-20 text-4xl md:text-6xl font-serif font-light outline-none focus:border-[#8B7355] transition-all placeholder:text-gray-200"
              />
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 overflow-y-auto max-h-[50vh] pr-4 custom-scrollbar">
              <AnimatePresence>
                {results.map((trip, i) => (
                  <motion.div
                    key={trip.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6">
                      <Image 
                        src={trip.image} 
                        alt={trip.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-serif text-2xl font-light mb-2 text-[#111]">{trip.title}</h4>
                        <p className="font-sans text-xs text-gray-400 uppercase tracking-widest">{trip.duration} // {trip.price}</p>
                      </div>
                      <ArrowRight size={20} className="text-gray-300 group-hover:text-[#8B7355] transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {query.length > 0 && results.length === 0 && (
                <div className="col-span-full py-20 text-center">
                  <p className="font-serif text-2xl text-gray-400 italic">No destinations found matching &ldquo;{query}&rdquo;</p>
                </div>
              )}

              {query.length === 0 && (
                <div className="col-span-full py-10">
                  <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-gray-300 mb-8">Popular Searches</p>
                  <div className="flex flex-wrap gap-4">
                    {["Kailash", "Manali", "Kerala", "Ladakh", "Spiti"].map(s => (
                      <button 
                        key={s} 
                        onClick={() => setQuery(s)}
                        className="px-6 py-3 rounded-full border border-gray-100 font-sans text-sm hover:border-[#8B7355] hover:text-[#8B7355] transition-all"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
