import Link from 'next/link'
import { ReactNode } from 'react'

import { Produto } from '@/_types/Produto'

export default async function ProdutosLayout({
  children,
}: {
  children: ReactNode
}) {
  const response = await fetch('https://api.origamid.online/produtos')
  const produtos: Produto[] = await response.json()

  return (
    <div className="flex">
      <nav>
        <h2>Produtos</h2>

        <ul>
          {produtos.map((produto) => (
            <li key={produto.id}>
              <Link href={`/produtos/${produto.id}`}>
                {produto.nome} - R$ {produto.preco}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div>{children}</div>
    </div>
  )
}
