import React from 'react'
import Image from 'next/image'
interface Props {
    title? : string,
    value?: string,
    background? : string,
}

function ValueCard(props: Props) {
    const {title, value} = props

    return (
        <div className='value-card-container 
                        flex-column
                        padding-large
                        border-radius-small
                        dark-shadow'             
                        style={{
                            background:props.background
                        }}>
           
            <div className='flex-column'>
                 <div className='flex-row'>
                    <div>Image</div>
                    <div className='margin-left-auto text-align-right'>
                        <div className='value-card-title'>{title}</div>
                        <div className='value-card-value'>{value}</div>
                    </div>
                 </div>
            </div>
            <div className='seperator'></div>
            <div className='value-card-btn 
                            font-weight-100
                            margin-small
                            border-radius-medium
                            pointable
                            padding-left-medium
                            padding-right-medium
                            padding-bottom-small
                            padding-top-small
                            text-align-center'>
                                View
                            </div>
        </div>
    )
}

export default ValueCard
