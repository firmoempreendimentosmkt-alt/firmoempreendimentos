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
      title: "Munique",
      location: "Blumenau, SC",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RENDER%2002%20FINAL%20%288%29-F2QW6Rm9y2ZSq6VVeuaMHiAU94Rg6A.jpg",
      status: "Em Construção",
      description: "Edifício com arquitetura germânica, tijolos aparentes e detalhes em madeira",
    },
  ]

  const completedProjects = [
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apresenta%C3%A7%C3%A3o_GreenGarden_T01.OFC.PG05-UkHTMr06uFtVbBFSD2UsNhevnXv7Sw.jpg",
      title: "Empreendimentos Entregues",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apresenta%C3%A7%C3%A3o_GreenGarden_T01.OFC.PG04-7OHwCdzGGfabs0U6xtCEUqL7bN5HUG.jpg",
      title: "Projetos Concluídos",
    },
  ]

  return (
    <section id="projetos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-balance">Nossos Projetos</h2>
          <p className="text-base md:text-lg text-muted-foreground text-pretty">
            Conheça alguns dos empreendimentos que transformamos em realidade
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="relative h-64 md:h-80 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 md:top-4 md:right-4">
                  <Badge className="bg-primary text-primary-foreground text-xs">{project.status}</Badge>
                </div>
              </div>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-2">{project.location}</p>
                <p className="text-xs md:text-sm text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Completed Projects Gallery */}
        <div className="max-w-3xl mx-auto text-center mb-6 md:mb-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Empreendimentos Entregues</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {completedProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-64 md:h-96">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
            </Card>
          ))}
        </div>

        {/* Interior Renders */}
        <div className="mt-12 md:mt-16 max-w-3xl mx-auto text-center mb-6 md:mb-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Interiores Modernos</h3>
          <p className="text-base md:text-lg text-muted-foreground text-pretty">
            Lofts e apartamentos com design contemporâneo e funcional
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          <Card className="overflow-hidden">
            <div className="relative h-64 md:h-96">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RENDER%2008%20FINAL-1z29UP7XU2u5skTOMOfy3XYJk7Gxua.jpg"
                alt="Interior Loft com Mezanino"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4 md:p-6">
              <h4 className="text-base md:text-lg font-bold">Loft com Mezanino</h4>
              <p className="text-xs md:text-sm text-muted-foreground">Design moderno com pé-direito duplo</p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="relative h-64 md:h-96">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RENDER%2006%20FINAL-boOINkwmcyR4MWU6zIMl8WhCeQ7H55.jpg"
                alt="Studio Integrado"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4 md:p-6">
              <h4 className="text-base md:text-lg font-bold">Studio Integrado</h4>
              <p className="text-xs md:text-sm text-muted-foreground">Espaços otimizados e funcionais</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
