'use client'

import Error from 'next/error'

export default function ProdutosError({ error }: { error: Error }) {
  return (
    <main>
      <h1>Um erro ocorreu</h1>
    </main>
  )
}
