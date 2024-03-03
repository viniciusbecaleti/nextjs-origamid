import Link from 'next/link'

import { Produto } from '@/_types/Produto'
import { Metadata } from 'next'

interface ProdutoPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  const response = await fetch(`https://api.origamid.online/produtos`)
  const produtos: Produto[] = await response.json()

  return produtos.map((produto) => {
    return {
      id: String(produto.id),
    }
  })
}

export async function generateMetadata({
  params,
}: ProdutoPageProps): Promise<Metadata> {
  const response = await fetch(
    `https://api.origamid.online/produtos/${params.id}`,
  )
  const produto: Produto = await response.json()

  return {
    title: `Origamid | ${produto.nome}`,
  }
}

export default async function ProdutoPage({ params }: ProdutoPageProps) {
  const response = await fetch(
    `https://api.origamid.online/produtos/${params.id}`,
  )
  const produto: Produto = await response.json()

  return (
    <main>
      <h1>{produto.nome}</h1>
      <h2>R$ {produto.preco}</h2>
      <p>{produto.descricao}</p>
      <Link href="/produtos">Voltar</Link>
    </main>
  )
}
