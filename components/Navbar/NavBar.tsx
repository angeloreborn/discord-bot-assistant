import React from 'react'
import Logo from './Logo'
import NavItem from './NavItem'
import Link from 'next/link'

interface Props { }

function SideNav(props: Props) {
    const { } = props

    return (
        <div className='side-nav'>
            <Logo />
            <NavItem to="/dashboard" title='Dashboard' icon='/dashboard.svg' /> 
            <NavItem  to="/assistant"  title='Assistant' icon='/assistant.svg' />
            <NavItem  to="/buildabot"  title='Build a bot' icon='/toolbox.svg' />

            <div className='nav-footer'>
                <div className='nav-link'>
                    <Link href="/privacy_policy">
                        <a>Terms and Conditions</a>
                    </Link>
                </div>
                <div className='nav-link'>
                    <Link href="/privacy_policy">
                        <a>Privacy Policy</a>
                    </Link>
                </div>
            </div>
            <footer> <small>&copy; Copyright 2021, Discord Bot Assistant</small> </footer>
        </div>
    )
}

export default SideNav
