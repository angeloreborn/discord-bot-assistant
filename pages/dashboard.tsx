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
            <ValueCard title='Bot Projects' value='8'/>
            <ValueCard title='Hosted Bots' value='2'/>
            <ValueCard title='Users Assisted' value='10'/>
            <ValueCard title='Notifications' value='15'/>
            <LargeCard/>
            <Loader loaded={loaded}/>
        </Dash>      
    )
}

export default Dashboard
