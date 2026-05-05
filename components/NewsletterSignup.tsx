"use client";

import { useState } from "react";
import { Mail, Check } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="newsletter" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl px-8 py-16 text-center">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full" />
          </div>

          <div className="relative max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-2xl mb-6">
              <Mail className="w-7 h-7 text-white" />
            </div>

            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
              Get Exclusive Deals First
            </h2>
            <p className="text-indigo-200 text-lg mb-8">
              Join 50,000+ subscribers and be the first to know about new arrivals, flash sales, and members-only discounts.
            </p>

            {submitted ? (
              <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl">
                <Check className="w-5 h-5 text-green-400" />
                You are subscribed! Check your inbox.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-white/40 text-sm"
                />
                <button
                  type="submit"
                  className="bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap text-sm"
                >
                  Subscribe Free
                </button>
              </form>
            )}

            <p className="text-indigo-300 text-xs mt-4">
              No spam, ever. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
