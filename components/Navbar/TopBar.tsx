import React, {useState, useRef, useEffect} from 'react'
import Image from 'next/image'
import UserMenu from './../Menu/UserMenu'
import Popup from './../Notification/Popup'
interface Props {}

function TopBar(props: Props) {
    const {} = props

    const [userMenuLayout, setUserMenuLayout] = useState('menu-hidden-no-transition')
    const [userMenuVisible, setUserMenuVisible] =useState(false)
    const [userMenuIconStyle, setUserMenuIconStyle] = useState('top-right-menu')
    const [l1, setL1] = useState<any>('line');
    const [l2, setL2] = useState<any>('line');
    const [l3, setL3] = useState<any>('line');
    const [sideMenuVisible, setSideMenuVisible] = useState(false)
    const userMenu = useRef<any>()

    function toggleUserMenu(){
        if (userMenuVisible === false){
            setUserMenuLayout('menu-show');
            setUserMenuIconStyle('top-right-menu top-right-menu-selected')
            setUserMenuVisible(true)
        }else{
            setUserMenuLayout('menu-hidden');
            setUserMenuIconStyle('top-right-menu')
            setUserMenuVisible(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            if (document.body.clientWidth > 600){
                let g  = document.querySelector('main') as HTMLElement 
                g.style.transitionDuration = '0.5s'
                g.style.transitionTimingFunction = 'cubic-bezier(0.075, 0.82, 0.165, 1)'
                g.style.transform = 'translateX(0)'
            }else{
                let g  = document.querySelector('main') as HTMLElement 
                g.style.transform = 'translateX(-250px)'
            }
        })
    })
   

    function toggleMenuMobile(){
        if (sideMenuVisible === false){
            setL1('line line-1-active')
            setL2('line line-2-active')
            setL3('line line-3-active')
            let g  = document.querySelector('main') as HTMLElement
            g.style.transform = 'translateX(0)'
            setSideMenuVisible(true)
        }else{
            setL1('line')
            setL2('line')
            setL3('line')
            let g  = document.querySelector('main') as HTMLElement
            g.style.transform = 'translateX(-250px)'
            setSideMenuVisible(false)
        }
    }
    return (
        <div className='top-bar'>
               
            <div onClick={toggleMenuMobile} className='top-nav-toggle'>
                    <div className={l1}></div>
                    <div className={l2}></div>
                    <div className={l3}></div>
            </div>
            
            <div className='top-search'>
                <Image className ='top-icon' width="50px" height="30px" src='/search.svg'/>
                <input  className='top-search-input' placeholder='Search' ></input>
            </div>
            
            
            <div ref={userMenu} onClick={toggleUserMenu} className='float-right'>
                <div className={userMenuIconStyle}>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                </div>
            </div>

            <UserMenu layout={userMenuLayout}/>
            <div className='popup-container'>
            <Popup 
                title={"Hey there!"}
                message={"Welcome to Discord Bot Assistant"}
            />
            </div>
 
            
        </div>
    )
}

export default TopBar
