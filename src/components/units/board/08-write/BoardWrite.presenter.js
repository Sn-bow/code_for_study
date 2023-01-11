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
        onChangeContents,
        myColor,
        isEdit,
        onClickUpdate,
        writer,
        contents,
        title
    } = props

    return (
        <>
            <div>{isEdit ? "수정하기 페이지" : "요청하기 페이지"}</div>
            작성자 : <S.RedInput value={writer} type="text" onChange={onChangeWriter} /> <br />
            제목 : <S.RedInput value={title} type="text" onChange={onChangeTitle} /> <br />
            내용 : <S.RedInput value={contents} type="text" onChange={onChangeContents} /> <br />
            <S.BlueButton
                aaa={myColor}
                onClick={isEdit ? onClickUpdate : onClickSubmit}
            >
                GRAPHQL-API(동기) {isEdit ? "수정하기" : "요청하기"}
            </S.BlueButton>
        </>
    )
}

export default BoardWriteUI