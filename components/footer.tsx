import Image from "next/image"
import { Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-10 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 sm:gap-8 mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20firmo%20empreendimentos-OVUEoemFwy6wkFKRCrOJ9YYT2VncZG.png"
            alt="Firmo Empreendimentos"
            width={180}
            height={60}
            className="h-12 w-auto brightness-0 invert"
          />
          <p className="text-sm text-secondary-foreground/80 leading-relaxed text-center max-w-sm">
            Transformando sonhos em realidade desde 2019. Mais de 30 projetos entregues com qualidade e pontualidade.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/firmoempreendimentos?igsh=dXc1MXM3aGpzajMz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Firmo Empreendimentos"
              className="bg-secondary-foreground/10 p-3 rounded-lg hover:bg-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/firmoempreendimentos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da Firmo Empreendimentos"
              className="bg-secondary-foreground/10 p-3 rounded-lg hover:bg-primary transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-6 text-center text-sm text-secondary-foreground/60">
          <p>© {new Date().getFullYear()} Firmo Empreendimentos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
