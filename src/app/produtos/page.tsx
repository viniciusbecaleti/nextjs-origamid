import Link from 'next/link'

interface Produto {
  id: number
  nome: string
  preco: number
  descricao: string
  estoque: number
  importado: number
}

export default async function Produtos() {
  const response = await fetch('https://api.origamid.online/produtos/')
  const data: Produto[] = await response.json()

  return (
    <main>
      <h1>Produtos</h1>

      <ul>
        {data.map((produto) => (
          <li key={produto.id}>
            <Link href={`/produtos/${produto.id}`}>{produto.nome}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
