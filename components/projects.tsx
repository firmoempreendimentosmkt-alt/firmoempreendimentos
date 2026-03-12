import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Projects() {
  const projects = [
    {
      title: "Green Garden",
      location: "Pomerode, SC",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RENDER%2001%20FINAL-4amkRwVqXbmg1TobDHi6Jo1SUuIFoK.jpg",
      status: "Em Construção",
      description: "Edifício moderno com varandas verdes e design sustentável",
    },
    {
      title: "Duo Residence",
      location: "Blumenau, SC",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8590.PNG-DAEP1Ow2cpFUnztNYwkHNnJmlscTPM.jpeg",
      status: "Projeto Futuro",
      description: "Casa contemporânea com design moderno e integração com natureza",
    },
    {
      title: "Munique Lofts",
      location: "Pomerode, SC",
      image: "/munique-lofts-hero.jpg",
      status: "Lançamento",
      description: "Lofts modernos no centro de Pomerode com arquitetura enxaimel contemporânea",
    },
  ]

  const completedProjects = [
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apresenta%C3%A7%C3%A3o_GreenGarden_T01.OFC.PG05-UkHTMr06uFtVbBFSD2UsNhevnXv7Sw.jpg",
      title: "Empreendimento Entregue 1",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apresenta%C3%A7%C3%A3o_GreenGarden_T01.OFC.PG04-7OHwCdzGGfabs0U6xtCEUqL7bN5HUG.jpg",
      title: "Empreendimento Entregue 2",
    },
  ]

  return (
    <section id="projetos" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance">Nossos Projetos</h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty">
            Conheça alguns dos empreendimentos que transformamos em realidade
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">{project.status}</Badge>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{project.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">{project.location}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Munique Lofts Detail */}
        <div className="max-w-5xl mx-auto mb-12 sm:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center">
            <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/munique-lofts.png"
                alt="Munique Lofts - Pomerode SC"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: "#e07b20" }}>
                  Novo Empreendimento
                </span>
                <h3
                  className="text-3xl sm:text-4xl font-bold mt-2 mb-1"
                  style={{ fontFamily: "var(--font-playfair), 'Georgia', serif" }}
                >
                  Munique Lofts
                </h3>
                <p className="text-muted-foreground text-sm tracking-wide">Centro · Pomerode, SC</p>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                O Munique Lofts é um empreendimento exclusivo localizado no coração de Pomerode, a cidade mais alemã do
                Brasil. Com arquitetura que dialoga com o patrimônio cultural da região, o projeto oferece lofts
                modernos e funcionais com acabamentos de alto padrão.
              </p>
              <ul className="space-y-2">
                {[
                  "Localização privilegiada no centro da cidade",
                  "Varandas com jardins verticais",
                  "Arquitetura enxaimel contemporânea",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#e07b20" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 pt-2">
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: "#e07b20" }}>4</div>
                  <div className="text-xs text-muted-foreground">Andares</div>
                </div>
                <div className="w-px bg-border" />
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: "#e07b20" }}>Lofts</div>
                  <div className="text-xs text-muted-foreground">Exclusivos</div>
                </div>
                <div className="w-px bg-border" />
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: "#e07b20" }}>Centro</div>
                  <div className="text-xs text-muted-foreground">Pomerode SC</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Completed Projects Gallery */}
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Empreendimentos Entregues</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {completedProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-contain bg-neutral-100"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
