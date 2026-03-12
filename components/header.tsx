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
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-background/90 backdrop-blur-sm"
      }`}
    >
      {/* Logo row */}
      <div className="flex justify-center py-3 border-b border-border/40">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20firmo%20empreendimentos%20OFC-1-rZInwqhomaXQR1nfkzVXn1i7lRhfH7.png"
          alt="Firmo Empreendimentos"
          width={240}
          height={80}
          className="h-20 w-auto"
        />
      </div>

      {/* Navigation row */}
      <nav className="flex items-center justify-center gap-10 py-3">
        <button
          onClick={() => scrollToSection("inicio")}
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          Início
        </button>
        <button
          onClick={() => scrollToSection("sobre")}
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          Sobre Nós
        </button>
        <button
          onClick={() => scrollToSection("projetos")}
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          Projetos
        </button>
        <button
          onClick={() => scrollToSection("localizacao")}
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          Localização
        </button>
        <button
          onClick={() => scrollToSection("contato")}
          className="text-sm font-medium bg-primary text-primary-foreground px-4 py-1.5 rounded-md hover:bg-primary/90 transition-colors"
        >
          Contato
        </button>
      </nav>
    </header>
  )
}
