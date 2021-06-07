import React, { useState } from 'react'
import Loader from '../components/Loader/SeoCompliantLoader'
import Dashboard from '../components/Layout/Dashboard'

import NotificationCard from '../components/Layout/NotificationCard'
import BuilderMenu from '../components/BuilderCards/BuilderMenu'
import BuilderLink from '../components/BuilderCards/BuilderLink'
interface Props { }

function Build(props: Props) {
    const { } = props

    return (
        <Dashboard title='Builder'>
            <BuilderLink
                to={'/builder/new'}
                title={'Build a bot'}
            />
            <BuilderLink
                to={'/builder/new'}
                title={'Manage bots'}
            />

            

           
            <div className='notification 
                        padding-large
                        border-radius-small
                        margin-left-large
                        margin-top-large
                        margin-bottom-large'>

                <h3 className='padding-medium'>About builder</h3>
                <div className='flex-col'>
                    <div className='padding-medium'>
                        Builder offers tools to create and manage discord bots using <b>Discord Bot Assistant Framework</b>. Follow the steps in <b>Build a bot</b> to have your very own discord bot up and running in no time.
                </div>
                </div>
            </div>

            <div className='notification 
                        padding-large
                        border-radius-small
                        margin-left-large
                        margin-top-large
                        margin-bottom-large'>            
                <h3 className='padding-medium'>6 Steps in building a bot</h3>
                <div className='flex-col'>
                    <div className='step-row
                                    flex-row 
                                    flex-align-center
                                    border-radius-small
                                    margin-small'>
                        <div className='step-icon
                                        border-radius-round
                                        font-size-large
                                        padding-large'>1
                                        </div>
                        <div className='padding-small'>Create a bot</div>
                    </div>

                    <div className='step-row
                                    flex-row 
                                    flex-align-center
                                    border-radius-small
                                    margin-small'>
                        <div className='step-icon
                                        border-radius-round
                                        font-size-large
                                        padding-large'>2
                                        </div>
                        <div className='padding-small'>Configure bot Commands</div>
                    </div>

                    <div className='step-row
                                    flex-row 
                                    flex-align-center
                                    border-radius-small
                                    margin-small'>
                        <div className='step-icon
                                        border-radius-round
                                        font-size-large
                                        padding-large'>3
                                        </div>
                        <div className='padding-small'>Connect your bot to Discord</div>
                    </div>

                    <div className='step-row
                                    flex-row 
                                    flex-align-center
                                    border-radius-small
                                    margin-small'>
                        <div className='step-icon
                                        border-radius-round
                                        font-size-large
                                        padding-large'>4
                                        </div>
                        <div className='padding-small'>Select Hosting Service and Location</div>
                    </div>

                    <div className='step-row
                                    flex-row 
                                    flex-align-center
                                    border-radius-small
                                    margin-small'>
                        <div className='step-icon
                                        border-radius-round
                                        font-size-large
                                        padding-large'>5
                                        </div>
                        <div className='padding-small'>Invite your bot to your Guild</div>
                    </div>

                    <div className='step-row
                                    flex-row 
                                    flex-align-center
                                    border-radius-small
                                    margin-small'>
                        <div className='step-icon
                                        border-radius-round
                                        font-size-large
                                        padding-large'>6
                                        </div>
                        <div className='padding-small'>Start your bot</div>
                    </div>
                    
                </div>
            </div>
        </Dashboard>
    )
}

export default Build
