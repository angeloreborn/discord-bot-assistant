import React, {useRef} from 'react'

interface Props { 
    loaded : boolean
}

function SeoCompliantLoader(props: Props) {
    const {} = props
    const loader = useRef<any>()

    if (props.loaded === true){
        let container = loader.current as HTMLElement
        container.classList.add('hide-right')
    }
    return (
        <div ref={loader} className='loader'>
            <div className='loading-container'>
                <div className='animation-container'>
                    <div>
                        <div className='square1'></div>
                        <div className='square2'></div>
                    </div>
                    <div>
                        <div className='square3'></div>
                        <div className='square4'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeoCompliantLoader