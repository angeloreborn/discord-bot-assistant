import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/notification.css'
import type { AppProps } from 'next/app'

import SideNav from '../components/Navbar/NavBar'
import Dashboard from '../components/Layout/Dashboard'
import TopBar from './../components/Navbar/TopBar'
function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Dashboard>
    <SideNav />
    <div className='content'>
      <TopBar></TopBar>
     <Component {...pageProps} />
    </div>

  </Dashboard>
  )
}
export default MyApp
