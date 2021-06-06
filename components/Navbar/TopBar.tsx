import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import UserMenu from './../Menu/UserMenu'
import Popup from './../Notification/Popup'
import UserMenuLink from '../Menu/UserMenuLink'
import Seperator from '../Layout/Seperator'
interface Props { }

function TopBar(props: Props) {
    const { } = props
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

    const [userMenuVisible, setUserMenuVisible] = useState(false)
    const [sideMenuVisible, setSideMenuVisible] = useState(false)
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
    return (
        <header className='flex-row padding-top-small'>

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
