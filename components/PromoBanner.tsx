import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function PromoBanner() {
  const countdown = [
    { value: "02", label: "Days" },
    { value: "14", label: "Hours" },
    { value: "37", label: "Mins" },
  ];

  return (
    <section id="sale" className="py-16 bg-amber-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-slate-900 rounded-3xl px-8 py-12 lg:px-16 lg:py-16">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl" />
          </div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/30 rounded-full px-4 py-1.5 mb-4">
                <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                  Limited Time Offer
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-3">
                Summer Sale is{" "}
                <span className="text-amber-400">Live!</span>
              </h2>
              <p className="text-slate-300 text-lg max-w-lg">
                Up to <strong className="text-white">40% off</strong> on selected items across all categories. Deals end Sunday.
              </p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-3">
                {countdown.map((unit) => (
                  <div key={unit.label} className="text-center">
                    <div className="bg-white/10 border border-white/20 rounded-xl w-16 h-16 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{unit.value}</span>
                    </div>
                    <span className="text-xs text-slate-400 mt-1 block">{unit.label}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/#products"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
              >
                Shop the Sale
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
