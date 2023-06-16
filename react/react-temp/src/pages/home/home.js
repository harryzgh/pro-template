import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../../store/slices/counterSlice'
import PageA from '../pageA/pageA'


export default function Home () {
    const count = useSelector(state => state.counter.num)
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <p>{count}</p>
                <button aria-label="Increment value" onClick={() => dispatch(increment())}>change count</button>
                <div>
                    <PageA />
                </div>
            </div>
        </div>
    )
}