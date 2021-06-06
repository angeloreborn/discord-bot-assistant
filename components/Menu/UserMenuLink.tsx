import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
interface Props {
    to: string,
    icon: string,
    title: string,
    onNavigate: any,
}

function UserMenuLink(props: Props) {
    const {to, 
           icon, 
           title,
           onNavigate   
        } = props

    return (
        <Link href={to}>        
        <div className='user-menu-link
                        flex-row 
                        flex-align-center
                        padding-small
                        margin-small
                        border-radius-medium
                        pointable'
                    onClick={()=>onNavigate()}>
            <div className='padding-left-small'>
                <Image width="18px" height="18px" src={icon} />
            </div>
            <div className='margin-small padding-left-small'>
                {title}
           </div>
        </div>
        </Link>
    )
}

export default UserMenuLink
