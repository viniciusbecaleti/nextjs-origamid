import { Acesso } from '@/components/acesso'
import { ClientFetch } from '@/components/client-fetch'

export default async function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Acesso />
      <ClientFetch />
    </main>
  )
}
