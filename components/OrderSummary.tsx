"use client";

import { ArrowRight, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function OrderSummary() {
  const { subtotal, items } = useCart();
  const shipping = subtotal > 75 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sticky top-24">
      <h2 className="text-lg font-bold text-slate-900 mb-6">Order Summary</h2>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">
            Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items)
          </span>
          <span className="font-medium text-slate-900">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">Shipping</span>
          {shipping === 0 ? (
            <span className="font-medium text-green-600">Free</span>
          ) : (
            <span className="font-medium text-slate-900">${shipping.toFixed(2)}</span>
          )}
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">Tax (8%)</span>
          <span className="font-medium text-slate-900">${tax.toFixed(2)}</span>
        </div>
      </div>

      {subtotal < 75 && subtotal > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 text-xs text-amber-700">
          Add <strong>${(75 - subtotal).toFixed(2)}</strong> more for free shipping!
        </div>
      )}

      <div className="border-t border-slate-100 pt-4 mb-6">
        <div className="flex justify-between">
          <span className="font-bold text-slate-900">Total</span>
          <span className="font-bold text-xl text-slate-900">${total.toFixed(2)}</span>
        </div>
      </div>

      <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 mb-3">
        Proceed to Checkout
        <ArrowRight className="w-4 h-4" />
      </button>

      <Link
        href="/"
        className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 rounded-xl transition-all duration-200 text-sm"
      >
        <ShoppingCart className="w-4 h-4" />
        Continue Shopping
      </Link>

      <div className="mt-6 flex items-center justify-center gap-4">
        {["Visa", "Mastercard", "PayPal", "Apple Pay"].map((method) => (
          <span key={method} className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">
            {method}
          </span>
        ))}
      </div>
    </div>
  );
}
