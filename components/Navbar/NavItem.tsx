import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
interface Props {
    title: string,
    icon: string,
    to:string,
}

function NavItem(props: Props) {
    const { } = props

    return (
        <Link href={props.to}>
        <div className='nav-item'>
            <div>
                <Image width="50px" height="50px" src={props.icon}></Image>
            </div>
            <div>
                {props.title}
            </div>

        </div>
        </Link>
    )
}

export default NavItem
