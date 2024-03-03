import { Produto } from '@/_types/Produto'

export default async function ProdutosPage() {
  const response = await fetch('https://pi.origamid.online/produtos', {
    next: {
      revalidate: 60 * 60 * 24, // 24 horas
    },
  })
  const produtos: Produto[] = await response.json()

  return (
    <main>
      <h1>Produtos</h1>

      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - R$ {produto.preco}
          </li>
        ))}
      </ul>
    </main>
  )
}
