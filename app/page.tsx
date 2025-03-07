import { ProductCarousel } from "@/components/home/product-carousel"
import { FAQSection } from "@/components/home/faq-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to Supplement Store</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your trusted source for high-quality supplements
          </p>
          <p className="text-lg text-foreground/80">
            Discover our collection of high-quality supplements for your health and wellness journey.
          </p>
        </div>
      </section>

      {/* Best Sellers Carousel */}
      <ProductCarousel />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  )
}
