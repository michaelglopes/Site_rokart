import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  // TÍTULO PRINCIPAL
  title: 'Rokart | Pisos Industriais granitina e Epóxi de Alta Resistência em Goiânia',
  
  // DESCRIÇÃO
  description: 'Especialistas em pavimentação em concreto, revestimentos monolíticos (Epóxi e Uretano), restauração e sinalização industrial em Goiânia e região. Durabilidade extrema para o seu negócio.',
  
  // TAGS DE AUTOR E ROBÔS
  authors: [{ name: 'Rokart Pisos' }],
  robots: 'index, follow',

  // OPEN GRAPH
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.rokart.com.br',
    title: 'Rokart | Pisos de Alta Resistência',
    description: 'Especialistas em transformar ambientes industriais com pisos de altíssima resistência e durabilidade.',
    siteName: 'Rokart Pisos',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="google-site-verification" content="eVUTsMpYz4ibGqCSvFgG0M8LPjYUxfgafGb2vtG5Akg" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}