import './globals.css'
import Footer from '@/components/footer/Footer' 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen">{children}</main>
        <Footer /> {}
      </body>
    </html>
  )
}