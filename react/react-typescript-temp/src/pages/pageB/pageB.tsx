import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import { incrementAge } from '../../store/slices/ageSlice'


export default function PageB () {
    const age = useSelector((state: RootState) => state.ager.age)
    const dispatch = useDispatch()

    console.log('pageB+++')
    const [count, setCount] = useState(0)
    const increaseClick = () => {
        setCount(preCount => preCount + 1)
        setCount(preCount => preCount + 1)
        setCount(preCount => preCount + 1)
    }
    let someValue: any = 'so this name'
    let len = (someValue).length

    return (
        <div>
            <button onClick={increaseClick}>pageB{len}</button>
            <button onClick={() => dispatch(incrementAge())}>age increment</button>
            <p>{count}</p>
            <p>age:{age}</p>
        </div>
    )
}