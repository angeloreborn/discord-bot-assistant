import React from 'react'
import Logo from './Logo'
import NavItem from './NavItem'
import Aside from '../Layout/Aside'
import Footer from '../Layout/Footer'
import DocumentLink from '../Layout/DocumentLink'

interface Props { 
  
}

function SideNav(props: Props) {
    return (
        <Aside
            Logo={ <Logo /> }
            NavItems= {[
                <NavItem  to="/dashboard" title='Dashboard' icon='/dashboard.svg' key={'dashboard001'}  />, 
                <NavItem  to="/assistant"  title='Assistant' icon='/assistant.svg' key={'assistant002'} />,
                <NavItem  to="/buildabot"  title='Build a bot' icon='/toolbox.svg' key={'toolbox003'} />,
                <NavItem  to="/hosting"  title='Hosting' icon='/host.svg' key={'host0004'} />,
                <NavItem  to="/courses"  title='Courses' icon='/course.svg' key={'course005'} />
            ]}
            Footer= {<Footer 
                ApplicationName= "Discord Bot Assistant"
                DocumentLinks = {[
                    <DocumentLink
                        key={'doclink1'}
                        title={"Privacy Policy"}
                        to={"/privacy_policy"}
                    />,
                    <DocumentLink
                        key={'doclink2'}
                        title={"Terms of Service"}
                        to={"/tos"}
                    />
                ]}
            />}
        />  
    )
}

export default SideNav
