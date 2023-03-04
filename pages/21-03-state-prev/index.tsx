import { useState } from 'react'

export default function StatePrevPage() {
    const [count, setCount] = useState(0)

    const onClickCountUp = () => {

        // 1. 화살표 함수
        setCount(prev => prev + 1);

        // 2. 함수 선언식
        setCount(function (prev) {
            return prev + 1
        })

        // 3. 함수안에 로직 넣기
        setCount((prev) => {
            // 로직 추가 가능
            // if() 등
            // for() 등
            // ...$$

            return prev + 1
        })

        // 4. 매개변수 바꿔보기
        setCount((dsafef) => dsafef + 1)
    }

    return (
        <>
            <div>{count}</div>
            <button onClick={onClickCountUp}>카운트 올리기!!</button>
        </>
    )
}