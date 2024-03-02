import Link from 'next/link'

interface CursoProps {
  params: {
    curso: string
  }
}

interface Curso {
  id: number
  slug: string
  nome: string
  descricao: string
  total_aulas: number
  total_horas: number
  aulas: {
    id: number
    slug: string
    nome: string
    descricao: string
    curso_id: number
    tempo: number
    ordem: number
  }[]
}

export default async function Curso({ params }: CursoProps) {
  const response = await fetch(
    `https://api.origamid.online/cursos/${params.curso}`,
  )
  const data: Curso = await response.json()

  return (
    <main>
      <h1>{data.nome}</h1>

      <ul>
        {data.aulas.map((aula) => (
          <li key={aula.id}>
            <Link href={`/cursos/${params.curso}/${aula.slug}`}>
              {aula.nome}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
