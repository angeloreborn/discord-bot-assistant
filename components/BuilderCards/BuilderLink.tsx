import React from 'react'
import Link from 'next/link'
interface Props {
    to: string,
    title: string,
    icon?: string,
}

function BuilderLink(props: Props) {
    const { to, title, icon } = props

    return (
        <Link href={to}>
            <div className='build-link 
                            padding-left-large
                            padding-right-large
                            padding-top-medium
                            padding-bottom-medium
                            margin-left-large 
                            border-radius-small
                            dark-shadow
                            pointable
                            '>
                {title}
            </div>
        </Link>

    )
}

export default BuilderLink
