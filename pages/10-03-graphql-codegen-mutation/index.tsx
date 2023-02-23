import { ChangeEvent, useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { IMutation, IMutationCreateBoardArgs } from '../../src/commons/types/generated/types'

const CREATE_BOARD = gql`
mutation createBoard($writer: String, $title: String, $contents: String) { # 변수의 타입 적는곳
    createBoard(writer: $writer, title: $title, contents: $contents){       # 실제 우리가 전달할 변수 적는 곳
        _id
        number
        message
    }
 }
`

const GraphqlMutationInputPage = () => {

    const [writer, setWriter] = useState<string>("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    // result 타입과 variables 타입을 지정해주어야 한다.
    const [나의함수] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD)

    // apollo client 에서 변수를 사용하는 법
    const onClickSubmit = async () => {
        // const writer = "qqq" // 이 함수에 있으면 현재 스코프
        const result = await 나의함수({
            variables: { // variables 이게 $ 역할을 해줌  $writer -> variables: writer: "들어올 변수 값" || writer: {변수}
                writer, // 이 함수에 없으면 스코프 체인을 통해서 위 함수에서 찾음
                title,
                contents
            }
        })
        console.log(result)
        alert(result.data?.createBoard?.message)
    }

    const onChagneWriter = (e: ChangeEvent<HTMLInputElement>) => {
        setWriter(e.target.value)
    }

    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const onChangeContents = (e: ChangeEvent<HTMLInputElement>) => {
        setContents(e.target.value)
    }

    return (
        <>
            작성자 : <input type="text" onChange={onChagneWriter} /> <br />
            제목 : <input type="text" onChange={onChangeTitle} /> <br />
            내용 : <input type="text" onChange={onChangeContents} /> <br />
            <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
        </>
    )
}

export default GraphqlMutationInputPage