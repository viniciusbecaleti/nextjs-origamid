import Link from 'next/link'

export function Menu() {
  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/sobre#empresa" scroll={false}>
          Sobre
        </Link>
      </li>
      <li>
        <Link href="/contato">Contato</Link>
      </li>
    </ul>
  )
}
