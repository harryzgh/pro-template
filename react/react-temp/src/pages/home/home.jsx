import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../../store/slices/counterSlice'
import PageA from '../pageA/pageA'

function debounce(fn, delay=1000) {  
    let timer = null
    console.log('arguments++++++++++00', arguments)      

    return function () {    
        if (timer) {      
            clearTimeout(timer)    
        }    
        timer = setTimeout(() => {
            console.log('arguments++++++++++22', arguments)      
            fn.apply(this, arguments);      
            timer = null;    
        }, delay) 
    }
}

function throttle(fn, delay=1000) {  
    let timer = null
    console.log('arguments++++++++++00', arguments)      
    return function () {    
        if (timer) return  
        timer = setTimeout(() => {   
            console.log('arguments++++++++++22', arguments)      
            fn.apply(this, arguments);      
            timer = null  
        }, delay) 
    }
}

const keyUpEvent = (e) => {
    console.log(e)
}

export default function Home () {
    const count = useSelector(state => state.counter.num)
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <input type="text" onKeyUp={throttle(keyUpEvent)}/>
                <p>{count}</p>
                <button aria-label="Increment value" onClick={() => dispatch(increment())}>change count</button>
                <div>
                    <PageA />
                </div>
            </div>
        </div>
    )
}