"use client"

import { useEffect, useState } from "react"
import { Hammer, HardHat, Ruler } from "lucide-react"

export function ConstructionAnimation() {
  const [animationStep, setAnimationStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 3)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-12 w-12">
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
          animationStep === 0 ? "opacity-100" : "opacity-0"
        }`}
      >
        <HardHat className="h-8 w-8 text-yellow-500" />
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
          animationStep === 1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <Hammer className="h-8 w-8 text-blue-500" />
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
          animationStep === 2 ? "opacity-100" : "opacity-0"
        }`}
      >
        <Ruler className="h-8 w-8 text-orange-500" />
      </div>
    </div>
  )
}
