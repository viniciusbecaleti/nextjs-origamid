import { Roboto } from 'next/font/google'

export const fontBody = Roboto({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})
