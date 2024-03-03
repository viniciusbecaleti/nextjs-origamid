import { Suspense } from 'react'

import { ProdutosLista } from '@/components/produtos-lista'

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
