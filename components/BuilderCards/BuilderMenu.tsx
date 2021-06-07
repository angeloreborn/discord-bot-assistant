import React from 'react'

interface BuilderLinks{
    
}
interface Props {
    children:any
}

function BuilderMenu(props: Props) {
    const {} = props

    return (
        <div className='flex-row padding-left-large'>
            {props.children}
        </div> 
    )
}

export default BuilderMenu
