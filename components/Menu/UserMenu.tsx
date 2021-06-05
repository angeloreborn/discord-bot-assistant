import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
interface Props {
    layout: any
}

function UserMenu(props: Props) {
    const { } = props

    return (
        <div className={`user-menu ${props.layout}`}>
            <Link href='/guest/account'>        
            <div className='user-menu-flex'>
                <div className='user-menu-icon'>
                    <Image width="20px" height="20px" src='/user.svg' />
                </div>
                <div className='user-menu-label'>
                    Account
               </div>
            </div>
            </Link>

            <Link href='/guest/notifications'>
            <div className='user-menu-flex'>
                <div className='user-menu-icon'>
                    <Image width="20px" height="20px" src='/user.svg' />
                </div>
                <div className='user-menu-label'>
                    Notifications
               </div>
            </div>
            </Link>
            <div className='seperator'></div>
            <div className='user-menu-flex'>
                <div className='user-menu-icon'>
                    <Image width="20px" height="20px" src='/user.svg' />
                </div>
                <div className='user-menu-label'>
                    Sign out
               </div>
            </div>
        </div>
    )
}

export default UserMenu
