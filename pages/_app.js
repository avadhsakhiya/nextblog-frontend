import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.scss'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { useRouter } from 'next/router'
import AdminSidebar from './Components/adminsidebar'

export default function App({ Component, pageProps }, props) {
  const router = useRouter()

  console.log(router);
  return (
    <>
      {!router.pathname.includes("/admin") &&
        <>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </>
      }
      {router.pathname.includes("/admin") &&
        <div>
          <AdminSidebar/>
          <Component {...pageProps} />
        </div>
      }
    </>
  )
}
