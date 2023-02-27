import { Component, useEffect, useState } from 'react'
import Router, { useRouter } from "next/router"

export default function ClassCounterPage() {
    // state = {
    //     count: 0
    // }
    const [count, setCount] = useState(0)
    const router = useRouter()

    // // componentDidMount() {
    // //     // 화면이 다 그려진 후에 실행 되어야 하는 함수 
    // //     console.log('그려지고 나서 실행!!')
    // // }
    // useEffect(() => {
    //     console.log('변경되고 나서 실행!!')
    // }, [])

    // // 처음엔 실행 안됨
    // // componentDidUpdate() {
    // //     // state가 수정되었을때 -> 리렌더링 되었을때 실행 되어야 하는 함수
    // //     console.log('변경되고 나서 실행!!')
    // //     if (this.state.count % 5 === 0) {
    // //         alert('5의 배수입니다.')
    // //     }
    // // }
    // useEffect(() => {
    //     console.log('조건을 만족하는 state가 변경되었을때 실행!!')
    // }, [count])


    // // componentWillUnmount() {
    // //     // 페이지 이동과 같은 작업을 하였을때 컴포넌트가 사라질때 이 함수를 실행 시키고 사라짐
    // //     // 채팅방 나가기 같은 기능들을 해당 함수에서 실행 시킴
    // //     console.log('사라질때 실행!!')
    // //     // 채팅방 나가기 api
    // // }
    // useEffect(() => {

    //     // componentWillUnmount() 와 같이 return 안의 함수는 컴포넌트가 사라질때 실행이 된다.
    //     return () => {
    //         console.log('사라질때 실행!!')
    //     }
    // }, [])


    // // useEffect는 componentDidUpdate() 와 같은 기능을함, 변경되고 나서 실행 -> 처음 실행 될때도 변경된걸로 취급되어 실행됨
    // // 조건을 달아줄 수 있음 -> 의존성 배열 dependecncy array
    // useEffect(() => {
    //     console.log('변경되고 나서 실행')
    // }, [count])
    // // 처음에는 무조건 실행이 되고 이후 count가 바뀌었을때 실행이됨

    // 1. 하나로 합치기 가능
    // useEffect(() => {
    //     console.log('그려지고 나서 실행!!')

    //     return () => {
    //         console.log('사라질때 실행!!')
    //     }
    // }, [])

    // useEffect(() => {
    //     console.log("변경되고 나서 실행!!")
    // }) // 의존성 배열을 적지 않으면 무슨 state든 변경이 되었을때 새롭게 렌더링이 된다.

    // 2. useEffect의 잘못된 사용 예제 (1. 추가렌더링 , 2. 무한루프)
    useEffect(() => {
        setCount(prev => prev + 1)
    }, [])


    const onClickCountUp = () => {
        // this 는 실행시킨 주체에 따라서 달라진다.
        console.log(count)
        setCount(prev => prev + 1)
        // this.setState((prevState: { count: number }) => ({
        //     count: prevState.count + 1
        // })
        // )
    }

    const onClickMove = () => {
        // void Router.push('/')
        void router.push('/')
    }


    // react 자체에서 화면에 그려주는 함수를 만들어 사용하도록 만들어 둔 함수 -> Component를 상속받아서 render() 함수 사용
    // render() {
    //     return (
    //         <>
    //             <div>count : {this.state.count}</div>
    //             <button onClick={this.onClickCountUp.bind(this)}>마운트 올리기!</button>
    //             <button onClick={this.onClickMove}>
    //                 채팅방 나가기!!
    //             </button>
    //         </>
    //     )
    // }
    return (
        <>
            <div>count : {count}</div>
            <button onClick={onClickCountUp}>마운트 올리기!</button>
            <button onClick={onClickMove}>
                채팅방 나가기!!
            </button>
        </>
    )
}


// class AAA {
//     power = 50

//     attack() {

//     }
// }
// // 유산 상속
// class BBB extends AAA {
//     run() {

//     }
// }


// const mybbb = new BBB()

// mybbb.power
// mybbb.attack
// mybbb.run