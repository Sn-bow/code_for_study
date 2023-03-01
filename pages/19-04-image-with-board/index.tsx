import { ChangeEvent, useRef, useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { IMutation, IMutationUploadFileArgs } from '../../src/commons/types/generated/types'
import { checkValidationFile } from '../../src/commons/libraries/validationFile'

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) { 
        createBoard(createBoardInput: $createBoardInput){       
            _id
        }
    }
`

const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!){
        uploadFile(file: $file){
            url
        }
    }    
`

const GraphqlMutationInputPage = () => {
    const fileRef = useRef<HTMLInputElement>(null)

    const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE)

    const [imageUrl, setImageUrl] = useState('')

    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const [나의함수] = useMutation(CREATE_BOARD)

    const onClickImage = () => {
        fileRef.current?.click();
    }

    const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]  // <input type='file' multiple /> 속성으로 여러개 드래그 가능
        console.log(file)

        const isValid = checkValidationFile(file)
        if (!isValid) return

        try {
            const result = await uploadFile({ variables: { file } })
            console.log(result)
            console.log(result.data?.uploadFile.url)
            setImageUrl(result.data?.uploadFile.url ?? "")
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message)
            }
        }
    }

    // apollo client 에서 변수를 사용하는 법
    const onClickSubmit = async () => {
        // const writer = "qqq" // 이 함수에 있으면 현재 스코프
        const result = await 나의함수({
            variables: {
                createBoardInput: {
                    writer,
                    password: "1234",
                    title,
                    contents,
                    images: [imageUrl]
                }
            }
        })
        console.log(result)
        // alert(result.data.createBoard.message)
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
            <>
                <div
                    style={{ width: '50px', height: "50px", backgroundColor: "gray" }}
                    onClick={onClickImage}
                >
                    이미지 선택
                </div>
                <input
                    type='file'
                    onChange={onChangeFile}
                    multiple
                    style={{ display: "none" }}
                    ref={fileRef}
                />
                <img
                    src={`https://storage.googleapis.com/${imageUrl}`}
                    style={{ width: '100px', height: '100px' }}
                />
            </>
            <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
        </>
    )
}

export default GraphqlMutationInputPage