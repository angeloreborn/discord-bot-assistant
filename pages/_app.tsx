import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/notification.css'
import '../styles/dashboard.css'
import '../styles/loader.css'
import type { AppProps } from 'next/app'

import SideNav from '../components/Navbar/NavBar'
import Dashboard from '../components/Layout/Dashboard'
import TopBar from './../components/Navbar/TopBar'
function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Dashboard>
    <SideNav />
    <section className='content-viewport-width'>
      <TopBar></TopBar>
     <Component {...pageProps} />
    </section>
  </Dashboard>
  )
}
export default MyApp
