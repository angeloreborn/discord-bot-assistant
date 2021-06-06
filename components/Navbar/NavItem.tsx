import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
interface Props {
    title: string,
    icon: string,
    to: string,
}
function hideOnMobile() {
    console.log(window.innerWidth)
    if (window.innerWidth <= 600) {
        let main_content = document.querySelector('main') as HTMLElement
        main_content.style.transform = 'translateX(-250px)';
    }
}
function NavItem(props: Props) {
    const { } = props

    return (
        <Link href={props.to}>
            <div 
            className='nav-item 
                       flex-column 
                       flex-align-center
                       padding-top-medium
                       padding-bottom-medium
                       margin-small
                       border-radius-medium
                       font-weight-100
                       pointable
                       transition-duration-fast' 
                       onClick={hideOnMobile} >
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
