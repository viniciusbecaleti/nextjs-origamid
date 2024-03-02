import { cookies } from 'next/headers'

export async function GET() {
  const token = cookies().get('token')?.value

  const response = await fetch('https://api.origamid.online/conta/perfil', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const perfil = await response.json()

  return Response.json(perfil)
}
