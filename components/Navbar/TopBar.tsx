import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import UserMenu from './../Menu/UserMenu'
import UserMenuLink from '../Menu/UserMenuLink'
import Seperator from '../Layout/Seperator'
import { useRouter } from 'next/router'
interface Props {
}

function TopBar(props: Props) {
    const line1 = useRef<any>();
    const line2 = useRef<any>();
    const line3 = useRef<any>();

    const [userMenuVisible, setUserMenuVisible] = useState(false)
    const [sideMenuVisible, setSideMenuVisible] = useState(false)
    const [currentRoute, setCurrentRoute] = useState<string>();
    const [isMobile, setIsMobile] = useState(false);

    const route = useRouter()

    const [readyState, setReadyState] = useState(false);

    if (currentRoute != route.pathname && isMobile === true) {
        console.log('navigated')
        showSideMenu(false)
        setCurrentRoute(route.pathname)
    }

    const userMenuIcon = useRef<any>()

    const menuStyleHidden = {
        transform: 'translateY(-80px)',
        opacity: '0',
        pointerEvents: 'none'
    }

    const menuStyleShowing = {
        transform: 'translateY(0)',
        opacity: '1',
        pointerEvents: 'all'
    }

    const [menuStyle, setMenuStyle] = useState<any>(menuStyleHidden);






    function toggleUserMenu() {
        if (userMenuVisible === true) {
            setMenuStyle(menuStyleHidden)
            if (userMenuIcon.current)
                userMenuIcon.current.style.transform = 'rotate(0deg)'
            setUserMenuVisible(false)
        } else {
            setMenuStyle(menuStyleShowing)
            if (userMenuIcon.current)
                userMenuIcon.current.style.transform = 'rotate(90deg)'
            setUserMenuVisible(true)
        }
    }

    // Listen for screen changes
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 600) {
                showSideMenu(false)
                setIsMobile(true)
            } else {
                showSideMenu(true)
                setIsMobile(false)
            }
        })
        // Initalize current route
        setCurrentRoute(route.pathname)
        setReadyState(true)
        let mainWindow = document.querySelector('main');

        mainWindow?.addEventListener('click', () => {
            if (window.innerWidth <= 600) {
                showSideMenu(false)
            }
        })
        window.addEventListener('click', (e: any) => {

        })
    })

    function showSideMenu(show: boolean, mobile?: boolean) {
        if (readyState != true) return
        let first_line = line1.current as HTMLElement
        let second_line = line2.current as HTMLElement
        let third_line = line3.current as HTMLElement
        let body = document.querySelector('.application') as HTMLElement;

        if (show === true) {
            setSideMenuVisible(true)
            first_line.style.transform = 'translateY(10px) rotate(45deg) '
            second_line.style.transform = 'rotate(-45deg)'
            third_line.style.transform = 'translateX(-15px) rotate(90deg)'
            third_line.style.opacity = '0'
            if (window.innerWidth <= 600) {
                if (body) {
                    body.style.transform = 'translateX(0)'
                    body.style.width = 'calc(100% + 255px)'
                }
            } else {
                if (body) {
                    body.style.transform = 'translateX(0)'
                    body.style.width = 'calc(100%)'
                }
            }

        } else {
            setSideMenuVisible(false)
            first_line.style.transform = 'translateY(0) rotate(0) '
            second_line.style.transform = 'rotate(0)'
            third_line.style.transform = 'translateX(0) rotate(0)'
            third_line.style.opacity = '1'
            if (body) {
                body.style.transform = 'translateX(-255px)'
                body.style.width = 'calc(100% + 255px)'
            }
        }
    }

    function toggleSideMenu() {
        if (sideMenuVisible === false) {
            showSideMenu(true)
            setSideMenuVisible(true)
        } else {
            showSideMenu(false)
            setSideMenuVisible(false)
        }
    }

    return (
        <header className='flex-row padding-top-small'>
            <div onClick={toggleSideMenu} className='top-left-menu
                            flex-column 
                            flex-justify-center     
                            flex-align-left
                            margin-left-medium
                            border-radius-round
                            pointable
                            '>
                <div className='line border-radius-large' ref={line1}></div>
                <div className='line border-radius-large' ref={line2}></div>
                <div className='line border-radius-large' ref={line3}></div>

            </div>
            <div className='top-search 
                            flex-row 
                            padding-medium
                            margin-top-small
                            margin-left-large
                            margin-bottom-small
                            margin-right-small
                            border-radius-small'>
                <Image width="50px" height="30px" src='/search.svg' />
                <input className='border-none outline-none' placeholder='Search' ></input>
            </div>


            <div className='top-right-menu
                            flex-column 
                            flex-justify-center
                            flex-align-center
                            flex-no-shrink
                            margin-top-small
                            margin-bottom-small
                            margin-right-small
                            margin-left-auto
                            border-radius-round
                            transition-duration-normal
                            z8
                            pointable'
                ref={userMenuIcon}
                onClick={toggleUserMenu}>
                <div className='dot border-radius-round'></div>
                <div className='dot border-radius-round'></div>
                <div className='dot border-radius-round'></div>
            </div>

            <div className='z7 transition-duration-normal' style={menuStyle}>
                <UserMenu
                    MenuItems={[
                        <UserMenuLink
                            key={'accountLink'}
                            onNavigate={toggleUserMenu}
                            to={'/guest/account'}
                            icon={'/user.svg'}
                            title={'Account'}
                        />,
                        <UserMenuLink
                            key={'notificationLink'}
                            onNavigate={toggleUserMenu}
                            to={'/guest/notifications'}
                            icon={'/user.svg'}
                            title={'Notifications'}
                        />,
                        <Seperator
                            key={'seperator'}
                            theme='dark'
                        />,
                        <UserMenuLink
                            key={'Logout Link'}
                            onNavigate={toggleUserMenu}
                            to={'/signout'}
                            icon={'/user.svg'}
                            title={'Logout'}
                        />
                    ]}
                />
            </div>

            {/* <div className='popup-container'>
                <Popup
                    title={"Hey there!"}
                    message={"Welcome to Discord Bot Assistant"}
                />
            </div> */}
        </header>
    )
}

export default TopBar
