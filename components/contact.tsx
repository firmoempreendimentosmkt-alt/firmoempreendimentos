import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Entre em Contato</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Estamos prontos para transformar seu sonho em realidade
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Localização</h4>
                  <p className="text-sm text-muted-foreground">Blumenau, Santa Catarina</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Telefone</h4>
                  <p className="text-sm text-muted-foreground">(47) 98416-8889</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">E-mail</h4>
                  <p className="text-sm text-muted-foreground">contato@firmoempreendimentos.com.br</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-secondary text-secondary-foreground mt-8 max-w-md mx-auto">
            <CardContent className="p-6 text-center">
              <h4 className="font-bold mb-3">Horário de Atendimento</h4>
              <div className="space-y-2 text-sm">
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
