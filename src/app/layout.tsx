import type { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'

import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

import { Menu } from '@/components/menu'
import { fontBody } from './fonts'

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
      <body className={`${fontBody.className} ${fontBody.variable}`}>
        <Menu />
        {children}
        <ToastContainer />
      </body>
    </html>
  )
}
