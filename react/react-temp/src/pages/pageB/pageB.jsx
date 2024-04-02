import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './pageB.less'

export default function PageB () {
    const [show, setShow] = useState(true)
    const onToggle = () => setShow(preShow => !preShow)
    return (
        <div className={'container'}>
            <button onClick={onToggle}>toggle-test</button>
            <div className={'square-wrapper'}>
                <CSSTransition
                    in={show}
                    timeout={500}
                    classNames={'fade'}
                    unmountOnExit={true}
                >
                    <div className='square' />
                </CSSTransition>
            </div>
        </div>
    )
}