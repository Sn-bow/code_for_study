import BoardWrite from '../../src/components/units/board/write/BoardWrite.container'

const GraphqlMutationInputPage = () => {

    return (
        <BoardWrite />
    )
}

export default GraphqlMutationInputPage


// page 폴더에 있는 index.js 가 app.js 가기전 부모가 되어야한다.
// page 컴포넌트인 index.js 에는 설정 같은것들을 추가한다.
// 가령 로그인이 되었을때만 접속할 수 있는 페이지일 경우 해당 설정을 여기서 작업한다.