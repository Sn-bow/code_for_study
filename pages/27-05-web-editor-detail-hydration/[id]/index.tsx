import { gql, useQuery } from "@apollo/client"
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { IQuery, IQueryFetchBoardArgs } from '../../../src/commons/types/generated/types'
import Dompurify from 'dompurify'

const FETCH_BOARD = gql`
query fetchBoard($boardId: ID!){
    fetchBoard(boardId: $boardId){
      writer
      title
      contents
    }
  }
`


const StaticRoutedPage = () => {
    const router = useRouter()

    // if (typeof router.query.id !== 'string') return
    const boardId = router.query.id

    const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, {
        variables: {
            boardId
        }
    })

    // playground XSS 공격
    // <img src="#" onerror='console.log(localStorage.getItem(\'accessToken\'))' />


    return (
        <>
            <div style={{ color: 'red' }}>
                작성자 : {data?.fetchBoard.writer}
            </div>
            <div style={{ color: 'green' }}>
                제목 : {data?.fetchBoard.title}
            </div>
            {
                data
                    &&
                    (typeof window !== 'undefined')
                    ?
                    <div style={{ color: 'blue' }}>
                        {/* 내용 : {data?.fetchBoard.contents} */}
                        <div dangerouslySetInnerHTML={{ __html: Dompurify.sanitize(data?.fetchBoard.contents) }}>
                        </div>
                    </div>
                    :
                    <div style={{ color: 'blue' }}></div>
            }
            <div style={{ color: 'brown' }}>주소: 구로구</div>
        </>
    )
}

export default StaticRoutedPage;