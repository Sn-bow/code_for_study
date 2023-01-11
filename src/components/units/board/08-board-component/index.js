

const BoardComponent = ({ isEdit }) => {
    return (
        <>
            <h1>{isEdit ? "등록페이지" : "수정페이지"}</h1>
            제목 : <input type="text" /><br />
            내용 : <input type="text" /><br />
            <button>{isEdit ? "등록하기" : "수정하기"}</button>
        </>
    )
}

export default BoardComponent