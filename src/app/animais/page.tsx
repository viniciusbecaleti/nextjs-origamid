import Image from 'next/image'

import styles from './animais.module.css'

type Animal = {
  id: number
  nome: string
  descricao: string
  imagem: string
}

export default async function AniamaisPage() {
  const response = await fetch('https://api.origamid.online/animais/')
  const animais: Animal[] = await response.json()

  return (
    <div>
      <h1>Animais</h1>

      <ul className={styles.animais}>
        {animais.map((animal) => (
          <li key={animal.id}>
            <h2>{animal.nome}</h2>
            <Image
              src={animal.imagem}
              alt={animal.descricao}
              width={2400}
              height={1600}
              priority={true}
              sizes="(max-width: 600px) 100vw, 50vw"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
