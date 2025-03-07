"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { categories } from "@/lib/data"

const priceRanges = [
  { value: "under-25", label: "Under $25" },
  { value: "25-50", label: "$25 - $50" },
  { value: "50-100", label: "$50 - $100" },
  { value: "over-100", label: "Over $100" },
]

interface FiltersProps {
  selectedCategories: string[]
  selectedPriceRange: string
  onCategoryChange: (categories: string[]) => void
  onPriceRangeChange: (range: string) => void
  showBestSellers: boolean
  onBestSellersChange: (show: boolean) => void
}

export function Filters({
  selectedCategories,
  selectedPriceRange,
  onCategoryChange,
  onPriceRangeChange,
  showBestSellers,
  onBestSellersChange,
}: FiltersProps) {
  return (
    <div className="space-y-8">
      {/* Best Sellers Toggle */}
      <div className="flex items-center justify-between">
        <Label htmlFor="best-sellers">Best Sellers</Label>
        <Switch
          id="best-sellers"
          checked={showBestSellers}
          onCheckedChange={onBestSellersChange}
        />
      </div>

      {/* Categories */}
      <div className="space-y-4">
        <h3 className="font-medium">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.id}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    onCategoryChange([...selectedCategories, category.id])
                  } else {
                    onCategoryChange(selectedCategories.filter((c) => c !== category.id))
                  }
                }}
              />
              <Label htmlFor={category.id}>{category.name}</Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-4">
        <h3 className="font-medium">Price Range</h3>
        <RadioGroup
          value={selectedPriceRange}
          onValueChange={onPriceRangeChange}
          className="space-y-2"
        >
          {priceRanges.map((range) => (
            <div key={range.value} className="flex items-center space-x-2">
              <RadioGroupItem value={range.value} id={range.value} />
              <Label htmlFor={range.value}>{range.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  )
} 