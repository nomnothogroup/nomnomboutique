"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <motion.div 
        className="relative min-h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        
        {/* Editorial background placeholder */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>

        {/* Content */}
        <motion.div 
          className="relative z-10 text-center px-8 max-w-4xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Brand Name */}
          <motion.h1 
            className="text-6xl md:text-8xl font-light tracking-widest mb-8"
            style={{ letterSpacing: "0.3em" }}
          >
            NOMA
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            className="text-lg md:text-xl text-gray-400 mb-12 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A study of identity in motion.
          </motion.p>

          {/* Drop Label */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <p className="text-sm tracking-widest text-gray-500 uppercase">
              ORIGINS: RECODED
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Link 
              href="/store"
              className="inline-block px-12 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 tracking-widest text-sm uppercase"
            >
              Enter Store
            </Link>
          </motion.div>
        </motion.div>

        {/* Subtle animated elements */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-px h-16 bg-white/20" />
        </motion.div>
      </motion.div>
    </div>
  );
}
