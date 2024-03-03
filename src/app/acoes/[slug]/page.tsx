'use client'

import { useParams, usePathname } from 'next/navigation'

export default function AcoesPage() {
  const params = useParams()
  const pathname = usePathname()

  return (
    <main>
      <h1>{params.slug}</h1>
      <h2>{pathname}</h2>
    </main>
  )
}
