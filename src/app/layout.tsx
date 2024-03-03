import type { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'

import { Menu } from '@/components/menu'

import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

export const metadata: Metadata = {
  title: 'Origamid Next',
  description: 'Criado durante o curso de Next.js da Origamid',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Menu />
        {children}
        <ToastContainer />
      </body>
    </html>
  )
}
