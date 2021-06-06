import React from 'react'

interface Props {
    theme: SeperatorColor
}

type SeperatorColor = 'light' | 'dark'

function Seperator(props: Props) {
    const {theme} = props

    if (theme === 'light'){
        return (<div className='seperator-light'></div> )
    }else
    if (theme === 'dark'){
        return (<div className='seperator-dark'></div> )
    }else
    return (<div className='seperator-dark'></div> )
}

export default Seperator
