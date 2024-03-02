import { Metadata } from 'next'
import dynamic from 'next/dynamic'

const Width = dynamic(() => import('@/components/width'), { ssr: false })

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Página sobre a Origamid',
}

export default async function Sobre() {
  return (
    <main>
      <h1>Sobre</h1>
      <Width />
    </main>
  )
}
