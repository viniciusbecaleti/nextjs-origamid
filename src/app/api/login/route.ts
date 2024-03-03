import { NextRequest } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  const { username, password } = await request.json()

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
    return Response.json(
      {
        message: 'Usuário ou senha inválidos',
      },
      {
        status: 401,
      },
    )
  }

  const { token } = await response.json()

  cookies().set('token', token, {
    secure: true,
    httpOnly: true,
  })

  return Response.json(
    {
      message: 'Usuário logado com sucesso',
    },
    {
      status: 200,
    },
  )
}
