import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Firmo Empreendimentos | Construção Civil em Blumenau",
  description:
    "Construtora especializada em empreendimentos modernos e sustentáveis em Blumenau e Pomerode, SC. Mais de 30 projetos entregues com qualidade e pontualidade.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
