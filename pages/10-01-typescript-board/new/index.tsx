import BoardWrite from '../../../src/components/units/board/10-typescript-write/BoardWrite.container'
//BoardWrite.container
const GraphqlMutationInputPage = () => {

    return (
        // {BoardWrite({isEdit: false})} -> 원래 형식 프롭스로 전달되는 데이터가 객체로 만들어져서 BoardWrite 라는 함수가 실행되어 전달 되는것이다.
        <BoardWrite isEdit={false} />
    )
}

export default GraphqlMutationInputPage