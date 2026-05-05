import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import PromoBanner from "@/components/PromoBanner";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProductGrid />
      <PromoBanner />
      <NewsletterSignup />
    </main>
  );
}
