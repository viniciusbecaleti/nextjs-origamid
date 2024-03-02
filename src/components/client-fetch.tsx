'use client'

import { useEffect, useState } from 'react'

interface Produto {
  id: number
  nome: string
  preco: number
  descricao: string
  estoque: number
  importado: number
}

export function ClientFetch() {
  const [produtos, setProdutos] = useState<Produto[] | null>(null)

  useEffect(() => {
    async function getProdutos() {
      const response = await fetch('https://api.origamid.online/produtos')
      const data = await response.json()
      setProdutos(data)
    }

    getProdutos()
  }, [])

  return (
    <div>
      <h2>Produtos (Client)</h2>

      <div>
        {produtos &&
          produtos.map((produto) => (
            <div key={produto.id}>
              <h3>{produto.nome}</h3>
              <p>{produto.descricao}</p>
              <p>R$ {produto.preco}</p>
            </div>
          ))}
      </div>
    </div>
  )
}
