import { useForm } from 'react-hook-form'

interface IFormData {
    writer: string
    title: string
    contents: string
}

const ReactHookFormPage = () => {
    const { register, handleSubmit } = useForm<IFormData>()

    const onClickSubmit = (data: IFormData) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onClickSubmit)}>
            작성자 : <input type='text' {...register("writer")} />
            제목 : <input type='text' {...register("title")} />
            내용 : <input type='text' {...register("contents")} />
            <button>등록하기</button>
        </form>
    )
}

export default ReactHookFormPage



/* 
    <button type='button'>나만의 버튼 (중요 : form태그 안에서 나만의 버튼으로 사용하기위해 타입을 잘 적용해주어야함 = form 태그안의 버튼의 타입 default 는 submit)</button>
    <button type='reset'>지우기 (state가 지워지는 건 아님!!)</button>
    <button type='submit'>등록하기 (보내기 submit 타입)</button>  // 기본값
*/