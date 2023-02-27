import { Component } from 'react'
import Router from "next/router"

export default class ClassCounterPage extends Component {
    state = {
        count: 0
    }

    componentDidMount() {
        // 화면이 다 그려진 후에 실행 되어야 하는 함수 
        console.log('그려지고 나서 실행!!')
    }

    componentDidUpdate() {
        // state가 수정되었을때 -> 리렌더링 되었을때 실행 되어야 하는 함수
        console.log('변경되고 나서 실행!!')
        if (this.state.count % 5 === 0) {
            alert('5의 배수입니다.')
        }
    }

    componentWillUnmount() {
        // 페이지 이동과 같은 작업을 하였을때 컴포넌트가 사라질때 이 함수를 실행 시키고 사라짐
        // 채팅방 나가기 같은 기능들을 해당 함수에서 실행 시킴
        console.log('사라질때 실행!!')
        // 채팅방 나가기 api
    }

    onClickCountUp() {
        // this 는 실행시킨 주체에 따라서 달라진다.
        console.log(this.state.count)
        // arrow 함수에서 () => 이후 {} 는 함수의 중가로 이므로 객체의 중괄호로 사용하기 위해서는 ({}) 소괄호로 감싸야 한다.
        this.setState((prevState: { count: number }) => ({
            count: prevState.count + 1
        })
        )
    }

    onClickMove() {
        void Router.push('/')
    }


    // react 자체에서 화면에 그려주는 함수를 만들어 사용하도록 만들어 둔 함수 -> Component를 상속받아서 render() 함수 사용
    render() {
        return (
            <>
                <div>count : {this.state.count}</div>
                <button onClick={this.onClickCountUp.bind(this)}>마운트 올리기!</button>
                <button onClick={this.onClickMove}>
                    채팅방 나가기!!
                </button>
            </>
        )
    }
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