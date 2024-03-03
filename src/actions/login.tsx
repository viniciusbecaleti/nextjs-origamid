'use server'

import { cookies } from 'next/headers'

export async function login(username: string, password: string) {
  const response = await fetch('https://api.origamid.online/conta/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })

  if (!response.ok) {
    return {
      status: 401,
      message: 'Usuário ou senha inválidos',
    }
  }

  const { token } = await response.json()

  cookies().set('token', token, {
    secure: true,
    httpOnly: true,
  })

  return {
    status: 200,
    message: 'Usuário logado com sucesso',
  }
}
