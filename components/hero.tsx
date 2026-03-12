"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="relative md:min-h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-secondary">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RENDER%2004%20FINAL-P0NVuNHO7CSEfpKWUwDo0ZERytVQqC.jpg"
          alt="Empreendimento Firmo"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/50 to-secondary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 text-balance leading-tight"
            style={{ color: "#1a2332", fontFamily: "var(--font-playfair), 'Georgia', serif", letterSpacing: "-0.01em" }}
          >
            Construindo o futuro mantendo a tradição
          </h1>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-base px-8"
              onClick={() => scrollToSection("projetos")}
            >
              Conheça Nossos Projetos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
