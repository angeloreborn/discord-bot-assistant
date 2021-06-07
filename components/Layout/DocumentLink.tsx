import React from 'react'
import Link from 'next/link'
interface Props {
    title: String,
    to: any,


}

function DocumentLink(props: Props) {
    const {} = props

    return (
                <Link href={props.to}>
                    <a className='nav-link width-100 padding-small pointable'>{props.title}</a>
                </Link>
    )
}

export default DocumentLink
