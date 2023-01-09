import styled from '@emotion/styled'

export const RedInput = styled.input`
    border-color: red;
`

export const BlueButton = styled.button`
    background-color: blue;
`
// export & export default 의 차이는 export 는 골라서 받기
// export default 는 그놈만 받기
// 해당 export 들을 전부 받아오고 싶으면 * as 변수명 from ...으로 전체 함수를 받아올 수 있다.
