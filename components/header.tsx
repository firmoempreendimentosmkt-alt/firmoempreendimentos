"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Logo centralizada */}
        <div className="flex justify-center py-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20firmo%20empreendimentos%20OFC-1-rZInwqhomaXQR1nfkzVXn1i7lRhfH7.png"
            alt="Firmo Empreendimentos"
            width={280}
            height={90}
            className="h-32 w-auto"
          />
        </div>

        {/* Navigation bar abaixo da logo */}
        <nav className="flex items-center justify-center gap-8 pb-4 border-t border-border/30 pt-3">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection("sobre")}
            className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
          >
            Sobre Nós
          </button>
          <button
            onClick={() => scrollToSection("projetos")}
            className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
          >
            Projetos
          </button>
          <button
            onClick={() => scrollToSection("localizacao")}
            className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
          >
            Localização
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
          >
            Contato
          </button>
        </nav>
      </div>
    </header>
  )
}
