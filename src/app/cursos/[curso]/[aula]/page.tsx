interface AulaProps {
  params: {
    curso: string
    aula: string
  }
}

interface Aula {
  id: number
  slug: string
  nome: string
  descricao: string
  curso_id: number
  tempo: number
  ordem: number
}

export default async function AulaPage({ params }: AulaProps) {
  const response = await fetch(
    `https://api.origamid.online/cursos/${params.curso}/${params.aula}`,
  )
  const data: Aula = await response.json()

  return (
    <main>
      <h1>{data.nome}</h1>
    </main>
  )
}
