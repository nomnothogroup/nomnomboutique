"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import ProductGrid from "@/components/ProductGrid";

// Sample data for development - replace with real Supabase data
const sampleProducts = [
  {
    id: "1",
    name: "ORIGINS TEE",
    description: "Premium cotton tee with exclusive ORIGINS: RECODED design",
    price: 120.00,
    category: "tops",
    images: ["/api/placeholder/400/500"],
    stock: 25,
    drop_name: "ORIGINS: RECODED",
    is_active: true,
  },
  {
    id: "2", 
    name: "MOTION PANT",
    description: "Tailored trousers with modern silhouette",
    price: 280.00,
    category: "bottoms",
    images: ["/api/placeholder/400/500"],
    stock: 15,
    drop_name: "ORIGINS: RECODED",
    is_active: true,
  },
  {
    id: "3",
    name: "IDENTITY HOODIE",
    description: "Heavyweight hoodie with minimal branding",
    price: 220.00,
    category: "outerwear",
    images: ["/api/placeholder/400/500"],
    stock: 30,
    drop_name: "ORIGINS: RECODED",
    is_active: true,
  },
  {
    id: "4",
    name: "RECODED CAP",
    description: "Structured cap with embroidered logo",
    price: 65.00,
    category: "accessories",
    images: ["/api/placeholder/400/500"],
    stock: 50,
    drop_name: "ORIGINS: RECODED",
    is_active: true,
  }
];

export default function StorePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <motion.header 
        className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-light tracking-widest">
              NOMA
            </Link>
            <nav className="flex items-center space-x-8">
              <Link 
                href="/store" 
                className="text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors"
              >
                Store
              </Link>
              <Link 
                href="/cart" 
                className="text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors"
              >
                Cart
              </Link>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Store Content */}
      <main className="max-w-7xl mx-auto px-8 py-16">
        {/* Collection Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-light tracking-widest mb-4">
            ORIGINS: RECODED
          </h1>
          <p className="text-gray-400 tracking-wide">
            Limited pieces from our latest drop
          </p>
        </motion.div>

        {/* Product Grid */}
        <ProductGrid products={sampleProducts} />
      </main>
    </div>
  );
}
