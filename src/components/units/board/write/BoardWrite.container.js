import { useState } from 'react'
import { useMutation } from '@apollo/client'
import BoardWriteUI from './BoardWrite.presenter'
import CREATE_BOARD from './BoardWrite.queries'

const BoardWrite = () => {
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const [나의함수] = useMutation(CREATE_BOARD)

    // apollo client 에서 변수를 사용하는 법
    const onClickSubmit = async () => {
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
    }

    const onChangeWriter = (e) => {
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
            <BoardWriteUI
                onClickSubmit={onClickSubmit}
                onChangeWriter={onChangeWriter}
                onChangeTitle={onChangeTitle}
                onChangeContents={onChangeContents}
            />
        </>
    )
}

export default BoardWrite;