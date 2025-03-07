import supplementsData from '@/data/supplements.json'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
  pictureURL: string
  rating: number
  reviewCount: number
  category: string
  isBestSeller?: boolean
}

// Convert the supplements data to match our Product interface
export const products: Product[] = supplementsData.supplements.map(supplement => ({
  id: supplement.id,
  name: supplement.name,
  description: `${supplement.servingInstructions} ${supplement.benefits.join(". ")}.`,
  price: supplement.price,
  imageUrl: supplement.imageUrl,
  pictureURL: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d",
  rating: supplement.rating,
  reviewCount: supplement.reviewCount,
  category: supplement.category.toLowerCase(),
  isBestSeller: supplement.rating >= 4.7 && supplement.reviewCount > 800
}))

export const categories = supplementsData.categories
export const brands = supplementsData.brands 