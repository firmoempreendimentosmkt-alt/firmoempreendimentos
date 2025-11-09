import { Building2, Users, Award, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  const stats = [
    {
      icon: Building2,
      value: "30+",
      label: "Projetos Entregues",
    },
    {
      icon: Users,
      value: "2019",
      label: "Fundada em",
    },
    {
      icon: Award,
      value: "100%",
      label: "Qualidade Garantida",
    },
    {
      icon: Clock,
      value: "No Prazo",
      label: "Entregas Pontuais",
    },
  ]

  return (
    <section id="sobre" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Sobre Nós</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Criada em 2019 com mais de 30 projetos entregues com sucesso, a nossa empresa se orgulha de seu compromisso
            com a qualidade e o cumprimento dos prazos. Trabalhamos lado a lado com nossos clientes e parceiros, sempre
            em busca de crescimento, inovação e aperfeiçoamento na construção civil.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty mt-4">
            Nossa dedicação é transformar sonhos em realidade, com projetos que valorizam a vida e o bem-estar.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <stat.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
