import { gql, useQuery } from "@apollo/client"
import { useState } from 'react'

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
    // useMutation은 const [나의 함수] = useMutaion(...) 에서 나의 함수로 버튼이 눌렸을때와 같이 특정 이벤트가 실행 되었을 때 또는 언제든지 원할때 사용이 가능하다.

    // 하지만 useQuery는 페이지가 열렸을때 자동적으로 실행된다.
    // 그래서 useQuery에서 gql``로 작성하는 코드들을 동적으로 바꿔주고 싶을때
    // useMutaiont 처럼 data({variable: ...}) 와 같이 하는게 아닌
    // 자동적으로 실행되는 아래의 코드에서 작성해 준다.
    // useQuery는 동기적으로 동작하기 때문에 처음에 실행된후 1 2 3 이 실행되고 후에 데이터가 정상적으로 들어오면 1 2 3 이 다시 실행이 되게 된다.
    //1
    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            number: 1120
        }
    })
    //2
    console.log(data)
    //3
    return (
        <>
            <div>1번 게시글로 이동이 완료 되었습니다!</div>
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