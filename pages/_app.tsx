//import '../styles/globals.css'
//import '../styles/navbar.css'
import '../styles/notification.css'
//import '../styles/dashboard.css'
import '../styles/loader.css'

import '../styles/global.min.css'

import type { AppProps } from 'next/app'

import SideNav from '../components/Navbar/NavBar'
import TopBar from './../components/Navbar/TopBar'

import Application from '../components/React/Application'
import { useState, useEffect } from 'react'

import PageLoader from '../components/Loader/PageLoader'


function MyApp({ Component, pageProps }: AppProps) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let interval = setInterval(() => {
      if (document.readyState === 'complete') {
       
        clearInterval(interval)
        setTimeout(() => {
          setLoaded(true)
        }, 2000);
        
      }
    }, 1)
  }, [])

return (<>
  <Application
    SideComponent={<SideNav />}
    HeadComponent={<TopBar />}
    MainComponent={<Component {...pageProps} />}>
  </Application>
  <PageLoader loaded={loaded} />
</>
)
}

export default MyApp
