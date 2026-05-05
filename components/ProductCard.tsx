"use client";

import { useState } from "react";
import { ShoppingCart, Star, Check } from "lucide-react";
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

function StarRating({ rating }: { rating: number }) {
  const rounded = Math.round(rating);
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={star <= rounded ? "w-3.5 h-3.5 text-amber-400 fill-amber-400" : "w-3.5 h-3.5 text-slate-200 fill-slate-200"}
        />
      ))}
    </div>
  );
}

function getBadgeClass(badge: string): string {
  if (badge === "Sale") return "absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full bg-red-500 text-white";
  if (badge === "New") return "absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-600 text-white";
  return "absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full bg-amber-400 text-slate-900";
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative overflow-hidden aspect-square bg-slate-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span className={getBadgeClass(product.badge)}>
            {product.badge}
          </span>
        )}
        {discount && (
          <span className="absolute top-3 right-3 text-xs font-bold bg-amber-400 text-slate-900 px-2 py-1 rounded-full">
            -{discount}%
          </span>
        )}
      </div>

      <div className="p-4">
        <p className="text-xs font-medium text-indigo-600 uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h3 className="text-sm font-semibold text-slate-900 leading-snug mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={product.rating} />
          <span className="text-xs text-slate-500">
            {product.rating} ({product.reviewCount.toLocaleString()})
          </span>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-slate-900">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-slate-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {added ? (
          <button
            onClick={handleAddToCart}
            className="mt-3 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 bg-green-500 text-white"
          >
            <Check className="w-4 h-4" />
            Added!
          </button>
        ) : (
          <button
            onClick={handleAddToCart}
            className="mt-3 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 bg-indigo-600 hover:bg-indigo-500 text-white hover:shadow-md"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
