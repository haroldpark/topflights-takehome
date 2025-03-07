"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { type Product } from "@/lib/data"

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products = [] }: ProductGridProps) {
  if (!products.length) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No products found</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden card-hover-animate">
          <div className="relative h-[200px] w-full">
            <Image
              src={product.pictureURL}
              alt={product.name}
              fill
              className="object-cover rounded-t-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={product.isBestSeller}
            />
          </div>
          <CardHeader>
            <CardTitle className="line-clamp-1">{product.name}</CardTitle>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="ml-1 text-sm">{product.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                ({product.reviewCount})
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <p className="line-clamp-2 text-sm text-muted-foreground mb-4">
              {product.description}
            </p>
            <div className="flex items-center justify-between">
              <p className="font-semibold">${product.price}</p>
              <Link
                href={`/products/${product.id}`}
                className={buttonVariants({ variant: "outline" })}
              >
                View Details
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
} 