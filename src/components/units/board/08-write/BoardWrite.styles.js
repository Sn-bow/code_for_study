import styled from '@emotion/styled'

export const RedInput = styled.input`
    border-color: red;
`

export const BlueButton = styled.button`
    background-color: ${props => props.aaa ? "yellow" : "red"}; // 1
    /* background-color: ${(props) => {
        return props.aaa
    }}; // 2 */
`
// () => {} 에서 return 과 중괄호 사이에 아무런 식도 존재하지않을때 리턴과 중괄호를 생략하고 () 로 대체 할 수 있고, 특별한 의미가 없으면 () 또한 생략할 수있다.-> //1
// () 생략이 불가능 할때의 예시
// { name : "철수"} 와 같은 객체 형식의 값이 올때
// () 를 생략하게되면 {} 는 객체의 중괄호가 아닌 함수의 중괄호로 바뀌기 때문에 주의하여야 한다.
// ({ name : "철수" }) // o 
