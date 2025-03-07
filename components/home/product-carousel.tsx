"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { products } from "@/lib/data"

// Filter best selling products
const bestSellers = products.filter(product => product.isBestSeller)

export function ProductCarousel() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Best Sellers</h2>
        <Carousel className="w-full">
          <CarouselContent>
            {bestSellers.map((product) => (
              <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="card-hover-animate">
                  <div className="relative h-[200px] w-full">
                    <Image
                      src={product.pictureURL}
                      alt={product.name}
                      fill
                      className="object-cover rounded-t-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-1">{product.name}</CardTitle>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <span className="text-sm">★</span>
                        <span className="ml-1 text-sm">{product.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({product.reviewCount})
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold">${product.price}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
} 