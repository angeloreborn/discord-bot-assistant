import React from 'react'

interface Props {
    message: string,
    icon: string,
    action: string,
}

function NotificationCard(props: Props) {
    const {} = props

    return (
        <div className='notification 
                        padding-large
                        border-radius-small
                        margin-left-large
                        margin-top-large
                        margin-bottom-large'>
            <h3 className='padding-medium'>About builder</h3>
            <div className='flex-col'>
                <div className='padding-medium'>
                 Builder offers tools to create and manage discord bots using <b>Discord Bot Assistant Framework</b>. Follow the steps in <b>Build a bot</b> to have your very own discord bot up and running in no time
                </div>
                <div  className='padding-medium'>
                 Builder offers tools to create and manage discord bots using <b>Discord Bot Assistant Framework</b>
                </div>
            </div>
            
        </div>
    )
}
export default NotificationCard
