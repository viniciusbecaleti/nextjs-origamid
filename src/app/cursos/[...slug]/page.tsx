interface CursoProps {
  params: {
    slug: string[]
  }
}

export default async function Curso({ params }: CursoProps) {
  return (
    <main>
      <h1>{params.slug.join('/')}</h1>
    </main>
  )
}
