import React from 'react'

interface Props {
    Logo : React.ReactNode
    NavItems : React.ReactNode[]
    Footer : React.ReactNode
}

function Aside(props: Props) {
    const {
        Logo, 
        NavItems, 
        Footer
    } = props

    return (
        <aside 
        className="flex-column
                   flex-align-center
                   flex-no-shrink
                   height-100
                   auto-overflow-y
                   z8">
            {Logo}
            {NavItems}
            {Footer}
        </aside>
    )
}

export default Aside
