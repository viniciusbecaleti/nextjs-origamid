'use client'

import { revalidateTagAction } from '@/actions/revalidate-path'

export function Atualizar() {
  function handleClick() {
    revalidateTagAction('acoes')
  }

  return <button onClick={handleClick}>Atualizar</button>
}
