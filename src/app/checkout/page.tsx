"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light tracking-widest mb-8">
            No items in cart
          </h1>
          <Link 
            href="/store"
            className="inline-block px-12 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 tracking-widest text-sm uppercase"
          >
            Return to Store
          </Link>
        </div>
      </div>
    );
  }

  if (isComplete) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto px-8"
        >
          <h1 className="text-4xl font-light tracking-widest mb-8">
            Order Confirmed
          </h1>
          <p className="text-gray-400 mb-12">
            Thank you for your order. You will receive a confirmation email shortly.
          </p>
          <Link 
            href="/"
            className="inline-block px-12 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 tracking-widest text-sm uppercase"
          >
            Return to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real implementation, save order to Supabase here
      const orderData = {
        user_email: formData.email,
        items: items,
        total_price: total,
        status: 'pending' as const,
      };

      console.log('Order submitted:', orderData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsComplete(true);
      clearCart();
    } catch (error) {
      console.error('Error submitting order:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

      {/* Checkout Content */}
      <main className="max-w-7xl mx-auto px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-light tracking-widest mb-12">
            Checkout
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div>
                  <h2 className="text-xl tracking-widest uppercase mb-6">
                    Contact Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm tracking-widest uppercase mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900 border border-white/20 focus:border-white focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm tracking-widest uppercase mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900 border border-white/20 focus:border-white focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div>
                  <h2 className="text-xl tracking-widest uppercase mb-6">
                    Shipping Address
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm tracking-widest uppercase mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900 border border-white/20 focus:border-white focus:outline-none transition-colors"
                        placeholder="123 Main St"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm tracking-widest uppercase mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-900 border border-white/20 focus:border-white focus:outline-none transition-colors"
                          placeholder="New York"
                        />
                      </div>
                      <div>
                        <label className="block text-sm tracking-widest uppercase mb-2">
                          State
                        </label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-900 border border-white/20 focus:border-white focus:outline-none transition-colors"
                          placeholder="NY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm tracking-widest uppercase mb-2">
                          ZIP Code
                        </label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-900 border border-white/20 focus:border-white focus:outline-none transition-colors"
                          placeholder="10001"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm tracking-widest uppercase mb-2">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900 border border-white/20 focus:border-white focus:outline-none transition-colors"
                        placeholder="United States"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex items-center space-x-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-12 py-4 bg-white text-black hover:bg-gray-200 transition-colors duration-300 tracking-widest text-sm uppercase disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Processing...' : 'Complete Order'}
                  </button>
                  <Link
                    href="/cart"
                    className="text-gray-400 hover:text-white transition-colors text-sm tracking-widest uppercase"
                  >
                    Return to Cart
                  </Link>
                </div>
              </form>
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
                
                {/* Order Items */}
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="flex justify-between text-sm">
                      <div>
                        <span className="text-gray-400">{item.name}</span>
                        <span className="text-gray-500 ml-2">
                          Size {item.size} × {item.quantity}
                        </span>
                      </div>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-4 space-y-4">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
