// import { RedInput, BlueButton } from './BoardWrite.styles'
import * as S from './BoardWrite.styles'

// 부모에서만 자식으로 props를 전달해 줄 수있다.
// 리액트의 데이터 전달 방식
// 단방향 전달 방식
const BoardWriteUI = (props) => {
    const {
        onClickSubmit,
        onChangeWriter,
        onChangeTitle,
        onChangeContents
    } = props

    return (
        <>
            작성자 : <S.RedInput type="text" onChange={onChangeWriter} /> <br />
            제목 : <S.RedInput type="text" onChange={onChangeTitle} /> <br />
            내용 : <S.RedInput type="text" onChange={onChangeContents} /> <br />
            <S.BlueButton onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</S.BlueButton>
        </>
    )
}

export default BoardWriteUI