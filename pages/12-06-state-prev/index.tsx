import { useState } from 'react'

const CounterStatePage = () => {
    const [count, setCount] = useState(0)

    // prevState 임시 저장공간에 있는 데이터를 사용하기 위한 방법
    const onClickCountUp = () => {
        setCount(prevState => prevState + 1)
        setCount(prevState => prevState + 1)
        setCount(prevState => prevState + 1)
        setCount(prevState => prevState + 1)
    }

    return (
        <>
            <div>{count}</div>
            <button onClick={onClickCountUp}>카운트 올리기!!</button>
        </>
    )
}

export default CounterStatePage