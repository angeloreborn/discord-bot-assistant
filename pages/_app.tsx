import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/notification.css'
import '../styles/dashboard.css'
import '../styles/loader.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'

import SideNav from '../components/Navbar/NavBar'
import Dashboard from '../components/Layout/Dashboard'
import TopBar from './../components/Navbar/TopBar'
function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Dashboard>
    <SideNav />
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <section className='content-viewport-width'>
      <TopBar></TopBar>
     <Component {...pageProps} />
    </section>
  </Dashboard>
  )
}
export default MyApp
