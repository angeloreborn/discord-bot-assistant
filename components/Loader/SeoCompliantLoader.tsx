import React from 'react'

interface Props {}

function SeoCompliantLoader(props: Props) {
    const {} = props

    return (
        <div className='loader'>
            <div className='loading-container'>
                <div className='animation-container'>
                    <div>
                        <div className='square1'></div>
                        <div className='square2'></div>
                    </div>
                    <div>
                        <div className='square3'></div>
                        <div className='square4'></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SeoCompliantLoader