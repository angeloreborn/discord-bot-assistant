import React from 'react'

interface Props {
    title : string,
    children? : any,
}

function Dashboard(props: Props) {
    const {title, children} = props

    return (
        <main className='relative'>
            <h1 className='padding-left-large'>{title}</h1>
            <div className='flex-row flex-wrap relative'>
                {children}
            </div>
        </main>
    )
}

export default Dashboard
