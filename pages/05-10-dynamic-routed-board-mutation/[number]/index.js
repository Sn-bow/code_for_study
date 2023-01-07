import { gql, useQuery } from "@apollo/client"
import { useRouter } from 'next/router'

const FETCH_BOARD = gql`
query fetchBoard($number: Int){
    fetchBoard(number: $number){
      writer
      title
      contents
      like
    }
  }
`


const StaticRoutedPage = () => {
    const route = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            number: Number(route.query.number)
        }
    })

    return (
        <>
            <div>{route.query.number}번 게시글로 이동이 완료 되었습니다!</div>
            <div>
                {/* 삼항 연산자 사용법 */}
                작성자 : {data ? data.fetchBoard.writer : "로딩중입니다."}
            </div>
            <div>
                {/* 엔드 연산자 사용법 */}
                제목 : {data && data.fetchBoard.title}
            </div>
            <div>
                {/* 옵셔널 체이닝 방법 */}
                내용 : {data?.fetchBoard.contents}
            </div>
        </>
    )
}

export default StaticRoutedPage;