'use server'

import { Produto } from '@/_types/Produto'
import { revalidatePath } from 'next/cache'

export async function adicionarProduto(data: Produto) {
  const response = await fetch('https://api.origamid.online/produtos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    return {
      error: 'Ocorreu um erro ao adicionar o produto',
    }
  }

  revalidatePath('/produtos')

  return {
    success: 'Produto adicionado com sucesso',
  }
}
