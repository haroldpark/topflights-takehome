"use client"

import { useState, useEffect, useRef } from "react"
import { CartButton } from "./cart-button"
import { CartPanel } from "./cart-panel"
import { useCart } from "@/contexts/cart-context"

export function FloatingCart() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const { totalItems } = useCart()
  const prevItemsRef = useRef(totalItems)

  // Trigger animation when totalItems changes and increases
  useEffect(() => {
    if (totalItems > prevItemsRef.current) {
      setIsAnimating(true)
      const timer = setTimeout(() => setIsAnimating(false), 820)
      return () => clearTimeout(timer)
    }
    prevItemsRef.current = totalItems
  }, [totalItems])

  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <div className="relative">
          <div 
            className={isAnimating ? 'cart-shake cart-glow' : ''}
            style={{ transformOrigin: 'center' }}
          >
            <CartButton onClick={() => setIsOpen(true)} />
            {totalItems > 0 && (
              <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-sm text-primary-foreground font-medium">
                {totalItems}
              </div>
            )}
          </div>
        </div>
      </div>
      <CartPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
} 