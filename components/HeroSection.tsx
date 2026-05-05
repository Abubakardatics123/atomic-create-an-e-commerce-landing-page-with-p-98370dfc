import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function HeroSection() {
  const stats = [
    { value: "50K+", label: "Happy Customers" },
    { value: "500+", label: "Products" },
    { value: "4.9 Star", label: "Avg. Rating" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full px-4 py-1.5 mb-6">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-xs font-medium text-indigo-200">New Season Collection &mdash; Up to 40% Off</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6">
              Style That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-amber-400">
                Speaks
              </span>{" "}
              For You
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-lg">
              Discover our curated collection of premium essentials from cutting-edge electronics to timeless fashion. Quality you can feel, prices you will love.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#products"
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#sale"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                View Sale
              </Link>
            </div>

            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-slate-800">
                <img
                  src="/images/wireless-noise-cancelling-headphones.jpg"
                  alt="Wireless headphones"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square bg-slate-800">
                <img
                  src="/images/minimalist-leather-watch.jpg"
                  alt="Leather watch"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-2xl overflow-hidden aspect-square bg-slate-800">
                <img
                  src="/images/ultralight-running-sneakers.jpg"
                  alt="Running sneakers"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-slate-800">
                <img
                  src="/images/merino-wool-crewneck-sweater.jpg"
                  alt="Merino sweater"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
