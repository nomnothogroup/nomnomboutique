import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  stock: number;
  drop_name: string;
  is_active: boolean;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="group"
        >
          <Link href={`/product/${product.id}`}>
            {/* Product Image */}
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-900 mb-4">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Placeholder for product image */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-32 h-32 bg-white/5 rounded-lg" />
              </div>

              {/* Stock indicator */}
              {product.stock <= 10 && (
                <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 text-xs tracking-widest uppercase">
                  Limited
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-2">
              <h3 className="text-lg tracking-wide font-light">
                {product.name}
              </h3>
              <p className="text-gray-400 text-sm">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg tracking-wide">
                  ${product.price.toFixed(2)}
                </span>
                {product.stock <= 5 && (
                  <span className="text-xs text-red-400 tracking-widest uppercase">
                    {product.stock} left
                  </span>
                )}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
