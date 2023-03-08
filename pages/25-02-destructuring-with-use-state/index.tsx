import { useState } from 'react'

const CounterStatePage = () => {
    const result = useState(0)

    const onClickCountUp = () => {
        result[1](prev => prev + 1)
    }

    const onClickCountDown = () => {
        if (result[0] > 0) result[1](prev => prev - 1)
    }

    return (
        <>
            <div>{result[0]}</div>
            <button onClick={onClickCountUp}>카운트 올리기!!</button>
            <button onClick={onClickCountDown}>카운트 내리기!!</button>
        </>
    )
}

export default CounterStatePage