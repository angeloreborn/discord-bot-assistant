import React, {useState} from 'react'
import Loader from './../components/Loader/SeoCompliantLoader'
import Dashboard from '../components/Layout/Dashboard'

interface Props {}

function Assistant(props: Props) {
    const {} = props
    const [loaded, setLoaded] = useState(false)

    setTimeout(() => {
        setLoaded(true)
    }, 1000);

    return (
        <Dashboard title='Assistant'>
             <Loader loaded={loaded}/>
        </Dashboard>
       
    )
}

export default Assistant
