import React, { useState } from 'react'
import ValueCard from './../components/DashboardCards/ValueCard'
import LargeCard from './../components/DashboardCards/LargeCard'
import Loader from './../components/Loader/SeoCompliantLoader'

import Dash from '../components/Layout/Dashboard'
import Seperator from '../components/Layout/Seperator'
import DashTitle from '../components/DashboardCards/DashTitle'
interface Props {}

function Dashboard(props: Props) {
    const {} = props
    const [loaded, setLoaded] = useState<boolean>(false)

    setTimeout(() => {
        setLoaded(true)
    }, 1000);
    return (
        <Dash title='Dashboard'>
            <ValueCard/>
            <ValueCard/>
            <ValueCard/>
            <ValueCard/>
            <LargeCard/>
            <Loader loaded={loaded}/>
        </Dash>
      
    // <main className='main'>
    //     <h1 className='main-title'>Dashboard</h1>
    //     <div className='dash-flex'>

    //     </div>
    //     
    // </main>
       
    )
}

export default Dashboard
