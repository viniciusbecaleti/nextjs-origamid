import Link from 'next/link'

interface Curso {
  id: number
  slug: string
  nome: string
  descricao: string
  total_aulas: number
  total_horas: number
}

export default async function Cursos() {
  const response = await fetch('https://api.origamid.online/cursos')
  const data: Curso[] = await response.json()

  return (
    <div>
      <h1>Cursos</h1>

      <ul>
        {data.map((curso) => (
          <li key={curso.id}>
            <Link href={`/cursos/${curso.slug}`}>{curso.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
