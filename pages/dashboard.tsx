import React from 'react'
import ValueCard from './../components/DashboardCards/ValueCard'
import LargeCard from './../components/DashboardCards/LargeCard'
import Loader from './../components/Loader/SeoCompliantLoader'
interface Props {}

function Dashboard(props: Props) {
    const {} = props

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
        <Loader/>
    </main>
       
    )
}

export default Dashboard
