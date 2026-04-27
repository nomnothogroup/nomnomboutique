"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

// Sample data - replace with real Supabase data
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
  }
];

const sampleOrders = [
  {
    id: "1",
    user_email: "customer@example.com",
    items: [
      {
        id: "1",
        name: "ORIGINS TEE",
        price: 120.00,
        quantity: 1,
        size: "M"
      }
    ],
    total_price: 120.00,
    status: "pending",
    created_at: "2024-01-15T10:30:00Z",
  },
  {
    id: "2",
    user_email: "another@example.com",
    items: [
      {
        id: "2",
        name: "MOTION PANT",
        price: 280.00,
        quantity: 1,
        size: "L"
      }
    ],
    total_price: 280.00,
    status: "paid",
    created_at: "2024-01-14T15:45:00Z",
  }
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'products' | 'orders'>('products');
  const [products, setProducts] = useState(sampleProducts);
  const [orders, setOrders] = useState(sampleOrders);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);

  const handleAddProduct = async (productData: any) => {
    try {
      // In real implementation, save to Supabase
      const newProduct = {
        ...productData,
        id: Date.now().toString(),
        is_active: true,
      };
      setProducts([...products, newProduct]);
      setShowAddProduct(false);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleUpdateProduct = async (productData: any) => {
    try {
      // In real implementation, update in Supabase
      setProducts(products.map(p => p.id === productData.id ? productData : p));
      setEditingProduct(null);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDeleteProduct = async (productId: string) => {
    try {
      // In real implementation, delete from Supabase
      setProducts(products.filter(p => p.id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleUpdateOrderStatus = async (orderId: string, status: string) => {
    try {
      // In real implementation, update in Supabase
      setOrders(orders.map(o => o.id === orderId ? { ...o, status } : o));
    } catch (error) {
      console.error('Error updating order status:', error);
    }
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
            <div className="flex items-center space-x-8">
              <Link 
                href="/store" 
                className="text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors"
              >
                Store
              </Link>
              <span className="text-sm tracking-widest uppercase text-white">
                Admin
              </span>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Admin Content */}
      <main className="max-w-7xl mx-auto px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-light tracking-widest mb-12">
            Admin Panel
          </h1>

          {/* Tab Navigation */}
          <div className="flex space-x-8 mb-8 border-b border-white/10">
            <button
              onClick={() => setActiveTab('products')}
              className={`pb-4 text-sm tracking-widest uppercase transition-colors ${
                activeTab === 'products' 
                  ? 'text-white border-b-2 border-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`pb-4 text-sm tracking-widest uppercase transition-colors ${
                activeTab === 'orders' 
                  ? 'text-white border-b-2 border-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Orders
            </button>
          </div>

          {/* Products Tab */}
          {activeTab === 'products' && (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl tracking-widest">Products</h2>
                <button
                  onClick={() => setShowAddProduct(true)}
                  className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 tracking-widest text-sm uppercase"
                >
                  Add Product
                </button>
              </div>

              {/* Products Table */}
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left p-4 text-sm tracking-widest uppercase">Name</th>
                        <th className="text-left p-4 text-sm tracking-widest uppercase">Category</th>
                        <th className="text-left p-4 text-sm tracking-widest uppercase">Price</th>
                        <th className="text-left p-4 text-sm tracking-widest uppercase">Stock</th>
                        <th className="text-left p-4 text-sm tracking-widest uppercase">Status</th>
                        <th className="text-left p-4 text-sm tracking-widest uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.id} className="border-b border-white/5">
                          <td className="p-4">{product.name}</td>
                          <td className="p-4 text-gray-400">{product.category}</td>
                          <td className="p-4">${product.price.toFixed(2)}</td>
                          <td className="p-4 text-gray-400">{product.stock}</td>
                          <td className="p-4">
                            <span className={`px-2 py-1 text-xs tracking-widest uppercase ${
                              product.is_active 
                                ? 'bg-green-900 text-green-300' 
                                : 'bg-red-900 text-red-300'
                            }`}>
                              {product.is_active ? 'Active' : 'Inactive'}
                            </span>
                          </td>
                          <td className="p-4">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => setEditingProduct(product)}
                                className="text-blue-400 hover:text-blue-300 text-sm tracking-widest uppercase"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteProduct(product.id)}
                                className="text-red-400 hover:text-red-300 text-sm tracking-widest uppercase"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <div className="space-y-8">
              <h2 className="text-2xl tracking-widest">Orders</h2>

              {/* Orders Table */}
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left p-4 text-sm tracking-widest uppercase">Order ID</th>
                        <th className="text-left p-4 text-sm tracking-widest uppercase">Email</th>
                        <th className="text-left p-4 text-sm tracking-widest uppercase">Total</th>
                        <th className="text-left p-4 text-sm tracking-widest uppercase">Status</th>
                        <th className="text-left p-4 text-sm tracking-widest uppercase">Date</th>
                        <th className="text-left p-4 text-sm tracking-widest uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => (
                        <tr key={order.id} className="border-b border-white/5">
                          <td className="p-4">#{order.id.slice(-8)}</td>
                          <td className="p-4 text-gray-400">{order.user_email}</td>
                          <td className="p-4">${order.total_price.toFixed(2)}</td>
                          <td className="p-4">
                            <select
                              value={order.status}
                              onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value)}
                              className="bg-black border border-white/20 px-2 py-1 text-sm"
                            >
                              <option value="pending">Pending</option>
                              <option value="paid">Paid</option>
                              <option value="shipped">Shipped</option>
                            </select>
                          </td>
                          <td className="p-4 text-gray-400">
                            {new Date(order.created_at).toLocaleDateString()}
                          </td>
                          <td className="p-4">
                            <button className="text-blue-400 hover:text-blue-300 text-sm tracking-widest uppercase">
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </main>

      {/* Add/Edit Product Modal */}
      {(showAddProduct || editingProduct) && (
        <ProductForm
          product={editingProduct}
          onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct}
          onCancel={() => {
            setShowAddProduct(false);
            setEditingProduct(null);
          }}
        />
      )}
    </div>
  );
}

// Product Form Component
function ProductForm({ product, onSubmit, onCancel }: any) {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    description: product?.description || '',
    price: product?.price || '',
    category: product?.category || '',
    stock: product?.stock || '',
    drop_name: product?.drop_name || 'ORIGINS: RECODED',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
      images: product?.images || [],
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center p-8 z-50"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="bg-gray-900 p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <h2 className="text-2xl tracking-widest mb-8">
          {product ? 'Edit Product' : 'Add Product'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
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
              className="w-full px-4 py-3 bg-black border border-white/20 focus:border-white focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm tracking-widest uppercase mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-4 py-3 bg-black border border-white/20 focus:border-white focus:outline-none transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm tracking-widest uppercase mb-2">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                step="0.01"
                min="0"
                className="w-full px-4 py-3 bg-black border border-white/20 focus:border-white focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm tracking-widest uppercase mb-2">
                Stock
              </label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                required
                min="0"
                className="w-full px-4 py-3 bg-black border border-white/20 focus:border-white focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm tracking-widest uppercase mb-2">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black border border-white/20 focus:border-white focus:outline-none transition-colors"
            >
              <option value="">Select category</option>
              <option value="tops">Tops</option>
              <option value="bottoms">Bottoms</option>
              <option value="outerwear">Outerwear</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>

          <div>
            <label className="block text-sm tracking-widest uppercase mb-2">
              Drop Name
            </label>
            <input
              type="text"
              name="drop_name"
              value={formData.drop_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black border border-white/20 focus:border-white focus:outline-none transition-colors"
            />
          </div>

          <div className="flex space-x-6">
            <button
              type="submit"
              className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors duration-300 tracking-widest text-sm uppercase"
            >
              {product ? 'Update' : 'Add'} Product
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 tracking-widest text-sm uppercase"
            >
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
