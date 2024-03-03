import { Metadata } from 'next'
import { Suspense } from 'react'

import { ProdutosLista } from '@/components/produtos-lista'

export const metadata: Metadata = {
  title: 'Origamid Produtos',
  description: 'Criado durante o curso de Next.js da Origamid',
}

export default async function ProdutosPage() {
  return (
    <main>
      <h1>Produtos</h1>

      <Suspense fallback="carregando...">
        <ProdutosLista />
      </Suspense>
    </main>
  )
}
