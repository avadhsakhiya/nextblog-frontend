import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.scss'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
