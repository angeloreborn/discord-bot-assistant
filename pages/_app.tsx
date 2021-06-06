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
import {useState} from 'react'

function MyApp({ Component, pageProps }: AppProps) {

  const [hideMenu, setHideMenu] = useState(false)
  function hideNav(){
    console.log('hiding navingation')
    setHideMenu(true)
  }
  return (  <Application
    SideComponent={ <SideNav onNavClick={hideNav}/> }
    HeadComponent={ <TopBar hideNav={hideMenu} setHideNav={setHideMenu}/> }
    MainComponent={ <Component {...pageProps} />} /> )
}

export default MyApp
