import { gql, useMutation } from '@apollo/client'

const CREATE_BOARD = gql`
mutation createBoard($writer: String, $title: String, $contents: String) { # 변수의 타입 적는곳
    createBoard(writer: $writer, title: $title, contents: $contents){       # 실제 우리가 전달할 변수 적는 곳
        _id
        number
        message
    }
 }
`

const GraphqlMutationArgsPage = () => {
    const [나의함수] = useMutation(CREATE_BOARD)

    // apollo client 에서 변수를 사용하는 법
    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables: { // variables 이게 $ 역할을 해줌  $writer -> variables: writer: "들어올 변수 값" || writer: {변수}
                writer: "훈이",
                title: "안녕하세요!!",
                contents: "반갑습니다!"
            }
        })
        console.log(result)
        alert(result.data.createBoard.message)
    }
    return (
        <>
            <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
        </>
    )
}

export default GraphqlMutationArgsPage