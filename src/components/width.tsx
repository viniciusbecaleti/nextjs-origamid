'use client'

import { useEffect, useState } from 'react'

export function Width() {
  const [width, setWidth] = useState(0)
  const [ativo, setAtivo] = useState(false)

  useEffect(() => {
    const handleResize = () => setWidth(document.documentElement.clientWidth)

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div>
      <h2 style={{ color: ativo ? '#680' : '#b00' }}>
        Largura da tela: {width}
      </h2>
      <button onClick={() => setAtivo((prev) => !prev)}>
        {ativo ? 'Desativar' : 'Ativar'}
      </button>
    </div>
  )
}
