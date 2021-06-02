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
        <div className='logo'>
            <div className='logo-text'>
                <div className='logo-img'>
                   
                </div>
                <div>
                    <h1 className='logo-main-text'>Discord</h1>
                    <h1 className='logo-sub-text'>Bot Assistance</h1>
                </div>
            </div>
        </div>

    )
}

export default Logo
