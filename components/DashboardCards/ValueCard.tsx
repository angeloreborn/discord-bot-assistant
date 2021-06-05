import React from 'react'
import Image from 'next/image'
interface Props {}

function ValueCard(props: Props) {
    const {} = props

    return (
        <div className='value-card-container'>
            <div>Image</div>
            <div className='value-card-right-column'>
                <div className='value-card-title'>Acive Bots</div>
                <div className='value-card-value'>615 000</div>
            </div>
            <div className='seperator'></div>
            <div className='value-card-btn'>View</div>
        </div>
    )
}

export default ValueCard
