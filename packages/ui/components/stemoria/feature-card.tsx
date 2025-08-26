import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { cn } from "../../lib/utils"

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  icon?: React.ReactNode
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ className, title, description, icon, ...props }, ref) => {
    return (
      <Card ref={ref} className={cn("h-full", className)} {...props}>
        <CardHeader>
          {icon && (
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              {icon}
            </div>
          )}
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base leading-relaxed">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    )
  }
)
FeatureCard.displayName = "FeatureCard"

export { FeatureCard }