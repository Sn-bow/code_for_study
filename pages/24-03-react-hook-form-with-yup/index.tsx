import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
    writer: yup.string().required("작성자를 입력해주세요."),
    title: yup.string().required("비밀번호를 입력해주세요."),
    contents: yup.string().required("내용을 입력해주세요."),
    password: yup.string().required("비밀번호를 입력해주세요.").min(3, '최소 3자넘게 적어주세요')

    // email: yup.string().email("이메일 형식에 적합하지 않습니다.").required("이메일은 필수 입력입니다."),
    // password: yup.string().min(4, "비밀번호는 최소 4자이상 입력해 주세요").max(15, "비밀번호는 최대 15자리로 입력해 주세요").required("비밀번호는 필수 입력입니다."),
    // phone: yup.string().matches(/^\d{3}-\d{3,4}-\d{4}$/, '휴대폰 형식에 알맞지 않습니다.').required("휴대폰은 필수 입력입니다.")
})

interface IFormData {
    writer: string
    title: string
    contents: string
    password: string
}

const ReactHookFormPage = () => {
    const { register, handleSubmit, formState } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: "onChange"
    })

    const onClickSubmit = (data: IFormData) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onClickSubmit)}>
            작성자 : <input type='text' {...register("writer")} /> <br />
            <div>{formState.errors?.writer?.message}</div>
            제목 : <input type='text' {...register("title")} /> <br />
            <div>{formState.errors?.title?.message}</div>
            내용 : <input type='text' {...register("contents")} /> <br />
            <div>{formState.errors?.contents?.message}</div>
            비밀번호 : <input type='text' {...register('password')} />
            <div>{formState.errors.password?.message}</div>
            <button style={{ backgroundColor: formState.isValid ? "red" : "blue" }}>
                등록하기
            </button>
        </form>
    )
}

export default ReactHookFormPage



/* 
    <button type='button'>나만의 버튼 (중요 : form태그 안에서 나만의 버튼으로 사용하기위해 타입을 잘 적용해주어야함 = form 태그안의 버튼의 타입 default 는 submit)</button>
    <button type='reset'>지우기 (state가 지워지는 건 아님!!)</button>
    <button type='submit'>등록하기 (보내기 submit 타입)</button>  // 기본값
*/