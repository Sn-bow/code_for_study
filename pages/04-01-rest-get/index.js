import axios from 'axios'
import { useState } from 'react'

const RestGetPage = () => {
    const [title, setTilte] = useState("")


    // 동기적으로 실행되는 비동기적 arrow 함수
    const onClickAsync = () => {
        const result = axios.get("https://koreanjson.com/posts/1")
        console.log(result)
    }


    // 비동기적으로 실행되는 동기적 arrow 함수
    // arrow function 을 쓰는 이유 => 기존의 function 함수는 중복 선언이 되는 문제점이 있어서 es6 문법인 arrow function 으로 대체되어 사용되기 시작함
    // 물론 지금은 리액트에서 자체적으로 function 을 쓰더라도 중복되는것을 막아주지만 그렇다고해서 (리액트가 막아준다고 해서) function을 쓰는 것보단 
    // arrow function을 사용하는것이 안전성면에서 좋다.
    // axios 를 사용하는 이유는 json 파일은 기본적으로 String 이기때문에 들어온 json 파일에 대해서 json()으로 파싱을 해주어서 객체로 다시 바꿔주어야 하는데 
    //axios 에서 자체적으로 json 파일을 객체로 바꿔주어 많이 사용한다.
    const onClickSync = async () => {
        const result = await axios.get("https://koreanjson.com/posts/1")
        console.log(result)
        console.log(result.data)
        console.log(result.data.title)
        setTilte(result.data.title)
    }

    return (
        <>
            <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
            <button onClick={onClickSync}>REST-API(동기) 요청하기</button>
            <div>{title}</div>
        </>
    )
}

export default RestGetPage;