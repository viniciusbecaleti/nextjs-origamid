interface ProdutoProps {
  params: {
    id: string
  }
}

interface Produto {
  id: number
  nome: string
  preco: number
  descricao: string
  estoque: number
  importado: number
}

export default async function Produto({ params }: ProdutoProps) {
  const response = await fetch(
    `https://api.origamid.online/produtos/${params.id}`,
  )
  const data: Produto = await response.json()

  return (
    <main>
      <h1>{data.nome}</h1>
      <h2>R$ {data.preco}</h2>
      <p>{data.descricao}</p>
    </main>
  )
}
