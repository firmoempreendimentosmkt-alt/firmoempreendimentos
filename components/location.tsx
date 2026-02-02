import Image from "next/image"
import { MapPin, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Location() {
  return (
    <section id="localizacao" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 text-balance">Por que investir em Pomerode?</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6 text-pretty">
                Pomerode já possui grandes atrações e com isso a demanda de hospedagem vem crescendo com alta
                rentabilidade.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8 text-pretty">
                Pensando nisto apresentamos este empreendimento no coração da cidade mais alemã do brasil, trazendo alta
                rentabilidade e valorização.
              </p>

              <div className="space-y-3 md:space-y-4">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-3 md:p-4 flex items-start gap-3">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1 text-sm md:text-base">Localização Privilegiada</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Blumenau e Pomerode, cidades em crescimento constante
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-3 md:p-4 flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1 text-sm md:text-base">Alta Rentabilidade</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Investimento com retorno garantido em região turística
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative order-1 md:order-2">
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
