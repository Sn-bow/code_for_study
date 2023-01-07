import { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'

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
    const router = useRouter()

    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const [나의함수] = useMutation(CREATE_BOARD)

    // apollo client 에서 변수를 사용하는 법
    const onClickSubmit = async () => {
        // 백엔드에서 잘못됬을때 에러를 처리하는 방법
        // try 안에있는 내용을 시도하다가 실패하면 아랫줄 모두 무시!!!(중요) 하고 catch가 실행됨
        try {
            // const writer = "qqq" // 이 함수에 있으면 현재 스코프
            const result = await 나의함수({
                variables: { // variables 이게 $ 역할을 해줌  $writer -> variables: writer: "들어올 변수 값" || writer: {변수}
                    writer: writer, // 이 함수에 없으면 스코프 체인을 통해서 위 함수에서 찾음
                    title: title,
                    contents: contents
                }
            })
            console.log(result)
            alert(result.data.createBoard.message)
            console.log(result.data.createBoard.number)
            // 템플릿 리터널 방식 사용 -> `` (백틱)
            router.push(`/05-10-dynamic-routed-board-mutation/${result.data.createBoard.number}`)
        } catch (error) {
            // try 안에있는 내용을 시도하다가 실패하면 아랫줄 모두 무시!!!(중요) 하고 catch가 실행됨
            alert(error.message)
            console.error(error.message)
        }


    }

    const onChagneWriter = (e) => {
        setWriter(e.target.value)
    }

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const onChangeContents = (e) => {
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