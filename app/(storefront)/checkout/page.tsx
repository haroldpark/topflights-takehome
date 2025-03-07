"use client"

import { ShippingForm } from "@/components/checkout/shipping-form"
import { OrderSummary } from "@/components/checkout/order-summary"
import { useCart } from "@/contexts/cart-context"
import { useOrders } from "@/contexts/orders-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { toast } from "sonner"

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart()
  const { addOrder } = useOrders()
  const router = useRouter()

  // Redirect to products if cart is empty
  useEffect(() => {
    if (items.length === 0) {
      router.push("/products")
    }
  }, [items.length, router])

  if (items.length === 0) {
    return null
  }

  const handleShippingSubmit = (shippingData: any) => {
    // Create new order
    const orderData = {
      products: items.map(item => ({
        name: item.product.name,
        quantity: 1, // Since we don't track quantity in cart yet
        price: item.product.price
      })),
      customerName: `${shippingData.firstName} ${shippingData.lastName}`,
      email: shippingData.email,
      shippingAddress: {
        street: shippingData.address + (shippingData.apartment ? ` ${shippingData.apartment}` : ""),
        city: shippingData.city,
        state: shippingData.state,
        zip: shippingData.zip
      },
      total: totalPrice
    }

    // Add order
    addOrder(orderData)

    // Clear cart
    clearCart()

    // Show success message
    toast.success("Order placed successfully!", {
      description: "You will receive a confirmation email shortly."
    })

    // Redirect to orders page
    router.push("/orders")
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Shipping Information */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <ShippingForm onSubmit={handleShippingSubmit} />
          </div>

          {/* Order Summary */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="bg-muted/50 rounded-lg p-6">
              <OrderSummary items={items} total={totalPrice} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 