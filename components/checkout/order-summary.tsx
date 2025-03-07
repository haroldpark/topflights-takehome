import { CartItem } from "@/contexts/cart-context"
import Image from "next/image"

interface OrderSummaryProps {
  items: CartItem[]
  total: number
}

export function OrderSummary({ items, total }: OrderSummaryProps) {
  return (
    <div className="space-y-6">
      {/* Items */}
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.product.id} className="flex gap-4">
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
              <Image
                src={item.product.imageUrl}
                alt={item.product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <h3 className="font-medium">{item.product.name}</h3>
              <p className="text-sm text-muted-foreground">
                ${item.product.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="space-y-4 pt-4 border-t">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
} 