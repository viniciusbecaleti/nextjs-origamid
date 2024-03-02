import fs from 'node:fs/promises'

export async function Acesso() {
  await fs.appendFile('acesso.txt', `${Date.now()}\n`, 'utf8')

  const data = await fs.readFile('acesso.txt', 'utf8')

  return <div>{data}</div>
}
