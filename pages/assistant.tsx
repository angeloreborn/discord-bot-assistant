import React, {useState} from 'react'
import Loader from './../components/Loader/SeoCompliantLoader'
import Dashboard from '../components/Layout/Dashboard'

import ValueCard from '../components/DashboardCards/ValueCard'

import AlertBar from '../components/AssistantCards/AlertBar'
interface Props {}

function Assistant(props: Props) {
    const {} = props
 
    return (
        <Dashboard title='Assistant'>

            <AlertBar/>
            <ValueCard title='Waiting Tasks' value={'8'}/>
            <ValueCard title='Pending Tasks' value={'8'}/>
            <ValueCard title='Earnings this month' value={'$480.68'}/>
        </Dashboard>
       
    )
}

export default Assistant
