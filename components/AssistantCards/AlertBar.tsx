import React from 'react'

interface Props {}

function AlertBar(props: Props) {
    const {} = props

    return (
        <div className='alert-bar-container 
        flex-row
        padding-large
        border-radius-small
        flex-align-center
        dark-shadow'             
        >
         <img className='image-small padding-small' src={'/robot.svg'}/>
           <div className='padding-left-small'>
           Join now to become an Assistant
            </div>
            <div className='btn-join 
                            margin-left-auto 
                            dark-shadow
                            padding-left-medium
                            padding-right-medium
                            padding-top-small
                            padding-bottom-small
                            border-radius-small
                            pointable
                            flex-no-shrink'>
                Join Now
            </div> 
        </div>
    )
}

export default AlertBar
