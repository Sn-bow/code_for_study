import { Component } from 'react'

export default class ClassCounterPage extends Component {
    state = {
        count: 0
    }

    kkk = 50

    onClickCountUp() {
        // this 는 실행시킨 주체에 따라서 달라진다.
        console.log(this.state.count)
        this.setState({
            count: 1
        })
    }

    // react 자체에서 화면에 그려주는 함수를 만들어 사용하도록 만들어 둔 함수 -> Component를 상속받아서 render() 함수 사용
    render() {
        return (
            <>
                <div>count : {this.state.count}</div>
                <button onClick={this.onClickCountUp.bind(this)}>마운트 올리기!</button>
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