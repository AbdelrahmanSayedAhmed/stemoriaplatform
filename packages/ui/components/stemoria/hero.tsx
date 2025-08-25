import * as React from "react"
import { Button } from "../ui/button"
import { cn } from "../../lib/utils"

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  primaryAction?: {
    label: string
    onClick: () => void
  }
  secondaryAction?: {
    label: string
    onClick: () => void
  }
  className?: string
}

export function Hero({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  className
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 py-24 sm:py-32",
        className
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {subtitle && (
            <div className="mb-4">
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white">
                {subtitle}
              </span>
            </div>
          )}
          
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {title}
          </h1>
          
          {description && (
            <p className="mt-6 text-lg leading-8 text-blue-100">
              {description}
            </p>
          )}
          
          {(primaryAction || secondaryAction) && (
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {primaryAction && (
                <Button
                  size="lg"
                  variant="stemoria"
                  onClick={primaryAction.onClick}
                  className="bg-white text-blue-600 hover:bg-gray-50"
                >
                  {primaryAction.label}
                </Button>
              )}
              {secondaryAction && (
                <Button
                  size="lg"
                  variant="outline"
                  onClick={secondaryAction.onClick}
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  {secondaryAction.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}