import React from 'react'

interface Props {
    children : any
}

const style = {
    
}
function Dashboard(props: Props) {
    return (
        <main className='flex-content'>
             {props.children}
        </main>
    )
}

export default Dashboard
