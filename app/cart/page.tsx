"use client";

import Link from "next/link";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CartItemRow from "@/components/CartItemRow";
import OrderSummary from "@/components/OrderSummary";

function getItemCountLabel(count: number): string {
  if (count === 0) return "Your cart is empty";
  if (count === 1) return "1 item in your cart";
  return count.toString() + " items in your cart";
}

export default function CartPage() {
  const { items } = useCart();
  const totalQty = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>
        </div>

        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Shopping Cart</h1>
        <p className="text-slate-500 mb-10">{getItemCountLabel(totalQty)}</p>

        {items.length === 0 ? (
          <div className="text-center py-24">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-indigo-50 rounded-full mb-6">
              <ShoppingCart className="w-12 h-12 text-indigo-300" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Your cart is empty</h2>
            <p className="text-slate-500 mb-8 max-w-sm mx-auto">
              Looks like you have not added anything yet. Browse our collection and find something you love.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-2">Cart Items</h2>
                <div>
                  {items.map((item) => (
                    <CartItemRow key={item.product.id} item={item} />
                  ))}
                </div>
              </div>

              <div className="mt-4 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">Promo Code</h3>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Enter promo code"
                    className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400"
                  />
                  <button className="bg-slate-900 hover:bg-slate-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors">
                    Apply
                  </button>
                </div>
              </div>
            </div>

            <div>
              <OrderSummary />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
