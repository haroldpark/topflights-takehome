"use client"

import * as React from "react"
import ordersData from "@/data/orders.json"

export interface Order {
  id: string
  products: {
    name: string
    quantity: number
    price: number
  }[]
  customerName: string
  email: string
  orderDate: string
  shippingAddress: {
    street: string
    city: string
    state: string
    zip: string
  }
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  total: number
}

interface OrdersContextType {
  orders: Order[]
  addOrder: (orderData: Omit<Order, "id" | "status" | "orderDate">) => void
  updateOrderStatus: (orderId: string, newStatus: Order['status']) => void
}

const OrdersContext = React.createContext<OrdersContextType | undefined>(undefined)

export function OrdersProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = React.useState<Order[]>(() => {
    // Try to load orders from localStorage first
    if (typeof window !== 'undefined') {
      const savedOrders = localStorage.getItem('orders')
      if (savedOrders) {
        return JSON.parse(savedOrders)
      }
    }
    // Fall back to initial data if no localStorage data exists
    return ordersData.orders as Order[]
  })

  // Save orders to localStorage whenever they change
  React.useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders))
  }, [orders])

  const addOrder = (orderData: Omit<Order, "id" | "status" | "orderDate">) => {
    const newOrder: Order = {
      ...orderData,
      id: `ORD-${new Date().getFullYear()}-${String(orders.length + 1).padStart(3, "0")}`,
      status: "pending",
      orderDate: new Date().toISOString(),
    }

    setOrders(prevOrders => [newOrder, ...prevOrders])
  }

  const updateOrderStatus = (orderId: string, newStatus: Order['status']) => {
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === orderId 
          ? { ...order, status: newStatus }
          : order
      )
    )
  }

  return (
    <OrdersContext.Provider value={{ orders, addOrder, updateOrderStatus }}>
      {children}
    </OrdersContext.Provider>
  )
}

export function useOrders() {
  const context = React.useContext(OrdersContext)
  if (context === undefined) {
    throw new Error("useOrders must be used within an OrdersProvider")
  }
  return context
} 