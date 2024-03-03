'use server'

import { cookies } from 'next/headers'

export async function getCookie(key: string) {
  const cookieValue = cookies().get(key)?.value

  return cookieValue
}
