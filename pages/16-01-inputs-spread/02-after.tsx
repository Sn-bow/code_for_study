import { ChangeEvent, useState } from 'react'
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

const GraphqlMutationInputPage = () => {
    const [inputs, setInputs] = useState({
        writer: '',
        title: '',
        contents: ''
    })

    const [나의함수] = useMutation(CREATE_BOARD)

    // apollo client 에서 변수를 사용하는 법
    const onClickSubmit = async () => {
        // const writer = "qqq" // 이 함수에 있으면 현재 스코프
        const result = await 나의함수({
            variables: { // variables 이게 $ 역할을 해줌  $writer -> variables: writer: "들어올 변수 값" || writer: {변수}
                ...inputs // 이 함수에 없으면 스코프 체인을 통해서 위 함수에서 찾음
            }
        })
        alert(result.data.createBoard.message)
    }

    const onChagne = (e: ChangeEvent<HTMLInputElement>) => {
        setInputs({
            // writer: inputs.writer,
            // title: inputs.title,
            // contents: inputs.contents,
            ...inputs,
            // key 에 대괄호([])를 사용하게되면 배열이 아닌, 자바스크립트 변수를 사용할때 사용한다.
            [e.target.id]: e.target.value
        })
    }

    return (
        <>
            작성자 : <input id='writer' type="text" onChange={onChagne} /> <br />
            제목 : <input id='title' type="text" onChange={onChagne} /> <br />
            내용 : <input id='contents' type="text" onChange={onChagne} /> <br />
            <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
        </>
    )
}

export default GraphqlMutationInputPage



