import React from 'react'
import Link from 'next/link'
interface Props {
    title: String,
    to: any,


}

function DocumentLink(props: Props) {
    const {} = props

    return (
            <div className='nav-link'>
                <Link href={props.to}>
                    <a>{props.title}</a>
                </Link>
            </div>
    )
}

export default DocumentLink
