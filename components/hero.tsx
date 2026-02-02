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
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-40">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RENDER%2004%20FINAL-P0NVuNHO7CSEfpKWUwDo0ZERytVQqC.jpg"
          alt="Empreendimento Firmo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-balance uppercase tracking-wide px-2" style={{ color: "#1a2332", fontFamily: "var(--font-montserrat)", letterSpacing: "0.05em" }}>
            Construindo o futuro mantendo a tradição
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-sm md:text-base"
              onClick={() => scrollToSection("projetos")}
            >
              Conheça Nossos Projetos
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 text-sm md:text-base"
              onClick={() => scrollToSection("contato")}
            >
              Entre em Contato
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
