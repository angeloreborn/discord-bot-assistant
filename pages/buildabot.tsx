import React, {useState} from 'react'
import Loader from '../components/Loader/SeoCompliantLoader'
interface Props {}

function Build(props: Props) {
    const {} = props
    const [loaded, setLoaded] = useState(false);

    setTimeout(() => {
        setLoaded(true)
    }, 1000);
    return (
        <main className='main'>
            <h1>Build a bot</h1>
            <Loader loaded={loaded}/>
        </main>
    
    )
}

export default Build
