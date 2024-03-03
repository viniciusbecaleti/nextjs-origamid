'use client'

import { useParams, usePathname, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function Busca() {
  const searchParams = useSearchParams()
  const q = searchParams.get('q')

  return <div>Busca: {q}</div>
}

export default function AcoesPage() {
  const params = useParams()
  const pathname = usePathname()

  return (
    <main>
      <h1>{params.slug}</h1>
      <h2>{pathname}</h2>

      <Suspense>
        <Busca />
      </Suspense>
    </main>
  )
}
