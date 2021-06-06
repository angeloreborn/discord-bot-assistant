import React from 'react'
import Image from 'next/image'
interface Props { }

function Logo(props: Props) {
    const { } = props
    const style = {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '10px',
        paddingRight: '10px',
        color: 'rgb(240,240,240)'
    }
    return (
        <div className='padding-medium'>
            <h1 className='font-weight-400 font-size-large'>Discord</h1>
            <h1 className='font-weight-100 font-size-small'>Bot Assistance</h1>
        </div>

    )
}

export default Logo
