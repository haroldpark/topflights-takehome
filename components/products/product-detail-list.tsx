import { Product } from "./product-grid"
import { Star } from "lucide-react"

interface ProductDetailListProps {
  product: Product
}

export function ProductDetailList({ product }: ProductDetailListProps) {
  return (
    <div className="space-y-6">
      {/* Title and Price */}
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-2xl font-semibold text-primary mt-2">${product.price.toFixed(2)}</p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">
          ({product.reviewCount} reviews)
        </span>
      </div>

      {/* Product Details */}
      <div className="space-y-4">
        <div>
          <h2 className="font-semibold">Category</h2>
          <p className="text-muted-foreground">{product.category}</p>
        </div>

        <div>
          <h2 className="font-semibold">Description</h2>
          <p className="text-muted-foreground">
            Premium quality supplement designed to support your fitness goals. Made with carefully
            selected ingredients to ensure maximum effectiveness and safety.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">Key Benefits</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>High-quality ingredients</li>
            <li>Fast absorption</li>
            <li>No artificial flavors</li>
            <li>Third-party tested</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">Usage Instructions</h2>
          <p className="text-muted-foreground">
            Take 1-2 servings daily, preferably with meals. For best results, use consistently as part
            of your daily routine.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">Ingredients</h2>
          <p className="text-muted-foreground">
            Whey Protein Isolate, Natural Flavors, Stevia, Xanthan Gum, Silicon Dioxide
          </p>
        </div>
      </div>
    </div>
  )
} 