import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Página sobre a Origamid',
}

export default async function Sobre() {
  return (
    <main>
      <h1>Sobre</h1>
    </main>
  )
}
