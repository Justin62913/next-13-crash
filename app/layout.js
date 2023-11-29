import { Poppins } from 'next/font/google'
import Header from './componets/Header'
import './globals.css'

const poppins = Poppins({ weight:['400', '700'],subsets: ['latin'] })

export const metadata = {
  title: 'Justin Media',
  description: 'Justin Media is a software engineer based in the United States.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
          <main className='container'>
            {children}
          </main>
        </body>
    </html>
  )
}
