import React, {useState} from 'react'
import Loader from './../components/Loader/SeoCompliantLoader'
interface Props {}

function Assistant(props: Props) {
    const {} = props
    const [loaded, setLoaded] = useState(false)

    setTimeout(() => {
        setLoaded(true)
    }, 1000);

    return (
        <main className='main'>
             <div className='viewport-content-width'></div>
             <h1>Assistant</h1>
             <Loader loaded={loaded}/>
        </main>
       
    )
}

export default Assistant
