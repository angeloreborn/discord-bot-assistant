import React, {useRef} from 'react'
import Image from 'next/image'
interface Props {
    title?:string,
    message?:string,
}

function Popup(props: Props) {
    const {} = props
    const popup = useRef<any>()
    function hidePopup(){
        let popupItem = popup.current as HTMLElement;
        if (popupItem){
            popupItem.classList.add('popup-hide')
            setTimeout(() => {
                popupItem.remove()
            }, 250);
        }    
    }
    return (
        <div ref={popup} className='popup-box'>
            <div className='popup-icon'>
                
            </div>
            <div className='popup-title'>
                <div className='popup-title-text'>
                    {props.title}
                </div>
            </div>
          
            <div className='seperator'></div>
            <div className='popup-message'>{props.message}</div>
            <div onClick={hidePopup} className='popup-close'>
                 ✔            
            </div>
        </div>
    )
}

export default Popup
