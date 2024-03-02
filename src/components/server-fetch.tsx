interface Produto {
  id: number
  nome: string
  preco: number
  descricao: string
  estoque: number
  importado: number
}

export async function ServerFetch() {
  const response = await fetch('https://api.origamid.online/produtos')
  const data: Produto[] = await response.json()

  return (
    <div>
      <h2>Produtos</h2>

      <div>
        {data.map((produto) => (
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
