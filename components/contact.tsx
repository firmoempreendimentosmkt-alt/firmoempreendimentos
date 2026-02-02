import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contato" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-balance">Entre em Contato</h2>
            <p className="text-base md:text-lg text-muted-foreground text-pretty">
              Estamos prontos para transformar seu sonho em realidade
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <Card>
              <CardContent className="p-4 md:p-6 flex flex-col items-center text-center gap-3 md:gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 md:mb-2 text-sm md:text-base">Localização</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">Blumenau, Santa Catarina</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 md:p-6 flex flex-col items-center text-center gap-3 md:gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 md:mb-2 text-sm md:text-base">Telefone</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">(47) 98416-8889</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 md:p-6 flex flex-col items-center text-center gap-3 md:gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 md:mb-2 text-sm md:text-base">E-mail</h4>
                  <p className="text-xs md:text-sm text-muted-foreground break-all">contato@firmoempreendimentos.com.br</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-secondary text-secondary-foreground mt-6 md:mt-8 max-w-md mx-auto">
            <CardContent className="p-4 md:p-6 text-center">
              <h4 className="font-bold mb-2 md:mb-3 text-sm md:text-base">Horário de Atendimento</h4>
              <div className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 9h às 13h</p>
                <p>Domingo: Fechado</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
