"use client";

import { useState } from "react";
import { products, categories } from "@/lib/products";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2">
              Our Collection
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">
              Featured Products
            </h2>
          </div>
          <CategoryFilter
            categories={categories}
            selected={selectedCategory}
            onChange={setSelectedCategory}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            <p className="text-lg font-medium">No products found in this category.</p>
          </div>
        )}

        {/* Load more */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-indigo-300 text-slate-700 hover:text-indigo-600 font-semibold px-8 py-3 rounded-xl transition-all duration-200 hover:shadow-md">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
}
