"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Esconde o header quando rola para baixo, mostra quando rola para cima
      if (currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 -translate-y-full pointer-events-none"
      } bg-white/95 backdrop-blur-sm shadow-sm`}
    >
      <div className="container mx-auto px-4">
        {/* Logo centralizada - menor no mobile */}
        <div className="flex justify-center py-3 md:py-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20firmo%20empreendimentos%20OFC-1-rZInwqhomaXQR1nfkzVXn1i7lRhfH7.png"
            alt="Firmo Empreendimentos"
            width={280}
            height={90}
            className="h-20 md:h-28 w-auto"
          />
        </div>

        {/* Navigation bar - centralizada */}
        <nav className="flex items-center justify-center gap-4 md:gap-8 pb-3 md:pb-4 border-t border-border/30 pt-2 md:pt-3 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-xs md:text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider whitespace-nowrap flex-shrink-0"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection("sobre")}
            className="text-xs md:text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider whitespace-nowrap flex-shrink-0"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("projetos")}
            className="text-xs md:text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider whitespace-nowrap flex-shrink-0"
          >
            Projetos
          </button>
          <button
            onClick={() => scrollToSection("localizacao")}
            className="text-xs md:text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider whitespace-nowrap flex-shrink-0"
          >
            Local
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="text-xs md:text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider whitespace-nowrap flex-shrink-0"
          >
            Contato
          </button>
        </nav>
      </div>
    </header>
  )
}
