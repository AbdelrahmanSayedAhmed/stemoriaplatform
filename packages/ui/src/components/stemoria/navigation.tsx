import * as React from "react"
import { cn } from "../../lib/utils"

interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  items: Array<{
    label: string
    href: string
    active?: boolean
  }>
}

const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({ className, items, ...props }, ref) => {
    return (
      <nav ref={ref} className={cn("flex space-x-4", className)} {...props}>
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              item.active
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>
    )
  }
)
Navigation.displayName = "Navigation"

export { Navigation }
