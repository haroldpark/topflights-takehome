import Link from "next/link"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Orders", href: "/orders" },
  ],
  supplements: [
    { name: "About Supplements", href: "/about-supplements" },
    { name: "Health Benefits", href: "/health-benefits" },
    { name: "Safety Guidelines", href: "/safety-guidelines" },
    { name: "FAQ", href: "/faq" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "Shipping", href: "/shipping" },
    { name: "Returns", href: "/returns" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-sm font-semibold text-foreground">Navigation</h3>
            <ul className="mt-4 space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-sm font-semibold text-foreground">Supplements</h3>
            <ul className="mt-4 space-y-3">
              {navigation.supplements.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-sm font-semibold text-foreground">Support</h3>
            <ul className="mt-4 space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-sm font-semibold text-foreground">About Us</h3>
            <p className="mt-4 text-sm text-foreground/60">
              Your trusted source for high-quality supplements. We provide carefully
              curated products backed by science and quality assurance.
            </p>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 border-t pt-6 sm:pt-8">
          <p className="text-sm text-foreground/60 text-center">
            © {new Date().getFullYear()} Supplement Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 