import Link from 'next/link'

export async function Menu() {
  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/produtos">Produtos</Link>
      </li>
      <li>
        <Link href="/produtos/adicionar">Adicionar produto</Link>
      </li>
      <li>
        <Link href="/animais">Animais</Link>
      </li>
    </ul>
  )
}
