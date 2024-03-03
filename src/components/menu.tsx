import { cookies } from 'next/headers'
import Link from 'next/link'

interface Perfil {
  autorizado: boolean
  usuario: string
}

export async function Menu() {
  const token = cookies().get('token')?.value

  const response = await fetch('https://api.origamid.online/conta/perfil', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const perfil: Perfil = await response.json()

  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/sobre">Sobre</Link>
      </li>
      <li>
        <Link href="/contato">Contato</Link>
      </li>
      <li>
        <Link href="/imc">IMC</Link>
      </li>
      <li>
        <Link href="/produtos">Produtos</Link>
      </li>
      <li>
        <Link href="/cursos">Cursos</Link>
      </li>
      <li>
        <Link href="/acoes">Ações</Link>
      </li>
      {!perfil.autorizado && (
        <li>
          <Link href="/login">Entrar</Link>
        </li>
      )}

      {perfil.autorizado && <li>{perfil.usuario}</li>}
    </ul>
  )
}
