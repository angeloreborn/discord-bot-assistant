import React from 'react'
import Image from 'next/image'
interface Props {
    layout: any
}

function UserMenu(props: Props) {
    const { } = props

    return (
        <div className={`user-menu ${props.layout}`}>
            <div className='user-menu-flex'>
                <div className='user-menu-icon'>
                    <Image width="20px" height="20px" src='/user.svg' />
                </div>
                <div className='user-menu-label'>
                    Account
               </div>
            </div>
            <div className='user-menu-flex'>
                <div className='user-menu-icon'>
                    <Image width="20px" height="20px" src='/user.svg' />
                </div>
                <div className='user-menu-label'>
                    Alerts
               </div>
            </div>
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
