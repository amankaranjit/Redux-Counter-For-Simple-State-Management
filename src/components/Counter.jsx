import { useDispatch, useSelector } from "react-redux"
import { decreaseCounter, increaseCounter } from "../features/counterSlice"

const Counter = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector((store) => store.counter.counter)
    const handleClick = () => {
        counterValue >= 1 && dispatch(increaseCounter())
    }
    return (
        <div className="counter-wrapper">
            <h1>Counter</h1>
            <button onClick={handleClick}>-</button>
            <span>{counterValue}</span>
            <button onClick={() => dispatch(increaseCounter())}>+</button>
        </div>

    )
}
export default Counter