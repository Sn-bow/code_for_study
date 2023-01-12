import { useState } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'

const BoardWrite = ({ isEdit, data }) => {
    const router = useRouter()
    const [myColor, setMyColor] = useState(false)

    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const [나의함수] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)

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
        router.push(`/09-01-board/${result.data.createBoard.number}`)
    }

    // mutation 할때, 변경된 값만 백엔드에 전송해주기
    const onClickUpdate = async () => {
        try {
            const myvariables = {
                number: Number(router.query.number)
            }
            if (writer) myvariables.writer = writer
            if (title) myvariables.title = title
            if (contents) myvariables.contents = contents

            // 1. 수정하기 뮤테이션 날리기
            const update = await updateBoard({
                variables: myvariables
            })
            // 2. 상세페이지로 이동하기
            alert(update.data.updateBoard.message)
            // 수정하기 페이지에서 작동하는 함수이기 때문에 router.query.number 로 값을 가지고 올 수 있다.
            // router.push(`/08-05-board/${router.query.number}`)
            router.push(`/09-01-board/${update.data.updateBoard.number}`)
        } catch (error) {
            console.error(error.message)
            console.log(error.message)
            alert(error.message)
        }

    }

    const onChangeWriter = (e) => {
        setWriter(e.target.value)
        if (e.target.value && title && contents) {
            setMyColor(true)
        }
    }

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
        if (writer && e.target.value && contents) {
            setMyColor(true)
        }
    }

    const onChangeContents = (e) => {
        setContents(e.target.value)
        if (writer && title && e.target.value) {
            setMyColor(true)
        }
    }

    return (
        <>
            <BoardWriteUI
                onClickSubmit={onClickSubmit}
                onClickUpdate={onClickUpdate}
                onChangeWriter={onChangeWriter}
                onChangeTitle={onChangeTitle}
                onChangeContents={onChangeContents}
                myColor={myColor}
                setMyColor={setMyColor}
                isEdit={isEdit}
                writer={writer}
                contents={contents}
                title={title}
                data={data}
            />
        </>
    )
}

export default BoardWrite;