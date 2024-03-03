'use client'

import { setCookie } from '@/actions/set-cookie'

export default function Home() {
  function handleClick() {
    alert('ok')
    setCookie('test', '123456')
  }

  return (
    <main>
      <h1>Home</h1>
      <button onClick={handleClick}>Click me</button>
    </main>
  )
}
