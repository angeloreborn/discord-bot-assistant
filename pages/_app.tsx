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

function MyApp({ Component, pageProps }: AppProps) {
  return (  <Application
    SideComponent={ <SideNav/> }
    HeadComponent={ <TopBar/> }
    MainComponent={ <Component {...pageProps} />} /> )
}

export default MyApp
