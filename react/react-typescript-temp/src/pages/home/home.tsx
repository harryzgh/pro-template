import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/slices/counterSlice'
import { RootState } from '../../store/store'
import PageA from '../pageA/pageA'


export default function Home () {
    const count = useSelector((state: RootState) => state.counter.num)
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <p>{count}</p>
                <button aria-label="Increment value" onClick={() => dispatch(increment())}>Increment</button>
                <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>Decrement</button>
                <div>
                    <PageA />
                </div>
            </div>
        </div>
    )
}