'use client'

import { FormEvent, useState } from 'react'

import { login } from '@/actions/login'

export function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(event: FormEvent) {
    event.preventDefault()

    try {
      setLoading(true)

      const response = await login(username, password)

      if (response.status !== 200) {
        setError(response.message)
        return
      }

      window.location.href = '/'
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleLogin}>
      {error && <p style={{ color: '#b00' }}>{error}</p>}

      <label>
        <span>Usuário</span>
        <input
          type="text"
          required
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
      </label>

      <label>
        <span>Senha</span>
        <input
          type="password"
          required
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </label>

      <button type="submit" disabled={loading}>
        {loading ? 'Carregando...' : 'Entrar'}
      </button>
    </form>
  )
}
