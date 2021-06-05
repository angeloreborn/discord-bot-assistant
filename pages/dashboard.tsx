import React, { useState } from 'react'
import ValueCard from './../components/DashboardCards/ValueCard'
import LargeCard from './../components/DashboardCards/LargeCard'
import Loader from './../components/Loader/SeoCompliantLoader'
interface Props {}

function Dashboard(props: Props) {
    const {} = props
    const [loaded, setLoaded] = useState<boolean>(false)

    setTimeout(() => {
        setLoaded(true)
    }, 1000);
    return (
    <main className='main'>
        <h1 className='main-title'>Dashboard</h1>
        <div className='dash-flex'>
            <LargeCard></LargeCard>
            <ValueCard></ValueCard>
            <ValueCard></ValueCard>
            <ValueCard></ValueCard>
            <ValueCard></ValueCard>
        </div>
        <Loader loaded={loaded}/>
    </main>
       
    )
}

export default Dashboard
