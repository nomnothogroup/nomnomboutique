"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Sample product data - replace with Supabase fetch
const sampleProduct = {
  id: "1",
  name: "ORIGINS TEE",
  description: "Premium cotton tee with exclusive ORIGINS: RECODED design. Crafted from 100% organic cotton with a relaxed fit and minimal aesthetic.",
  price: 120.00,
  category: "tops",
  images: ["/api/placeholder/600/800", "/api/placeholder/600/800"],
  stock: 25,
  drop_name: "ORIGINS: RECODED",
  is_active: true,
};

const sizes = ["S", "M", "L", "XL"];

export default function ProductPage({ params }: { params: { id: string } }) {
  // In real implementation, fetch product from Supabase
  const product = sampleProduct;

  if (!product) {
    notFound();
  }

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

      {/* Product Content */}
      <main className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Image */}
            <div className="aspect-[3/4] bg-gray-900 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-48 h-64 bg-white/5 rounded-lg" />
              </div>
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-2 gap-4">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-[3/4] bg-gray-900 overflow-hidden cursor-pointer">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-24 h-32 bg-white/5 rounded-lg" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Product Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-light tracking-widest mb-4">
                {product.name}
              </h1>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                {product.description}
              </p>
              <div className="text-3xl tracking-wide mb-2">
                ${product.price.toFixed(2)}
              </div>
              
              {/* Stock Info */}
              <div className="flex items-center space-x-4 text-sm">
                {product.stock <= 10 ? (
                  <>
                    <span className="text-red-400 tracking-widest uppercase">
                      Limited pieces remaining
                    </span>
                    <span className="text-gray-500">
                      ({product.stock} left)
                    </span>
                  </>
                ) : (
                  <span className="text-green-400 tracking-widest uppercase">
                    In Stock
                  </span>
                )}
              </div>
            </div>

            {/* Size Selector */}
            <div>
              <h3 className="text-sm tracking-widest uppercase mb-4">Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className="py-3 px-4 border border-white/20 hover:border-white hover:bg-white/5 transition-all duration-200 text-sm tracking-widest uppercase"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <motion.button
              className="w-full py-4 bg-white text-black hover:bg-gray-200 transition-colors duration-300 tracking-widest text-sm uppercase"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Add to Cart
            </motion.button>

            {/* Product Details */}
            <div className="border-t border-white/10 pt-8 space-y-4 text-sm text-gray-400">
              <div>
                <span className="tracking-widest uppercase">Drop:</span>
                <span className="ml-2">{product.drop_name}</span>
              </div>
              <div>
                <span className="tracking-widest uppercase">Category:</span>
                <span className="ml-2">{product.category}</span>
              </div>
              <div>
                <span className="tracking-widest uppercase">Material:</span>
                <span className="ml-2">100% Organic Cotton</span>
              </div>
              <div>
                <span className="tracking-widest uppercase">Care:</span>
                <span className="ml-2">Machine wash cold, tumble dry low</span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
