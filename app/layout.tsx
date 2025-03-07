import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartProvider } from "@/contexts/cart-context";
import { OrdersProvider } from "@/contexts/orders-context";
import { FloatingCart } from "@/components/cart/floating-cart";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Supplement Store",
  description: "Your trusted source for high-quality supplements",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <OrdersProvider>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</main>
              <Footer />
              <FloatingCart />
            </div>
            <Toaster />
          </OrdersProvider>
        </CartProvider>
      </body>
    </html>
  );
}
