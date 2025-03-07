import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

interface AddToCartButtonProps {
  productId: string
  onAddToCart: (productId: string) => void
}

export function AddToCartButton({ productId, onAddToCart }: AddToCartButtonProps) {
  const { isInCart } = useCart()
  const inCart = isInCart(productId)

  return (
    <Button 
      size="lg" 
      className="w-full" 
      onClick={() => onAddToCart(productId)}
      disabled={inCart}
      variant={inCart ? "secondary" : "default"}
    >
      <ShoppingCart className="mr-2 h-4 w-4" />
      {inCart ? "Already in Cart" : "Add to Cart"}
    </Button>
  )
} 