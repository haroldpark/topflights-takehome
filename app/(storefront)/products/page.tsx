"use client"

import { useState } from "react"
import { SearchBar } from "@/components/products/search-bar"
import { Filters } from "@/components/products/filters"
import { SortDropdown } from "@/components/products/sort-dropdown"
import { ProductGrid } from "@/components/products/product-grid"
import { products } from "@/lib/data"

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedPriceRange, setSelectedPriceRange] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [showBestSellers, setShowBestSellers] = useState(false)

  // Filter products based on selected categories and price range
  const filteredProducts = products.filter((product) => {
    // Search filter
    const searchLower = searchQuery.toLowerCase()
    if (searchLower && 
        !product.name.toLowerCase().includes(searchLower) &&
        !product.description.toLowerCase().includes(searchLower)) {
      return false
    }

    // Best sellers filter
    if (showBestSellers && !product.isBestSeller) {
      return false
    }

    // Category filter
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category.toLowerCase())) {
      return false
    }

    // Price range filter
    switch (selectedPriceRange) {
      case "under-25":
        return product.price < 25
      case "25-50":
        return product.price >= 25 && product.price <= 50
      case "50-100":
        return product.price > 50 && product.price <= 100
      case "over-100":
        return product.price > 100
      default:
        return true
    }
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price
      case "price-desc":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "name-asc":
        return a.name.localeCompare(b.name)
      case "name-desc":
        return b.name.localeCompare(a.name)
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen py-8">
      <div className="container">
        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full md:w-64 shrink-0">
            <Filters
              selectedCategories={selectedCategories}
              selectedPriceRange={selectedPriceRange}
              onCategoryChange={setSelectedCategories}
              onPriceRangeChange={setSelectedPriceRange}
              showBestSellers={showBestSellers}
              onBestSellersChange={setShowBestSellers}
            />
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold">All Products</h1>
                <p className="text-sm text-muted-foreground mt-1">
                  {sortedProducts.length} products found
                </p>
              </div>
              <SortDropdown value={sortBy} onValueChange={setSortBy} />
            </div>
            <ProductGrid products={sortedProducts} />
          </main>
        </div>
      </div>
    </div>
  )
}
