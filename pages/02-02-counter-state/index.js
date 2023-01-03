import { useState } from 'react'

const CounterStatePage = () => {
    const [count, setCount] = useState(0)

    const onClickCountUp = () => {
        setCount(count + 1)
    }

    const onClickCountDown = () => {
        setCount(count - 1)
    }

    return (
        <>
            <div>{count}</div>
            <button onClick={onClickCountUp}>카운트 올리기!!</button>
            <button onClick={onClickCountDown}>카운트 내리기!!</button>
        </>
    )
}

export default CounterStatePage