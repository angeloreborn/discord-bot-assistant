import React from 'react'

interface Props {
    children : any
}

const style = {
    
}
function Dashboard(props: Props) {
    return (
        <section>
             {props.children}
        </section>
    )
}

export default Dashboard
