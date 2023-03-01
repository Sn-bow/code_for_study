import { gql, useMutation } from '@apollo/client'
import { ChangeEvent, useRef, useState } from 'react'
import { IMutation, IMutationUploadFileArgs } from '../../src/commons/types/generated/types'

const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!){
        uploadFile(file: $file){
            url
        }
    }    

`

export default function ImageUploadPage() {
    const fileRef = useRef<HTMLInputElement>(null)

    const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE)

    const [imageUrl, setImageUrl] = useState('')

    const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]  // multiple 속성으로 여러개 드래그 가능

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

    const onClickImage = () => {
        fileRef.current?.click();
    }

    return (
        <>
            <div style={{ width: '50px', height: "50px", backgroundColor: "gray" }} onClick={onClickImage}>이미지 선택</div>
            <input type='file' onChange={onChangeFile} multiple style={{ display: "none" }} ref={fileRef} />
            <img src={`https://storage.googleapis.com/${imageUrl}`} />
        </>
    )
}