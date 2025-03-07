"use client"

import { notFound } from "next/navigation"
import { ProductDetailPicture } from "@/components/products/product-detail-picture"
import { ProductDetailList } from "@/components/products/product-detail-list"
import { AddToCartButton } from "@/components/products/add-to-cart-button"
import { ProductGrid } from "@/components/products/product-grid"
import { products } from "@/lib/data"
import { useCart } from "@/contexts/cart-context"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id)
  const { addItem } = useCart()

  if (!product) {
    notFound()
  }

  const handleAddToCart = (productId: string) => {
    addItem(product)
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div>
            <ProductDetailPicture 
              imageUrl={product.imageUrl} 
              pictureURL={product.pictureURL}
              name={product.name} 
            />
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <ProductDetailList product={product} />
            <AddToCartButton productId={product.id} onAddToCart={handleAddToCart} />
          </div>
        </div>
      </div>
    </div>
  )
}
