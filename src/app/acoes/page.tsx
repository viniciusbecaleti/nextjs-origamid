interface Acao {
  id: number
  preco_anterior: number
  preco: number
  simbolo: string
  nome: string
  descricao: string
  vendas: number
  atualizada: string
}

export const revalidate = 5

export default async function Acoes() {
  const response = await fetch('https://api.origamid.online/acoes/lua')
  const data: Acao = await response.json()

  return (
    <main>
      <h1>{data.simbolo}</h1>
      <h2>{data.atualizada}</h2>
    </main>
  )
}
