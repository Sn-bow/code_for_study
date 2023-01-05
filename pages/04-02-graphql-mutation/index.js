import { gql, useMutation } from '@apollo/client'

const CREATE_BOARD = gql`
    mutation{
        createBoard(writer: "철수", title: "제목입니다", contents: "내용이에요"){
            _id
            number
            message
        }
     }
`

// GraphqlApolloClientPage
const GraphqlMutationPage = () => {
    // 기본적으로 Graphql API 요청시에 apolloClient 는 미리 셋팅 해놓는 구조로 되어있다. -> 이말은 위에서 mutation 이나 query 안에 들어가는 값들을 
    // 위에서 적어놓고 아래에서 const [실행함수] = useMutation(CREATE_BOARD) 와 같이 간결하게 코드를 실행 시키는 것이다.
    // 이렇게 사용하는 이유는 가독성측면에서 뛰어나기 때문이다.
    const [나의함수] = useMutation(CREATE_BOARD)
    // useMutaiont 을 사용하기위해서는 나는 모든 페이지에서 useMutation이라는것을 사용할거에요 라는것을 셋팅해주어야 사용할 수 있다. -> query 도 같음
    const onClickSubmit = async () => {
        const result = await 나의함수()
        console.log(result)
        alert(result.data.createBoard.message)
    }

    // 내가 보낸 데이터들은 개발자 도구에서 확인할 수 있는데 개발자 도구의 network 에서 확인할 수 있다.
    // 타입이 fetch인 부분을 확인하면 내가 보낸 데이터에 대해서 확인할 수 있다.
    // 그리고 header 와 payload 에서 payload는 우리가 보내는 데이터의 바디라고 생각하면 된다.
    // response 는 request 이후 백쪽에서 보내는 데이터인데 Preview에서 좀더 쉽게 객체형식으로 데이터를 볼 수있다.
    // error를 확인할 때는 Headers 와 Payload에서 확인하여야 한다. -> 내가 무언가를 잘못 보냈을 경우에

    return (
        <>
            <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
        </>
    )
}

export default GraphqlMutationPage