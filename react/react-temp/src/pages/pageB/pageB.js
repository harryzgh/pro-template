import { useState } from 'react'
export default function PageB () {
    console.log('pageB+++')
    const [count, setCount] = useState(0)
    const increaseClick = () => {
        setCount(preCount => preCount + 1)
        setCount(preCount => preCount + 1)
        setCount(preCount => preCount + 1)
    }
    return (
        <div>
            <button onClick={increaseClick}>pageB</button>
            <p>{count}</p>
        </div>
    )
}