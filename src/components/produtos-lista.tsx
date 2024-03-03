import { Produto } from '@/_types/Produto'

export async function ProdutosLista() {
  const response = await fetch('https://api.origamid.online/produtos', {
    cache: 'no-cache',
  })

  const produtos: Produto[] = await response.json()

  await new Promise((resolve) => setTimeout(resolve, Math.random() * 5000))

  return (
    <ul>
      {produtos.map((produto) => (
        <li key={produto.id}>
          {produto.nome} - R$ {produto.preco}
        </li>
      ))}
    </ul>
  )
}
