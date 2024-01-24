"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import { usePathname } from 'next/navigation'
import Footer from './components/Footer/Footer';
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  const pathname = usePathname()
     console.log(pathname)
     return (
          <html lang='en' style={{ backgroundColor: "rgb(30, 0, 60)" }} className='relative'>
               <body className={`${inter.className} h-auto ${pathname==="/" ? "":"bg-all"}`} >{children}
               </body>
               <Footer />
          </html>
     )
}
