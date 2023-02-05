import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.scss'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import AdminSidebar from './Components/adminsidebar'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const isLogin = false;
  useEffect(()=>{
    {router.pathname.includes("/admin") && isLogin &&
        router.push('/login')
    }
  },[])
  return (
    <>
      {!router.pathname.includes("/admin") && !router.pathname.includes("/login") &&
        <>
          <Navbar />
            <Component {...pageProps} />
          <Footer />
        </>
      }
        {router.pathname.includes("/admin") && !isLogin &&
            <div className='d-flex'>
            <AdminSidebar />
            <div className='w-100 container px-5 vh-100 overflow-auto'>
              <Component {...pageProps} />
            </div>
          </div>
        }
      {router.pathname.includes("/login") &&
         <Component {...pageProps} />
      }
    </>
  )
}
