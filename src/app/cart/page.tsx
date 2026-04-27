"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";

export default function CartPage() {
  const { items, total, removeItem, updateQuantity, clearCart } = useCart();

  if (items.length === 0) {
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
                  className="text-sm tracking-widest uppercase text-white"
                >
                  Cart
                </Link>
              </nav>
            </div>
          </div>
        </motion.header>

        {/* Empty Cart */}
        <main className="max-w-4xl mx-auto px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-light tracking-widest mb-8">
              Your Cart
            </h1>
            <p className="text-gray-400 mb-8">
              Your cart is empty
            </p>
            <Link 
              href="/store"
              className="inline-block px-12 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 tracking-widest text-sm uppercase"
            >
              Continue Shopping
            </Link>
          </motion.div>
        </main>
      </div>
    );
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
                className="text-sm tracking-widest uppercase text-white"
              >
                Cart
              </Link>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Cart Content */}
      <main className="max-w-7xl mx-auto px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-light tracking-widest mb-12">
            Your Cart
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-8">
              {items.map((item, index) => (
                <motion.div
                  key={`${item.id}-${item.size}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-6 pb-8 border-b border-white/10"
                >
                  {/* Product Image */}
                  <div className="w-24 h-32 bg-gray-900 rounded-lg flex items-center justify-center">
                    <div className="w-16 h-20 bg-white/5 rounded" />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className="text-lg tracking-wide font-light mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">
                      Size: {item.size}
                    </p>
                    <p className="text-lg tracking-wide">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-white/20">
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                        className="px-3 py-2 hover:bg-white/5 transition-colors"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 text-center min-w-[3rem]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                        className="px-3 py-2 hover:bg-white/5 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id, item.size)}
                      className="text-gray-400 hover:text-red-400 transition-colors text-sm tracking-widest uppercase"
                    >
                      Remove
                    </button>
                  </div>
                </motion.div>
              ))}

              {/* Clear Cart */}
              <button
                onClick={clearCart}
                className="text-gray-400 hover:text-red-400 transition-colors text-sm tracking-widest uppercase"
              >
                Clear Cart
              </button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gray-900 p-8 space-y-6"
              >
                <h2 className="text-xl tracking-widest uppercase">
                  Order Summary
                </h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex justify-between text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="block w-full py-4 bg-white text-black hover:bg-gray-200 transition-colors duration-300 tracking-widest text-sm uppercase text-center"
                >
                  Proceed to Checkout
                </Link>

                <Link
                  href="/store"
                  className="block w-full py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 tracking-widest text-sm uppercase text-center"
                >
                  Continue Shopping
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
