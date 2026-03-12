import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Location } from "@/components/location"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      {/* pt accounts for fixed header: logo (~64px mobile / 80px desktop) + nav (~36px) + border */}
      <div className="pt-[108px] sm:pt-[132px]">
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
