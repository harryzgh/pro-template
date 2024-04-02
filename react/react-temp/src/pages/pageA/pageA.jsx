import { useRef } from 'react'
import { useSelector } from 'react-redux'
import PageB from '../pageB/pageB'


export default function PageA () {
    console.log('PageA+++')
    const count = useSelector(state => state.counter.num)
    let num = useRef(0)
    let count1 = 0
    const increaseNum = () => {
        num.current = num.current + 1
        count1 = count1+1
        console.log('num++++', num, count1)
    }
    return (
        <div>
            <p>
                {count - 1}
            </p>
            <button onClick={increaseNum}>测试state</button>
            <PageB />
        </div>
    )
}