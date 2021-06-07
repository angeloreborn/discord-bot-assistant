import React, {useEffect} from 'react'

interface Props {
    SideComponent : any,
    MainComponent : any,
    HeadComponent : any,
    children: any,
}

// Applacation layers components horizontally

const applicationStyle = {
    display: 'flex',
    height: '100%',
}
const mainStyle = {
    width: '100%',
}

function Application(props: Props) {
    const {} = props
    return (
        <div className='application' style={applicationStyle}>
            {props.SideComponent}
            <div className='application-main'>
            {props.HeadComponent}
                <div className='content'>
                    {props.MainComponent}
                </div>
               
            </div>
            {props.children}
        </div>
    )
}
export default Application
