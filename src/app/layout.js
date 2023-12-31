import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prodyogiki 2024',
  description: 'ISTE-NITH',
}

export default function RootLayout({ children }) {
  return (
      <html lang='en' data-theme="synthwave">
        <body className={inter.className}>{children}</body>
      </html>
  )
}
