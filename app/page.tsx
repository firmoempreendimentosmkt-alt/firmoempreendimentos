import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Location } from "@/components/location"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-[148px]">
        <Hero />
        <About />
        <Projects />
        <Location />
        <Footer />
      </div>
      <WhatsAppButton />
    </main>
  )
}
