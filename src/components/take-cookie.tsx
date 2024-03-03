'use client'

import { getCookie } from '@/actions/get-cookie'
import { useState } from 'react'

export function TakeCookie() {
  const [cookieValue, setCookieValue] = useState('')

  async function handleTakeCookie() {
    const token = await getCookie('token')

    if (!token) {
      return
    }

    setCookieValue(token)
  }

  return (
    <div>
      <h2>Cookie Value: {cookieValue}</h2>

      <button onClick={handleTakeCookie}>Pegar Cookie</button>
    </div>
  )
}
