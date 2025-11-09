import Image from "next/image"
import { MapPin, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Location() {
  return (
    <section id="localizacao" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Por que investir em Pomerode?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
                Pomerode já possui grandes atrações e com isso a demanda de hospedagem vem crescendo com alta
                rentabilidade.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
                Pensando nisto apresentamos este empreendimento no coração da cidade mais alemã do brasil, trazendo alta
                rentabilidade e valorização.
              </p>

              <div className="space-y-4">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-4 flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Localização Privilegiada</h4>
                      <p className="text-sm text-muted-foreground">
                        Blumenau e Pomerode, cidades em crescimento constante
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-4 flex items-start gap-3">
                    <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Alta Rentabilidade</h4>
                      <p className="text-sm text-muted-foreground">
                        Investimento com retorno garantido em região turística
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <Card className="overflow-hidden shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apresenta%C3%A7%C3%A3o_GreenGarden_T01.OFC.PG12-PuPmCmTlI2T83VeMKenm4I0tNKAD1g.jpg"
                  alt="Investimento em Pomerode"
                  width={600}
                  height={800}
                  className="w-full h-auto"
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
