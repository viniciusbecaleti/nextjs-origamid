'use client'

import { FormEvent, useState } from 'react'

export function Calcular() {
  const [imc, setImc] = useState<string | null>(null)
  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')

  function handleCalcularImc(event: FormEvent) {
    event.preventDefault()

    const alturaMetro = Number(altura) / 100

    const imc = (Number(peso) / (alturaMetro * alturaMetro)).toFixed(2)

    setImc(imc)
  }

  return (
    <>
      <form onSubmit={handleCalcularImc}>
        <label>
          <span>Altura</span>
          <input
            type="string"
            required
            value={altura}
            onChange={({ target }) => {
              const isNumber = !isNaN(Number(target.value))

              if (!isNumber) {
                return
              }

              setAltura(target.value)
            }}
          />
        </label>

        <label>
          <span>Peso</span>
          <input
            type="string"
            required
            value={peso}
            onChange={({ target }) => {
              const isNumber = !isNaN(Number(target.value))

              if (!isNumber) {
                return
              }

              setPeso(target.value)
            }}
          />
        </label>

        <button type="submit">Calcular</button>
      </form>

      {imc && <p>IMC: {imc}</p>}
    </>
  )
}
