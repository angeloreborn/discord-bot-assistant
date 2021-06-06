import React from 'react'

interface Props {
    MenuItems: React.ReactNode[]
}

function UserMenu(props: Props) {

  
    return (
        <div  className='user-menu 
                        border-radius-large
                        padding-large
                        z7
                        fixed
                        '
                        >
            {props.MenuItems}
        </div>
    )
}

export default UserMenu
