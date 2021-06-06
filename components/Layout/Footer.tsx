import React from 'react'

interface Props {
    ApplicationName: String
    DocumentLinks: React.ReactNode[]
}

function Footer(props: Props) {
    const {ApplicationName, DocumentLinks} = props
    const year = new Date().getFullYear()
    return (
    <footer className='flex-column flex-align-center margin-top-auto'> 
        {DocumentLinks}
        <small>&copy; Copyright {year}, {ApplicationName}</small> 
    </footer>
    )
       
    
}

export default Footer
